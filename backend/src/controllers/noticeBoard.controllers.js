// src/controllers/noticeBoard.controllers.js

import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { $Enums, PrismaClient } from "../generated/prisma/index.js";
import { isAuthorized, isTeamMember } from "../utils/helpers.js";

const prisma = new PrismaClient();

const createNotice = async (request, response) => {

  try {

    const { title, content, startDate, endDate } = request.body
    const teamId = request.params.teamId
    const createdById = request.user.userId

    if (!teamId || !title || !content || !createdById || !startDate || !endDate) {
      throw new ApiError(400, "Please provide team id, title, content, created by id, start date and end date");
    }

    if (new Date(startDate) > new Date(endDate)) {
      throw new ApiError(400, "Start date must be before or equal to end date");
    }

    const maxAllowedDate = new Date(Date.now() + (15 * 24 * 60 * 60 * 1000));
    if (new Date(startDate) > maxAllowedDate) {
      throw new ApiError(400, "Start date cannot be more than 15 days in the future");
    }

    const isTeamLeader = await isAuthorized(createdById, teamId);

    const notice = await prisma.$transaction(async (prismaTx) => {

      const isMember = await isTeamMember(teamId, createdById);

      if (!isMember) {
        throw new ApiError(400, "You are not a team member");
      }
      const newNotice = await prismaTx.notice.create({
        data: {
          title,
          content,
          createdById,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          teamId,
          status: isTeamLeader ? "APPROVED" : "PENDING"
        }
      })

      await prismaTx.noticeHistory.create({
        data: {
          noticeId: newNotice.id,
          title,
          content,
          createdById,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          status: isTeamLeader ? "APPROVED" : "PENDING"
        }
      })

      return newNotice
    })

    if (!notice) {
      throw new ApiError(500, "Error creating notice");
    }
    response.status(200).json(
      new ApiResponse(200, notice, "Notice created successfully")
    );

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error creating notice", {
        error: error.message
      })
    );
  }

}

const getNotices = async (request, response) => {

  try {
    const teamId = request.params.teamId;
    const historyDays = request.query.historyDays || 1;

    const isLeader = await isAuthorized(request.user.userId, teamId);

    const isMember = await isTeamMember(teamId, request.user.userId);

    if (!isMember) {
      throw new ApiError(400, "You are not a team member");
    }

    const notices = await prisma.notice.findMany({
      where: {
        teamId,
        status: "APPROVED",
        OR: [{
          startDate: isLeader ? { gte: new Date() } : { lte: new Date() },
          endDate: { gte: new Date() }
        }, {
          endDate: { lt: new Date(), gte: new Date(Date.now() - (historyDays * 24 * 60 * 60 * 1000)) }
        }
        ]
      },
      select: {
        id: true,
        title: true,
        endDate: true,
        createdBy: {
          select: {
            firstName: true,
            lastName: true
          }
        }
      }
    })

    response.status(200).json(
      new ApiResponse(200, notices, "Notices fetched successfully")
    );

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to load the notices", {
        error: error.message
      })
    );
  }
}

const getNotice = async (request, response) => {

  try {

    const noticeId = request.params.noticeId;
    const teamId = request.params.teamId;

    console.log(`Entered noticeId: ${noticeId}, teamId: ${teamId}`);

    if (!noticeId || !teamId) {
      throw new ApiError(400, "Please provide notice id and team id");
    }

    const isMember = await isTeamMember(teamId, request.user.userId);

    if (!isMember) {
      throw new ApiError(400, "You are not a team member");
    }

    const notice = await prisma.notice.findUnique({
      where: {
        id: noticeId
      }
    })

    if (!notice) {
      throw new ApiError(404, "Notice not found");
    }

    response.status(200).json(
      new ApiResponse(200, notice, "Notice fetched successfully")
    );

  } catch (error) {
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to load the notice details", {
        error: error.message
      })
    )
  }
}

const updateNotice = async (request, response) => {

  try {

    const noticeId = request.params.noticeId;
    const teamId = request.params.teamId;
    const userId = request.user.userId;

    if (!noticeId || !teamId || !userId) {
      throw new ApiError(400, "Please provide notice id, team id and user id");
    }

    if (request.body.startDate && request.body.endDate) {
      if (new Date(request.body.endDate) <= new Date(request.body.startDate)) {
        throw new ApiError(400, "End date should be greater than start date");
      }
    }

    if (request.body.startDate && new Date(request.body.startDate) > new Date(Date.now() + (15 * 24 * 60 * 60 * 1000))) {
      throw new ApiError(400, "Start date cannot be more than 15 days in the future");
    }

    const isTeamLeader = await isAuthorized(userId, teamId);

    if (!isTeamLeader) {
      throw new ApiError(403, "You are not authorized to update the notice");
    }

    const updateNotice = await prisma.$transaction(async (prismaTx) => {

      const notice = await prismaTx.notice.findUnique({
        where: {
          id: noticeId
        }
      })

      if (!notice) {
        throw new ApiError(404, "Notice not found");
      }

      if (notice.teamId !== teamId) {
        throw new ApiError(403, "Notice does not belong to this team");
      }

      const updatedNotice = await prismaTx.notice.update({
        where: {
          id: noticeId
        },
        data: {
          title: request.body.title,
          content: request.body.content,
          ...(request.body.startDate && { startDate: new Date(request.body.startDate) }),
          ...(request.body.endDate && { endDate: new Date(request.body.endDate) }),
          status: $Enums.Status.APPROVED
        }
      });

      await prismaTx.noticeHistory.create({
        data: {
          noticeId: noticeId,
          title: request.body.title,
          content: request.body.content,
          startDate: request.body.startDate ? new Date(request.body.startDate) : notice.startDate,
          endDate: request.body.endDate ? new Date(request.body.endDate) : notice.endDate,
          status: $Enums.Status.APPROVED,
          createdById: userId,
        }
      })

      return updatedNotice;
    })

    response.status(200).json(
      new ApiResponse(200, updateNotice, "Notice updated successfully")
    );
  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to update the notice", {
        error: error.message
      })
    )
  }

}

