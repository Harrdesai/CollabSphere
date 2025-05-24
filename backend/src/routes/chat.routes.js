import { Router } from "express";
import { authMiddleware } from '../middleware/auth.middleware.js';
import { 
  createChatRoom, 
  updateChatRoomDetails, 
  deleteChatRoom,
  getUserChats, 
  getTeamChats, 
  getChatDetails, 
  sendMessage, 
  updateMessage, 
  deleteMessage, 
  getMessages, 
  addUserToChat, 
  removeUserFromChat, 
  leaveChatRoom 
} from '../controllers/chat.controllers.js';

const chatRoutes = Router({ mergeParams: true });

chatRoutes.post('/create', authMiddleware, createChatRoom);

chatRoutes.post('/update/:chatRoomId', authMiddleware, updateChatRoomDetails);

chatRoutes.post('/:chatRoomId/delete', authMiddleware, deleteChatRoom);

chatRoutes.get('/user', authMiddleware, getUserChats);

chatRoutes.get('/team/:teamId', authMiddleware, getTeamChats);

chatRoutes.get('/:chatRoomId', authMiddleware, getChatDetails);

chatRoutes.post('/:chatRoomId/send-message', authMiddleware, sendMessage);

chatRoutes.post('/:chatRoomId/update-message/:messageId', authMiddleware, updateMessage);

chatRoutes.delete('/:chatRoomId/delete-message/:messageId', authMiddleware, deleteMessage);

chatRoutes.get('/:chatRoomId/messages', authMiddleware, getMessages);

chatRoutes.post('/:chatRoomId/users', authMiddleware, addUserToChat);

chatRoutes.delete('/:chatRoomId/users/:userId', authMiddleware, removeUserFromChat);

chatRoutes.post('/:chatRoomId/leave', authMiddleware, leaveChatRoom);

export default chatRoutes;
