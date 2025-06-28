
import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { getAllTags } from '../controllers/tags.controllers.js';

const tagRoutes = express.Router();

tagRoutes.get('/get-all-tags', authMiddleware, getAllTags);

export default tagRoutes