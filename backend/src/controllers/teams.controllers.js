// src/controllers/teams.controllers.js

import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { $Enums, PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const createTeam = async (request, response) => {

  try {

    const { title, about, link, ArrayOfTagIds = [] } = request.body;

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

    console.log(`teamLeaderId: ${teamLeaderId}, title: ${title}, about: ${about}, link: ${link}, ArrayOfTagIds: ${ArrayOfTagIds}`);

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

    console.log(team);

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

const modifyTeamDetails = async (request, response) => { }

const deleteTeam = async (request, response) => { }

const sendInviteToJoinTeam = async (request, response) => { }

const cancelTeamInvitation = async (request, response) => { }

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

const updateTag = async (request, response) => { }

// access the list of past members
const getTimelineOfTeamMembers = async (request, response) => { }

const getTimelineOfUser = async (request, response) => { }



export { createTeam, deleteTeam, modifyTeamDetails, sendInviteToJoinTeam, cancelTeamInvitation, acceptTeamInvitation, rejectTeamInvitation, getListOfPendingTeamInvitations, removeMemberFromTeam, sendRequestToJoinTeam, cancelTeamJoiningRequest, acceptTeamJoiningRequest, rejectTeamJoiningRequest, getListOfPendingTeamJoiningRequests, leaveTeam, getTeams, getTeamDetails, updateMemberRole, getListOfTeamMembers, updateTag, getTimelineOfTeamMembers, getTimelineOfUser };