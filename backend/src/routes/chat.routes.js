import { Router } from "express";
import { authMiddleware } from '../middleware/auth.middleware.js';
import { 
  createChatRoom, 
  updateChatRoomDetails, 
  deleteChatRoom,
  getTeamChatRooms, 
  getChatDetails, 
  sendMessage, 
  updateMessage, 
  deleteMessage, 
  getMessages
} from '../controllers/chat.controllers.js';

const chatRoutes = Router({ mergeParams: true });

chatRoutes.post('/create', authMiddleware, createChatRoom);

chatRoutes.post('/update/:chatRoomId', authMiddleware, updateChatRoomDetails);

chatRoutes.post('/:chatRoomId/delete', authMiddleware, deleteChatRoom);

chatRoutes.get('/chat-rooms', authMiddleware, getTeamChatRooms);

chatRoutes.get('/:chatRoomId/details', authMiddleware, getChatDetails);

chatRoutes.post('/:chatRoomId/send-message', authMiddleware, sendMessage);

chatRoutes.post('/:chatRoomId/update-message/:messageId', authMiddleware, updateMessage);

chatRoutes.delete('/:chatRoomId/delete-message/:messageId', authMiddleware, deleteMessage);

chatRoutes.get('/:chatRoomId/messages', authMiddleware, getMessages);

export default chatRoutes;
