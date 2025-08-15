
import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { getAllTags, createTag, updateTag } from '../controllers/tags.controllers.js';

const tagRoutes = express.Router();

tagRoutes.get('/get-all-tags', authMiddleware, getAllTags);

tagRoutes.post('/create-tag', authMiddleware, createTag);

tagRoutes.post('/update-tag', authMiddleware, updateTag);

export default tagRoutes