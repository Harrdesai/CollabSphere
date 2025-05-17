// src/controllers/teams.controllers.js

import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { $Enums, PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const createTeam = async (request, response) => {

  try {

    const { title, about, link = [], ArrayOfTagIds = [] } = request.body;

    const teamLeaderId = request.cookies.userId;

    if (!title || !about || !teamLeaderId) {
      throw new ApiError(400, "All fields are required");
    }

    const uniqueTitle = title.toLowerCase().split(" ").join("");

    const isTeamAlreadyCreated = await prisma.teams.findFirst({
      where: {
        uniqueTitle
      }
    })

    if (isTeamAlreadyCreated) {
      throw new ApiError(400, "Team already exists");
    }

    const team = await prisma.$transaction(async (prisma) => {

      const newTeam = await prisma.teams.create({
        data: {
          uniqueTitle,
          title,
          about,
          teamLeaderId,
          link,
          tags: {
            connect: ArrayOfTagIds.map((tagId) => ({ id: tagId }))
          }
        }
      });

      await prisma.user.update({
        where: {
          userId: teamLeaderId
        },
        data: {
          isTeamLeader: true
        }
      });

      await prisma.userRoleInTeam.create({
        data: {
          userId: teamLeaderId,
          teamId: newTeam.id,
          designation: $Enums.Designation.TEAM_LEADER
        }
      });

      await prisma.teamsEditLog.create({
        data: {
          teamId: newTeam.id,
          userId: teamLeaderId,
          action: $Enums.Action.TEAM_CREATED,
          designation: $Enums.Designation.TEAM_LEADER
        }
      });

      return newTeam;
    });

    const teamMembers = await prisma.userRoleInTeam.findMany({
      where: {
        teamId: team.id
      },
      include: {
        user: true
      }
    })

    const teamMemberWithTheirDesignation = await teamMembers.map((member) => ({
      userId: member.userId,
      name: member.user.firstName + " " + member.user.lastName,
      designation: member.designation
    }))

    response.status(200).json(
      new ApiResponse(200, {
        team: {
          id: team.id,
          title: team.title,
          about: team.about,
          link: team.link,
          teamLeaderId: team.teamLeaderId,
          teamMemberWithTheirDesignation,
          tags: team.tags
        }
      }, "Team created successfully")
    )

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error while creating team", {
        error: error.message
      })
    )

  }
}

const modifyTeamDetails = async (request, response) => {

  try {
    
    const { title, about, link = [], ArrayOfTagIds = [] } = request.body;
    const teamId = request.params.teamId;

    if ( !teamId ) {
      throw new ApiError(400, "Team id is not provided, please provide team id");
    }

    if ( title != ""  && title !== null && title !== undefined ) {
      
      const uniqueTitle = title.toLowerCase().split(" ").join("");

    const uniqueTitleFromDB = await prisma.teams.findUnique({
      where: {
        id: teamId
      },
      select: {
        uniqueTitle: true
      }
    })
    if ( uniqueTitle !== uniqueTitleFromDB.uniqueTitle ) {
      
      const isTeamAlreadyCreated = await prisma.teams.findFirst({
        where: {
          uniqueTitle
        }
      })

      if (isTeamAlreadyCreated) {
        throw new ApiError(400, "Team already exists");
      }
    }

    }

    const team = await prisma.$transaction(async (prisma) => {
      
      const updateTeamDetails = await prisma.teams.update({
        where: {
          id: teamId
        },
        data: {
          title,
          about,
          link,
          tags: {
            connect: ArrayOfTagIds.map((tagId) => ({ id: tagId }))
          }
        }
      });

      return updateTeamDetails;
    })

    response.status(200).json(
      new ApiResponse(200, {
        team: {
          id: team.id,
          title: team.title,
          about: team.about,
          link: team.link,
          tags: team.tags
        }
        
      }, "Team details updated successfully")
    )
  } catch (error) {
   
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error while updating team details", {
        error: error.message
      })
    )

  }
}

const deleteTeam = async (request, response) => { }

