// src/routes/users.routes.js

import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { searchedUserLists, userProfile, userTagLists } from '../controllers/users.controllers.js';

const userRoutes = express.Router(); 

userRoutes.get('/tags', authMiddleware, userTagLists);

userRoutes.get('/search-user', authMiddleware, searchedUserLists);

userRoutes.get('/:userId/details', authMiddleware, userProfile);

export default userRoutes