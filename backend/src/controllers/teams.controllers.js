// src/controllers/teams.controllers.js

import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { $Enums, Prisma, PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const canUserJoinAnotherTeam = async (userId) => {

  const isTeamLeader = await prisma.user.findUnique({
    where: {
      userId
    },
    select: {
      isTeamLeader: true
    }
  })

  if (isTeamLeader.isTeamLeader) {
    return false
  }

  const teamMemberships = await prisma.userRoleInTeam.findMany({
    where: { userId },
    select: { teamId: true },
    distinct: ['teamId']
  });

  return teamMemberships.length < 3;
}

const isAuthorized = async (userId, teamId) => {

  const getTeamLeaderId = await prisma.teams.findUnique({
    where: {
      id: teamId
    },
    select: {
      teamLeaderId: true
    }
  })

  if (getTeamLeaderId.teamLeaderId === userId) {
    return true
  }

  return false

}

const memberCount = async (teamId) => {

  const members = await prisma.userRoleInTeam.groupBy({
    by: ['userId'],
    where: {
      teamId,
      isActive: true,
    },
  });

  return members.length >= 4;
}

const createTeam = async (request, response) => {

  try {

    const { title, about, link = [], ArrayOfTagIds = [] } = request.body;

    const teamLeaderId = request.user.userId;

    if (!title || !about || !teamLeaderId) {
      throw new ApiError(400, "All fields are required");
    }

    const isAllowed = await canUserJoinAnotherTeam(teamLeaderId);

    if (!isAllowed) {
      const getListOfTeamJoined = await prisma.userRoleInTeam.findMany({
        where: {
          userId: teamLeaderId
        },
        include: {
          team: true
        }
      })

      // create a JSON object of designation and team title

      const listOfTeamJoined = getListOfTeamJoined.map((team) => ({
        designation: team.designation,
        teamTitle: team.team.title
      }))

      throw new ApiError(400,
        `You can't create a new team as you are already a member of 3 teams or you are a team leader of team ${listOfTeamJoined[0].teamTitle} with designation ${listOfTeamJoined[0].designation} ------------2nd team ${listOfTeamJoined[1].teamTitle} with designation ${listOfTeamJoined[1].designation} ------------3rd team ${listOfTeamJoined[2].teamTitle} with designation ${listOfTeamJoined[2].designation}------------------3rd team ${listOfTeamJoined[3].teamTitle} with designation ${listOfTeamJoined[3].designation} `);
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

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return response.status(400).json(
          new ApiError(400, {}, `Already invitation ${error.meta.target}`)
        );
      }
    }

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

    if (!teamId) {
      throw new ApiError(400, "Team id is not provided, please provide team id");
    }

    if (title != "" && title !== null && title !== undefined) {

      const uniqueTitle = title.toLowerCase().split(" ").join("");

      const uniqueTitleFromDB = await prisma.teams.findUnique({
        where: {
          id: teamId
        },
        select: {
          uniqueTitle: true
        }
      })
      if (uniqueTitle !== uniqueTitleFromDB.uniqueTitle) {

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
    const teamLeaderIdFromUser = request.user.userId

    if (!teamId || !userId || !designation || !teamLeaderIdFromUser) {
      throw new ApiError(400, "Please provide team id, user id and designation");
    }

    const teamLeaderIdFromDB = await prisma.teams.findUnique({
      where: {
        id: teamId
      },
      select: {
        teamLeaderId: true
      }
    })

    if (teamLeaderIdFromUser !== teamLeaderIdFromDB.teamLeaderId) {
      throw new ApiError(400, "Only team leader can invite user to join team");
    }

    const isUserEligibleToInvite = await canUserJoinAnotherTeam(userId);

    if (!isUserEligibleToInvite) {
      throw new ApiError(400, "User reached maximum team limit or is a team leader");
    }

    const checkIsMemberAlreayWithSameDesignation = await prisma.userRoleInTeam.findFirst({
      where: {
        teamId,
        userId,
        designation
      }
    })

    if (checkIsMemberAlreayWithSameDesignation) {
      throw new ApiError(400, "User is already a member with same designation");
    }

    const sendTeamJoingInvitation = await prisma.$transaction(async (prisma) => {

      const invitation = await prisma.activeInvitationOrRequest.create({
        data: {
          teamId,
          memberId: userId,
          designation
        }
      });

      console.log(`invitation : ${invitation.id}`);
      await prisma.teamsEditLog.create({
        data: {
          teamId: invitation.teamId,
          userId: invitation.memberId,
          action: $Enums.Action.INVITATION_SENT,
          designation: invitation.designation,
          requestId: invitation.id
        }
      })

      return invitation
    })

    if (!sendTeamJoingInvitation) {
      throw new ApiError(400, "Failed the process of sending invitation in database");
    }

    response.status(200).json(
      new ApiResponse(200, {
        invitation: sendTeamJoingInvitation
      })
    )
  } catch (error) {

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return response.status(400).json(
          new ApiError(400, {}, `Already invitation ${error.meta.target}`)
        );
      }
    }

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to send Team join invitation request", {
        error: error.message
      })
    )
  }

}

