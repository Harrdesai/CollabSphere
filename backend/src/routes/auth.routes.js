import express from 'express';
import { registerUser, loginUser, logoutUser, getMe, forgetUsername, resetPassword, updateProfile } from '../controllers/auth.controllers.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const authRoutes = express.Router();

authRoutes.post('/register', registerUser);

authRoutes.post('/login', loginUser);

authRoutes.post('/logout', authMiddleware, logoutUser);

authRoutes.get('/me', authMiddleware, getMe);

authRoutes.post('/forget-username', forgetUsername);

authRoutes.post('/reset-password', resetPassword);

authRoutes.post('/update-profile', authMiddleware, updateProfile);

export default authRoutes;