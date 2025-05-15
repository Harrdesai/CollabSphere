import express from 'express';
import { isUserAvailableInImportedCSV, isUsernameAvailable, registerUser, loginUser, logoutUser, getMe, forgetUsername, resetPassword, updateProfile } from '../controllers/auth.controllers.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const authRoutes = express.Router();

authRoutes.post('/is-user-exists', isUserAvailableInImportedCSV);

authRoutes.post('/username-availablity', isUsernameAvailable);

authRoutes.post('/register', registerUser);

authRoutes.post('/login', loginUser);

authRoutes.post('/logout', authMiddleware, logoutUser);

authRoutes.get('/me', authMiddleware, getMe);

authRoutes.get('/get-username', forgetUsername);

authRoutes.post('/reset-password', resetPassword);

authRoutes.post('/update-profile', authMiddleware, updateProfile);

export default authRoutes;