const cancelTeamInvitation = async (request, response) => {

  try {

    const id = request.params.id;
    const userId = request.user.userId

    if (!id) {
      throw new ApiError(400, "Please provide invitation id");
    }

    const cancelTeamJoiningInvitation = await prisma.$transaction(async (prisma) => {

      const invitation = await prisma.activeInvitationOrRequest.findUnique({
        where: { id },
        select: {
          teamId: true,
          memberId: true,
          designation: true
        }
      });

      if (!invitation) {
        throw new ApiError(400, "Invitation not found");
      }

      if (invitation.memberId !== userId) {
        throw new ApiError(400, "You are not authorized to cancel this invitation");
      }

      await prisma.teamsEditLog.create({
        data: {
          teamId: invitation.teamId,
          userId: invitation.memberId,
          action: $Enums.Action.INVITATION_REVOKED,
          designation: invitation.designation,
          requestId: invitation.id
        }
      })

      await prisma.activeInvitationOrRequest.delete({
        where: {
          id
        }
      })

      return invitation;
    })

    if (!cancelTeamJoiningInvitation) {
      throw new ApiError(400, "Invitation cancellation process failed in database");
    }

    response.status(200).json(
      new ApiResponse(200, {
        invitation: cancelTeamJoiningInvitation
      }, "Invitation cancelled successfully")
    )

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to cancel Team invitation", {
        error: error.message
      })
    )
  }

}

const acceptTeamInvitation = async (request, response) => {

  try {

    const id = request.params.id;

    if (!id) {
      throw new ApiError(400, "Please provide invitation id");
    }
    const userId = request.user.userId

    const getUserIdFromInvitation = await prisma.activeInvitationOrRequest.findUnique({
      where: {
        id: id
      },
      select: {
        memberId: true,
      }
    })

    console.log(`getUserIdFromInvitation : ${JSON.stringify(getUserIdFromInvitation)}`);

    if (userId !== getUserIdFromInvitation.memberId) {
      throw new ApiError(400, "you are not the invitee of this invitation, you can't accept this invitation");
    }

    const isUserEligibleToInvite = await canUserJoinAnotherTeam(userId);

    if (!isUserEligibleToInvite) {
      throw new ApiError(400, "User reached maximum team limit or is a team leader");
    }

    const acceptTeamJoiningInvitation = await prisma.$transaction(async (prisma) => {

      const invitation = await prisma.activeInvitationOrRequest.findUnique({
        where: { id },
        select: {
          memberId: true,
          teamId: true,
          designation: true
        }
      })

      if (!invitation) {
        throw new ApiError(404, "Invitation no longer exists");
      }

      if (invitation.memberId !== userId) {
        throw new ApiError(403, "You are not authorized to accept this invitation");
      }

      const roleExists = await prisma.userRoleInTeam.findFirst({
        where: {
          userId: invitation.memberId,
          teamId: invitation.teamId,
          designation: invitation.designation
        }
      });

      if (roleExists) {
        throw new ApiError(400, "User already has this role in the team");
      }

      await prisma.teamsEditLog.create({
        data: {
          teamId: invitation.teamId,
          userId: invitation.memberId,
          action: $Enums.Action.INVITATION_ACCEPTED,
          designation: invitation.designation,
          requestId: invitation.id
        }
      })

      await prisma.activeInvitationOrRequest.delete({
        where: {
          id
        }
      })

      await prisma.userRoleInTeam.create({
        data: {
          teamId: invitation.teamId,
          userId: invitation.memberId,
          designation: invitation.designation
        }
      })

      return invitation
    })

    if (!acceptTeamJoiningInvitation) {
      throw new ApiError(400, "Invitation acceptance process failed in database");
    }
    response.status(200).json(
      new ApiResponse(200, {
        invitation: acceptTeamJoiningInvitation
      }, "Invitation accepted successfully")
    )

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to accept Team invitation", {
        error: error.message
      })
    )
  }

}

