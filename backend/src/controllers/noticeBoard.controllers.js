// src/controllers/noticeBoard.controllers.js

import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { PrismaClient } from "../generated/prisma/index.js";
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

    const notices = await prisma.notice.findMany({
      where: {
        teamId,
        status: "APPROVED",
        OR: [{
          startDate: isLeader ? { gte: new Date() } : { lte: new Date() },
          endDate: { gte: new Date() }
        }, {
          endDate: { lt: new Date(), gte: new Date(Date.now() - (historyDays * 24 * 60 * 60 * 1000)) } // 7 days history
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

const getNotice = async (request, response) => { }

const updateNotice = async (request, response) => { }

const deleteNotice = async (request, response) => { }

// Notice Request
const createNoticeRequest = async (request, response) => { }

const getNoticeRequests = async (request, response) => { }

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
  createNoticeRequest,
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