const deleteNotice = async (request, response) => {

  try {

    const noticeId = request.params.noticeId;
    const teamId = request.params.teamId;
    const userId = request.user.userId;

    if (!noticeId || !teamId || !userId) {
      throw new ApiError(400, "Please provide notice id, team id and user id");
    }

    const isTeamLeader = await isAuthorized(userId, teamId);

    if (!isTeamLeader) {
      throw new ApiError(403, "You are not authorized to delete the notice");
    }

    const deletedNotice = await prisma.$transaction(async (prismaTx) => {

      const notice = await prismaTx.notice.findUnique({
        where: {
          id: noticeId
        }
      })

      if (!notice) {
        throw new ApiError(404, "Notice not found");
      }

      if (notice.teamId !== teamId) {
        throw new ApiError(403, "Notice does not belong to this team");
      }

      if (notice.status === $Enums.Status.DELETED) {
        throw new ApiError(400, "Notice already deleted");
      }

      const deleteNotice = await prismaTx.notice.update({
        where: {
          id: noticeId
        },
        data: {
          status: $Enums.Status.DELETED
        }
      });

      await prismaTx.noticeHistory.create({
        data: {
          noticeId: noticeId,
          title: notice.title,
          content: notice.content,
          startDate: notice.startDate,
          endDate: notice.endDate,
          status: $Enums.Status.DELETED,
          createdById: userId,
        }
      })

      return deleteNotice;
    })

    if (!deletedNotice) {
      throw new ApiError(404, "Notice not found");
    }

    response.status(200).json(
      new ApiResponse(200, {
        notice: {
          id: deletedNotice.id,
          title: deletedNotice.title,
          startDate: deletedNotice.startDate,
          endDate: deletedNotice.endDate
        }
      }, "Notice deleted successfully")
    );

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to delete the notice", {
        error: error.message
      })
    )
  }

}

// Notice Request
const getNoticeRequests = async (request, response) => {
  try {

    const teamId = request.params.teamId;
    const userId = request.user.userId;
    const status = Array.isArray(request.body?.status) ? request.body.status : ["PENDING"];
    let historyDays = Number(request.body?.historyDays);
    if (!historyDays || historyDays < 1) {
      historyDays = 1;
    }

    if (!teamId || !userId) {
      throw new ApiError(400, "Please provide team id and user id");
    }

    const isTeamLeader = await isAuthorized(userId, teamId);

    const isMember = await isTeamMember(teamId, userId);

    if (!isMember) {
      throw new ApiError(403, "You are not a member of this team");
    }
    
    // If team leader then send all data else send only acitve or future data which belongs to that user
    const noticeRequests = await prisma.notice.findMany({
      where: {
        teamId: teamId,
        status: { in: status },
        endDate: { gte: new Date(Date.now() - (historyDays * 24 * 60 * 60 * 1000)) },
        ...(isTeamLeader ? {} : { createdById: userId })
        
      }
    })

    response.status(200).json(
      new ApiResponse(200, noticeRequests, "List of notice requests fetched successfully")
    );

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to get the list of notice requests", {
        error: error.message
      })
    )
  }
}

const getNoticeRequest = async (request, response) => { }

const updateNoticeRequest = async (request, response) => { }

const cancelNoticeRequest = async (request, response) => { }

const acceptNoticeRequest = async (request, response) => { }

const deleteNoticeRequest = async (request, response) => { }

const rejectNoticeRequest = async (request, response) => { }

const getPendingNoticeRequests = async (request, response) => { }

const getAcceptedNoticeRequests = async (request, response) => { }

export {
  createNotice,
  getNotices,
  getNotice,
  updateNotice,
  deleteNotice,
  getNoticeRequests,
  getNoticeRequest,
  updateNoticeRequest,
  cancelNoticeRequest,
  acceptNoticeRequest,
  deleteNoticeRequest,
  rejectNoticeRequest,
  getPendingNoticeRequests,
  getAcceptedNoticeRequests
}


// start date = 15-05-2025
// end date = 16-05-2026
// means end date is less than start date or end date is greater than start date
//end date < 23-05-2025 