const rejectTeamInvitation = async (request, response) => {

  try {

    const invitationId = request.params.id;
    const userId = request.user.userId

    if (!invitationId || !userId) {
      throw new ApiError(400, "Please provide user id and invitation id");
    }

    const rejectTeamJoiningInvitation = await prisma.$transaction(async (prisma) => {

      const invitation = await prisma.activeInvitationOrRequest.findUnique({
        where: { id: invitationId },
        select: {
          memberId: true,
          teamId: true,
          designation: true
        }
      })

      if (!invitation) {
        throw new ApiError(404, "Invitation no longer exists");
      }

      if (invitation.memberId !== userId) {
        throw new ApiError(403, "You are not authorized to reject this invitation");
      }

      await prisma.teamsEditLog.create({
        data: {
          teamId: invitation.teamId,
          userId: invitation.memberId,
          action: $Enums.Action.INVITATION_REJECTED,
          designation: invitation.designation,
          requestId: invitation.id
        }
      })

      await prisma.activeInvitationOrRequest.delete({
        where: {
          id: invitationId
        }
      })

      return invitation
    })

    if (!rejectTeamJoiningInvitation) {
      throw new ApiError(400, "Invitation rejection process failed in database");
    }
    response.status(200).json(
      new ApiResponse(200, {
        invitation: rejectTeamJoiningInvitation
      }, "Invitation rejection processed successfully")
    )

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to reject Team invitation", {
        error: error.message
      })
    )
  }

}

const getListOfPendingTeamInvitations = async (request, response) => {

  try {

    const userId = request.user.userId;

    const invitations = await prisma.activeInvitationOrRequest.findMany({
      where: { memberId: userId },
      select: {
        id: true,
        memberId: true,
        teamId: true,
        designation: true,
        team: {
          select: {
            title: true,
            teamLeader: {
              select: {
                firstName: true,
                lastName: true
              }
            }
          }
        }
      }
    })

    if (!invitations) {
      throw new ApiError(404, "Invitations not found");
    }

    const invitationsJson = invitations.map((invitation) => ({
      id: invitation.id,
      memberId: invitation.memberId,
      teamId: invitation.teamId,
      designation: invitation.designation,
      team: {
        title: invitation.team.title,
        teamLeader: {
          firstName: invitation.team.teamLeader.firstName,
          lastName: invitation.team.teamLeader.lastName
        }
      }
    }))

    response.status(200).json(
      new ApiResponse(200, {
        invitations: invitationsJson
      }, "List of pending team invitations fetched successfully")
    )
  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to fetch the list of pending team invitations", {
        error: error.message
      })
    )
  }
}

