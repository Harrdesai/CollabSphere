// src/routes/noticeBoard.routes.js

import { Router } from "express";
import { authMiddleware } from '../middleware/auth.middleware.js';
import { createNotice, getNotices, getNotice, updateNotice, deleteNotice, createNoticeRequest, getNoticeRequests, getNoticeRequest, updateNoticeRequest, cancelNoticeRequest, acceptNoticeRequest, deleteNoticeRequest, rejectNoticeRequest, getPendingNoticeRequests, getAcceptedNoticeRequests  } from '../controllers/noticeBoard.controllers.js';

const noticeBoardRoutes = Router({ mergeParams: true });

noticeBoardRoutes.post('/create', authMiddleware, createNotice);

noticeBoardRoutes.get('/all-notices', authMiddleware, getNotices);

noticeBoardRoutes.get('/:noticeId', authMiddleware, getNotice);

noticeBoardRoutes.put('/:noticeId', authMiddleware, updateNotice);

noticeBoardRoutes.delete('/:noticeId', authMiddleware, deleteNotice);

noticeBoardRoutes.post('/requests', authMiddleware, createNoticeRequest);

noticeBoardRoutes.get('/requests', authMiddleware, getNoticeRequests);

noticeBoardRoutes.get('/requests/:requestId', authMiddleware, getNoticeRequest);

noticeBoardRoutes.put('/requests/:requestId', authMiddleware, updateNoticeRequest);

noticeBoardRoutes.delete('/requests/:requestId', authMiddleware, deleteNoticeRequest);

noticeBoardRoutes.post('/requests/:requestId/cancel', authMiddleware, cancelNoticeRequest);

noticeBoardRoutes.post('/requests/:requestId/accept', authMiddleware, acceptNoticeRequest);

noticeBoardRoutes.post('/requests/:requestId/reject', authMiddleware, rejectNoticeRequest);

noticeBoardRoutes.get('/requests/pending', authMiddleware, getPendingNoticeRequests);

noticeBoardRoutes.get('/requests/accepted', authMiddleware, getAcceptedNoticeRequests);

export default noticeBoardRoutes;