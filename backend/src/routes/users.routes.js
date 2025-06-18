// src/routes/users.routes.js

import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { searchedUserLists, userTagLists } from '../controllers/users.controllers.js';

const userRoutes = express.Router(); 

userRoutes.get('/search-user', authMiddleware, searchedUserLists);

userRoutes.get('/tags', authMiddleware, userTagLists);

export default userRoutes