const removeMemberFromTeam = async (request, response) => {
  try {

    const teamId = request.params.teamId
    const userId = request.user.userId
    const { arrayOfUserRoleInTeamIds = [] } = request.body

    if (!teamId || !userId) {
      throw new ApiError(400, "Please provide team id and user id");
    }

    const isLeader = await isAuthorized(userId, teamId);

    if (!isLeader) {
      throw new ApiError(400, "Only team leader can remove member from team");
    }

    const setOfUserRoleInTeamIds = Array.from(new Set(arrayOfUserRoleInTeamIds));

    const rolesToRemove = await prisma.userRoleInTeam.findMany({
      where: {
        id: { in: setOfUserRoleInTeamIds },
        teamId: teamId,
      }
    });

    const rolesToRemoveWithoutLeader = rolesToRemove.filter(role => role.designation !== "TEAM_LEADER" && role.isActive === true)
    console.log(`filteredRolesToRemove: ${JSON.stringify(rolesToRemoveWithoutLeader)}`);


    if (rolesToRemoveWithoutLeader.length === 0) {
      throw new ApiError(400, "No valid roles to remove (TEAM_LEADER role cannot be removed)");
    }

    const removeMembers = await prisma.$transaction(async (prisma) => {

      await prisma.userRoleInTeam.updateMany({
        where: {
          id: { in: rolesToRemoveWithoutLeader.map(role => role.id) }
        },
        data: {
          isActive: false
        },
      });

      await prisma.teamsEditLog.createMany({
        data: rolesToRemoveWithoutLeader.map(role => ({
          teamId: role.teamId,
          userId: role.userId,
          action: $Enums.Action.MEMBER_REMOVED,
          designation: role.designation,
          requestId: role.id
        }))
      });

      return rolesToRemoveWithoutLeader.map(role => role.id);
    })

    const getRemovedMembersNameWithTheirRole = await prisma.userRoleInTeam.findMany({
      where: {
        id: { in: removeMembers }
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true
          }
        }
      }
    })

    const removedMembers = getRemovedMembersNameWithTheirRole.map((member) => {
      return {
        firstName: member.user.firstName,
        lastName: member.user.lastName,
        designation: member.designation
      }
    })

    response.status(200).json(
      new ApiResponse(200, {
        removedMembers: removedMembers
      }, "Members removed from team successfully")
    )

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to remove members from team", {
        error: error.message
      })
    )
  }
}

const sendRequestToJoinTeam = async (request, response) => {

  try {

    const { designation } = request.body;
    const teamId = request.params.teamId;
    const userId = request.user.userId
    const isUserTeamLeader = await isAuthorized(userId, teamId);

    if (isUserTeamLeader) {
      throw new ApiError(400, "You are a team leader");
    }

    if (!teamId || !userId || !designation) {
      throw new ApiError(400, "Please provide team id, user id and designation");
    }

    const isUserEligibleToJoin = await canUserJoinAnotherTeam(userId);

    if (!isUserEligibleToJoin) {
      throw new ApiError(400, "You reached maximum team limit or is a team leader");
    }

    const checkIsMemberAlreayWithSameDesignation = await prisma.userRoleInTeam.findFirst({
      where: {
        teamId,
        userId,
        designation
      }
    })

    if (checkIsMemberAlreayWithSameDesignation) {
      throw new ApiError(400, "User is already a member with same designation");
    }

    const isMemberAlreadyInvited = await prisma.activeInvitationOrRequest.findFirst({
      where: {
        teamId,
        memberId: userId,
        designation
      }
    })

    if (isMemberAlreadyInvited) {
      throw new ApiError(400, "User is already invited");
    }

    const sendRequestToJoinTeam = await prisma.$transaction(async (prisma) => {

      const isLimitReached = await memberCount(teamId);

      if (isLimitReached) {
        throw new ApiError(400, "Team reached maximum member limit");
      }

      const request = await prisma.activeInvitationOrRequest.create({
        data: {
          teamId,
          memberId: userId,
          designation
        }
      });

      await prisma.teamsEditLog.create({
        data: {
          teamId: request.teamId,
          userId: request.memberId,
          action: $Enums.Action.INVITATION_SENT,
          designation: request.designation,
          requestId: request.id
        }
      })

      return request;
    })

    if (!sendRequestToJoinTeam) {
      throw new ApiError(400, "Failed the process of sending request to join team in database");
    }

    const team = await prisma.teams.findUnique({
      where: {
        id: teamId
      },
      select: {
        title: true
      }
    })

    response.status(200).json(
      new ApiResponse(200, {
        teamId: sendRequestToJoinTeam.teamId,
        userId: sendRequestToJoinTeam.memberId,
        designation: sendRequestToJoinTeam.designation,
        team: {
          title: team.title
        }
      })
    )
  } catch (error) {

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return response.status(400).json(
          new ApiError(400, {}, `Already invitation ${error.meta.target}`)
        );
      }
    }

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to send Team join invitation request", {
        error: error.message
      })
    )
  }

}

