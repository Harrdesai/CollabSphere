// src/routes/teams.routes.js

import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { createTeam, deleteTeam, modifyTeamDetails, sendInviteToJoinTeam, cancelTeamInvitation, acceptTeamInvitation, rejectTeamInvitation, getListOfPendingTeamInvitations, removeMemberFromTeam, sendRequestToJoinTeam, cancelTeamJoiningRequest, acceptTeamJoiningRequest, rejectTeamJoiningRequest, getListOfPendingTeamJoiningRequests, resign, getTeams, getTeamDetails, updateMemberRole, getListOfTeamMembers, createTag, updateTag, getTimelineOfTeamMembers, getTimelineOfUser } from '../controllers/teams.controllers.js'


const teamsRoutes = express.Router();

teamsRoutes.post('/create', authMiddleware, createTeam);

teamsRoutes.post('/update/:teamId', authMiddleware, modifyTeamDetails);

teamsRoutes.post('/delete/:teamId', authMiddleware, deleteTeam);

teamsRoutes.post('/invite/:teamId', authMiddleware, sendInviteToJoinTeam);

teamsRoutes.post('/cancel-invitation/:id', authMiddleware, cancelTeamInvitation);

teamsRoutes.post('/accept-invitation/:id', authMiddleware, acceptTeamInvitation);

teamsRoutes.post('/reject-invitation/:id', authMiddleware, rejectTeamInvitation);

teamsRoutes.get('/pending-invitations', authMiddleware, getListOfPendingTeamInvitations);

teamsRoutes.post('/:teamId/remove-members', authMiddleware, removeMemberFromTeam);

teamsRoutes.post('/:teamId/join', authMiddleware, sendRequestToJoinTeam);

teamsRoutes.post('/cancel-join-request/:id', authMiddleware, cancelTeamJoiningRequest);

teamsRoutes.post('/accept-join-request/:id', authMiddleware, acceptTeamJoiningRequest);

teamsRoutes.post('/reject-join-request/:teamId', authMiddleware, rejectTeamJoiningRequest);

teamsRoutes.get('/:teamId/pending-join-requests', authMiddleware, getListOfPendingTeamJoiningRequests);

teamsRoutes.post('/:teamId/resign', authMiddleware, resign);

teamsRoutes.get('/get-teams', authMiddleware, getTeams);

teamsRoutes.get('/:teamId/get-team-details', authMiddleware, getTeamDetails);

teamsRoutes.post('/update-member-role', authMiddleware, updateMemberRole);

teamsRoutes.post('/create-tag', authMiddleware, createTag);

teamsRoutes.post('/update-tag', authMiddleware, updateTag);

teamsRoutes.get('/get-team-members', authMiddleware, getListOfTeamMembers);

teamsRoutes.get('/get-timeline-of-team-members', authMiddleware, getTimelineOfTeamMembers);

teamsRoutes.get('/get-timeline-of-user', authMiddleware, getTimelineOfUser);

export default teamsRoutes;