// src/controllers/teams.controllers.js

import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const createTeam = async (request, response) => { }

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