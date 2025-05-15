import { Router } from "express";
import { authMiddleware } from '../middleware/auth.middleware.js';
import { 
  createChatRoom, 
  updateChatRoomDetails, 
  deleteChatRoom, 
  archiveChatRoom, 
  getUserChats, 
  getTeamChats, 
  getChatDetails, 
  sendMessage, 
  updateMessage, 
  deleteMessage, 
  getMessagesInChat, 
  addUserToChat, 
  removeUserFromChat, 
  leaveChatRoom 
} from '../controllers/chat.controllers.js';

const chatRoutes = Router();

chatRoutes.post('/create', authMiddleware, createChatRoom);

chatRoutes.put('/update/:chatRoomId', authMiddleware, updateChatRoomDetails);

chatRoutes.delete('/delete/:chatRoomId', authMiddleware, deleteChatRoom);

chatRoutes.post('/archive/:chatRoomId', authMiddleware, archiveChatRoom);

chatRoutes.get('/user', authMiddleware, getUserChats);

chatRoutes.get('/team/:teamId', authMiddleware, getTeamChats);

chatRoutes.get('/:chatRoomId', authMiddleware, getChatDetails);

chatRoutes.post('/:chatRoomId/messages', authMiddleware, sendMessage);

chatRoutes.put('/messages/:messageId', authMiddleware, updateMessage);

chatRoutes.delete('/messages/:messageId', authMiddleware, deleteMessage);

chatRoutes.get('/:chatRoomId/messages', authMiddleware, getMessagesInChat);

chatRoutes.post('/:chatRoomId/users', authMiddleware, addUserToChat);

chatRoutes.delete('/:chatRoomId/users/:userId', authMiddleware, removeUserFromChat);

chatRoutes.post('/:chatRoomId/leave', authMiddleware, leaveChatRoom);

export default chatRoutes;
