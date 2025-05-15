// src/routes/noticeBoard.routes.js

import { Router } from "express";
import { authMiddleware } from '../middleware/auth.middleware.js';
import { createNotice, getNotices, getNotice, updateNotice, deleteNotice, createNoticeRequest, getNoticeRequests, getNoticeRequest, updateNoticeRequest, cancelNoticeRequest, acceptNoticeRequest, deleteNoticeRequest, rejectNoticeRequest, getPendingNoticeRequests, getAcceptedNoticeRequests  } from '../controllers/noticeBoard.controllers.js';

const noticeBoardRoutes = Router();

noticeBoardRoutes.post('/create', authMiddleware, createNotice);

noticeBoardRoutes.get('/notices', authMiddleware, getNotices);

noticeBoardRoutes.get('/notice', authMiddleware, getNotice);

noticeBoardRoutes.post('/update', authMiddleware, updateNotice );

noticeBoardRoutes.post('/delete', authMiddleware, deleteNotice );

noticeBoardRoutes.post('/create-request', authMiddleware, createNoticeRequest );

noticeBoardRoutes.get('/requests', authMiddleware, getNoticeRequests );

noticeBoardRoutes.get('/request', authMiddleware, getNoticeRequest );

noticeBoardRoutes.post('/update-request', authMiddleware, updateNoticeRequest );

noticeBoardRoutes.post('/cancel-request', authMiddleware, cancelNoticeRequest );

noticeBoardRoutes.post('/accept-request', authMiddleware, acceptNoticeRequest );

noticeBoardRoutes.post('/delete-request', authMiddleware, deleteNoticeRequest );

noticeBoardRoutes.post('/reject-request', authMiddleware, rejectNoticeRequest );

noticeBoardRoutes.get('/pending-requests', authMiddleware, getPendingNoticeRequests );

noticeBoardRoutes.get('/accepted-requests', authMiddleware, getAcceptedNoticeRequests );

export default noticeBoardRoutes;