const cancelTeamJoiningRequest = async (request, response) => {

  try {

    const id = request.params.id;
    const userId = request.user.userId

    if (!id) {
      throw new ApiError(400, "Please provide request id");
    }

    const cancelRequest = await prisma.$transaction(async (prisma) => {

      // also include team name
      const getDetails = await prisma.activeInvitationOrRequest.findUnique({
        where: { id },
        include: {
          team: {
            select: {
              title: true
            }
          }
        }
      });

      if (!getDetails) {
        throw new ApiError(400, "Request not found");
      }

      if (getDetails.memberId !== userId) {
        throw new ApiError(400, "You are not authorized to cancel this request");
      }

      await prisma.teamsEditLog.create({
        data: {
          teamId: getDetails.teamId,
          userId: getDetails.memberId,
          action: $Enums.Action.INVITATION_REVOKED,
          designation: getDetails.designation,
          requestId: getDetails.id
        }
      })

      await prisma.activeInvitationOrRequest.delete({
        where: {
          id
        }
      });

      return getDetails
    })

    if (!cancelRequest) {
      throw new ApiError(400, "request cancellation process failed in database");
    }

    response.status(200).json(
      new ApiResponse(200, {
        teamId: cancelRequest.teamId,
        userId: cancelRequest.memberId,
        designation: cancelRequest.designation,
        teamName: cancelRequest.team.title

      }, "Invitation cancelled successfully")
    )

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to cancel Team invitation", {
        error: error.message
      })
    )
  }

}

const acceptTeamJoiningRequest = async (request, response) => {

  try {

    const requestId = request.params.id;
    const teamLeaderIdFromUser = request.user.userId

    if (!requestId || !teamLeaderIdFromUser) {
      throw new ApiError(400, "request id and team leader id not found");
    }

    const getRequestDetails = await prisma.activeInvitationOrRequest.findUnique({
      where: {
        id: requestId
      },
      include: {
        team: {
          select: {
            teamLeaderId: true,
            title: true
          },
        },
        member: {
          select: {
            firstName: true,
            lastName: true
          }
        }
      }
    })

    if (!getRequestDetails) {
      throw new ApiError(400, "Request not found");
    }

    const { teamId, memberId, designation } = getRequestDetails;

    const teamLeaderId = getRequestDetails.team.teamLeaderId; 

    if (teamLeaderId !== teamLeaderIdFromUser) {
      throw new ApiError(400, "You are not a team leader");
    }

    const acceptRequest = await prisma.$transaction(async (prisma) => {

      const checkIsRequesterAlreadyMemberWithSameDesignation = await prisma.userRoleInTeam.findMany({
        where: {
          teamId,
          userId: memberId,
          isActive: true,
          designation
        }
      })

      if (checkIsRequesterAlreadyMemberWithSameDesignation.length > 0) {
        throw new ApiError(400, "The user is already a member of team with same designation");
      }

      const isLimitReached = await memberCount(teamId);

      if (isLimitReached) {
        throw new ApiError(400, "Team member limit reached");
      }

      const isUserEligibleToJoinTeam = await canUserJoinAnotherTeam(memberId);

      if (!isUserEligibleToJoinTeam) {
        throw new ApiError(400, "The user is reached maximum team limit or is a team leader");
      }

      await prisma.userRoleInTeam.create({
        data: {
          teamId,
          userId: memberId,
          isActive: true,
          designation
        }
      })

      await prisma.teamsEditLog.create({
        data: {
          teamId: getRequestDetails.teamId,
          userId: getRequestDetails.memberId,
          action: $Enums.Action.INVITATION_ACCEPTED,
          designation: getRequestDetails.designation,
          requestId: getRequestDetails.id
        }
      })

      await prisma.activeInvitationOrRequest.delete({
        where: {
          id: requestId
        }
      })

      return getRequestDetails
    })

    if (!acceptRequest) {
      throw new ApiError(400, "Failed the process of accepting request in database");
    }

    response.status(200).json(
      new ApiResponse(200, {
        teamName: getRequestDetails.team.title,
        designation: getRequestDetails.designation,
        firstName: getRequestDetails.member.firstName,
        lastName: getRequestDetails.member.lastName
      })
    )

  } catch (error) {

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return response.status(400).json(
          new ApiError(400, {}, `Request already accepted ${error.meta.target}`)
        );
      }
    }

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to accept the request", {
        error: error.message
      })
    )
  }
}

