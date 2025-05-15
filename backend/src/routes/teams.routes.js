// src/routes/teams.routes.js

import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { createTeam, deleteTeam, modifyTeamDetails, sendInviteToJoinTeam, cancelTeamInvitation, acceptTeamInvitation, rejectTeamInvitation, getListOfPendingTeamInvitations, removeMemberFromTeam, sendRequestToJoinTeam, cancelTeamJoiningRequest, acceptTeamJoiningRequest, rejectTeamJoiningRequest, getListOfPendingTeamJoiningRequests, leaveTeam, getTeams, getTeamDetails, updateMemberRole, getListOfTeamMembers, updateTag, getTimelineOfTeamMembers, getTimelineOfUser } from '../controllers/teams.controllers.js'


const teamsRoutes = express.Router();

teamsRoutes.post('/create', authMiddleware, createTeam);

teamsRoutes.post('/delete', authMiddleware, deleteTeam);

teamsRoutes.post('/update', authMiddleware, modifyTeamDetails);

teamsRoutes.post('/invite', authMiddleware, sendInviteToJoinTeam);

teamsRoutes.post('/cancel-invitation', authMiddleware, cancelTeamInvitation);

teamsRoutes.post('/accept-invitation', authMiddleware, acceptTeamInvitation);

teamsRoutes.post('/reject-invitation', authMiddleware, rejectTeamInvitation);

teamsRoutes.get('/pending-invitations', authMiddleware, getListOfPendingTeamInvitations);

teamsRoutes.post('/remove-member', authMiddleware, removeMemberFromTeam);

teamsRoutes.post('/join', authMiddleware, sendRequestToJoinTeam);

teamsRoutes.post('/cancel-join-request', authMiddleware, cancelTeamJoiningRequest);

teamsRoutes.post('/accept-join-request', authMiddleware, acceptTeamJoiningRequest);

teamsRoutes.post('/reject-join-request', authMiddleware, rejectTeamJoiningRequest);

teamsRoutes.get('/pending-join-requests', authMiddleware, getListOfPendingTeamJoiningRequests);

teamsRoutes.post('/leave', authMiddleware, leaveTeam);

teamsRoutes.get('/get-teams', authMiddleware, getTeams);

teamsRoutes.get('/get-team-details', authMiddleware, getTeamDetails);

teamsRoutes.post('/update-member-role', authMiddleware, updateMemberRole);

teamsRoutes.post('/update-tag', authMiddleware, updateTag);

teamsRoutes.get('/get-team-members', authMiddleware, getListOfTeamMembers);

teamsRoutes.get('/get-timeline-of-team-members', authMiddleware, getTimelineOfTeamMembers);

teamsRoutes.get('/get-timeline-of-user', authMiddleware, getTimelineOfUser);

export default teamsRoutes;