const sendInviteToJoinTeam = async (request, response) => { 

  try {
  
    const { userId, designation } = request.body;
    const teamId = request.params.teamId;

    if ( !teamId || !userId || !designation ) {
      throw new ApiError(400, "Please provide team id, user id and designation");
    }

    const isInvitteeIsTeamLeader = await prisma.user.findUnique({
      where: {
        userId
      },
      select: {
        isTeamLeader: true
      }
    })

    if ( isInvitteeIsTeamLeader.isTeamLeader ) {
      throw new ApiError(400, "we can't proceed this request as invitee is team leader");
    }

    const sendTeamJoingInvitation = await prisma.$transaction(async (prisma) => {
    
    const invitation = await prisma.activeInvitationOrRequest.create({
      data: {
        teamId,
        memberId: userId,
        designation
      }
    });
    
    await prisma.teamsEditLog.create({
      data: {
        teamId,
        userId,
        action: $Enums.Action.INVITATION_SENT,
        designation
      }
    })

    return invitation;
  })

    response.status(200).json(
      new ApiResponse(200, {
        invitation: sendTeamJoingInvitation
      })
    )
  } catch (error) {
    
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to send Team join invitation request", {
        error: error.message
      })
    ) 
  }

}

const cancelTeamInvitation = async (request, response) => { 

  try {

    const teamId = request.params.teamId;
    const { userId } = request.body;

    if ( !teamId || !userId ) {
      throw new ApiError(400, "Please provide team id and user id");
    }

    const updateTeamEditLog = await prisma.teamsEditLog.create({
      data: {
        teamId,
        userId,
        action: $Enums.Action.INVITATION_REVOKED
      }
    })

    response.status(200).json(
      new ApiResponse(200, {
        teamEditLog: updateTeamEditLog
      }, "Team joining invitation revoked successfully")
    )
    
  } catch (error) {
  
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to cancel Team invitation", {
        error: error.message
      })
    )
  }

}

const acceptTeamInvitation = async (request, response) => { }

const rejectTeamInvitation = async (request, response) => { }

const getListOfPendingTeamInvitations = async (request, response) => { }

const removeMemberFromTeam = async (request, response) => { }

const sendRequestToJoinTeam = async (request, response) => { }

const cancelTeamJoiningRequest = async (request, response) => { }

const acceptTeamJoiningRequest = async (request, response) => { }

const rejectTeamJoiningRequest = async (request, response) => { }

const getListOfPendingTeamJoiningRequests = async (request, response) => { }

const leaveTeam = async (request, response) => { }

// Get all teams
const getTeams = async (request, response) => { }

// Get team details
const getTeamDetails = async (request, response) => { }

const updateMemberRole = async (request, response) => { }

const getListOfTeamMembers = async (request, response) => { }

const createTag = async (request, response) => {
  
  try {

    const { tagName } = request.body;

    if (!tagName) {
      throw new ApiError(400, "Tag is required");
    }

    const isTagAlreadyCreated = await prisma.tag.findFirst({
      where: {
        name: tagName.toLowerCase().trim().split(" ").join("")
      }
    })

    if (isTagAlreadyCreated) {
      throw new ApiError(400, "Tag already exists");
    }

    const newTag = await prisma.tag.create({
      data: {
        name: tagName.toLowerCase().trim().split(" ").join("")
      }
    })

    response.status(200).json(
      new ApiResponse(200, {
        tag: newTag
      }, `Tag : ${tagName} created successfully`)
    )
    
  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error while creating tag", {
        error: error.message
      })
    )
    
  }
}

const updateTag = async (request, response) => { 

  try {

    const { updatedName, oldName } = request.body;

    if (!updatedName || !oldName) {
      throw new ApiError(400, "new name and tag is required");
    }

    const tagId = await prisma.tag.findUnique({
      where: {
        name: oldName.toLowerCase().trim().split(" ").join("")
      },
      select: {
        id: true
      }
    })
    const updatedTag = await prisma.tag.update({
      where: {
        id: tagId.id
      },
      data: {
        name: updatedName.toLowerCase().trim().split(" ").join("")
      }
    })

    response.status(200).json(
      new ApiResponse(200, {
        tag: updatedTag
      }, `Tag : ${updatedName} updated successfully`)
    )
    
  } catch (error) {
    
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error while updating tag", {
        error: error.message
      })
    )
    
  }
}

// access the list of past members
const getTimelineOfTeamMembers = async (request, response) => { }

const getTimelineOfUser = async (request, response) => { }



export { createTeam, deleteTeam, modifyTeamDetails, sendInviteToJoinTeam, cancelTeamInvitation, acceptTeamInvitation, rejectTeamInvitation, getListOfPendingTeamInvitations, removeMemberFromTeam, sendRequestToJoinTeam, cancelTeamJoiningRequest, acceptTeamJoiningRequest, rejectTeamJoiningRequest, getListOfPendingTeamJoiningRequests, leaveTeam, getTeams, getTeamDetails, updateMemberRole, getListOfTeamMembers, createTag, updateTag, getTimelineOfTeamMembers, getTimelineOfUser };