const rejectTeamJoiningRequest = async (request, response) => {

  try {

    const { requestId } = request.body;
    const teamId = request.params.teamId;
    const userId = request.user.userId

    console.log(`userId: ${userId}, teamId: ${teamId}, requestId: ${requestId}`);

    if (!teamId || !userId || !requestId) {
      throw new ApiError(400, "Please provide team id, user id and request id");
    }

    const isUserTeamLeader = await isAuthorized(userId, teamId);

    if (!isUserTeamLeader) {
      throw new ApiError(400, "You are not a team leader");
    }

    const rejectRequest = await prisma.$transaction(async (prisma) => {
      const getDetails = await prisma.activeInvitationOrRequest.findUnique({
        where: { id: requestId }
      });

      if (!getDetails) {
        throw new ApiError(400, "Request not found");
      }

      await prisma.teamsEditLog.create({
        data: {
          teamId: getDetails.teamId,
          userId: getDetails.memberId,
          action: $Enums.Action.INVITATION_REVOKED,
          designation: getDetails.designation,
          requestId: requestId
        }
      })

      await prisma.activeInvitationOrRequest.delete({
        where: {
          id: requestId
        }
      })

      return getDetails;
    })

    if (!rejectRequest) {
      throw new ApiError(400, "Request rejection process failed in database");
    }

    response.status(200).json(
      new ApiResponse(200, {
        teamId: rejectRequest.teamId,
        userId: rejectRequest.memberId,
        designation: rejectRequest.designation
      }, "Request rejected successfully")
    )


  } catch (error) {
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to reject team joining request", {
        error: error.message
      })
    )
  }

}

const getListOfPendingTeamJoiningRequests = async (request, response) => { 
  
  try {

    const userId = request.user.userId;
    const teamId = request.params.teamId;

    const teamJoiningRequests = await prisma.activeInvitationOrRequest.findMany({
      where: {
        teamId
      },
      include: {
        team: {
          select: {
            title: true,
            teamLeader: {
              select: {
                firstName: true,
                lastName: true
              }
            }
          }
        }
      }
    })

    if (teamJoiningRequests.length === 0) {
      throw new ApiError(404, "No pending team joining requests found");
    }

    const requestsJson = teamJoiningRequests.map((requestsJson) => ({
      id: requestsJson.id,
      memberId: requestsJson.memberId,
      teamId: requestsJson.teamId,
      designation: requestsJson.designation,
      team: {
        title: requestsJson.team.title,
        teamLeader: {
          firstName: requestsJson.team.teamLeader.firstName,
          lastName: requestsJson.team.teamLeader.lastName
        }
      }
    }))

    response.status(200).json(
      new ApiResponse(200, {
        requests: requestsJson
      }, "List of pending team joining requests fetched successfully")
    )
  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to fetch the list of pending team joining requests", {
        error: error.message
      })
    )
  }

}

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


// verify team leader id while updating team detail
// implementaion of isActive field in UserRoleInTeam
// Remove pending request or invitation on last member accepted a request or invitation 