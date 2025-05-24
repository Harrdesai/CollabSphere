// src/controllers/chat.controllers.js

import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { PrismaClient } from "../generated/prisma/index.js";
import { isAuthorized, isTeamMember } from "../utils/helpers.js";

const prisma = new PrismaClient();

const createChatRoom = async (request, response) => {

  try {

    const teamId = request.params.teamId;
    const userId = request.user.userId;
    const { title, about } = request.body;

    console.log(`userId: ${userId}, teamId: ${teamId}, title: ${title}, about: ${about}`);
    if (!teamId || !userId || !title || !about) {
      throw new ApiError(400, "Please provide team id, user id, title and about");
    }

    const isTeamLeader = await isAuthorized(userId, teamId);

    if (!isTeamLeader) {
      throw new ApiError(403, "You are not a team leader");
    }

    const chatRoom = await prisma.chat.create({
      data: {
        teamId: teamId,
        title: title,
        about: about
      }
    });
    
    if (!chatRoom) {
      throw new ApiError(500, "Failed to create chat room");
    }

    response.status(200).json(
      new ApiResponse(200, {
        chatRoom: chatRoom
      }, "Chat room created successfully")
    );

  } catch (error) {
    
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error creating chat room", {
        error: error.message
      })
    );
  }
}

const updateChatRoomDetails = async (request, response) => {

  try {
  
    const chatRoomId = request.params.chatRoomId;
    const { title, about } = request.body;
    const userId = request.user.userId;
    const teamId = request.params.teamId;

    if (!chatRoomId || !title || !about || !userId || !teamId) {
      throw new ApiError(400, "Please provide chat room id, title, about, user id and team id");
    }

    const isTeamLeader = await isAuthorized(userId, teamId);

    if (!isTeamLeader) {
      throw new ApiError(403, "You are not a team leader");
    }

    const chatRoom = await prisma.$transaction(async (prismaTx) => {

      const chatRoom = await prismaTx.chat.findUnique({
        where: {
          id: chatRoomId,
          isActive: true
        }
      })

      if (!chatRoom) {
        throw new ApiError(404, "Chat room not found");
      }

      const updatedChatRoomDetails = await prismaTx.chat.update({
        where: {
          id: chatRoomId
        },
        data: {
          title: title,
          about: about
        }
      })

      return updatedChatRoomDetails;
    })

    if (!chatRoom) {
      throw new ApiError(500, "Failed to update chat room details");
    }
    
    response.status(200).json(
      new ApiResponse(200, {
        chatRoom: chatRoom
      }, "Chat room details updated successfully")
    );

  } catch (error) {
    
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error updating chat room details", {
        error: error.message
      })
    );
  }

}

const deleteChatRoom = async (request, response) => {

  try {
    
    const chatRoomId = request.params.chatRoomId;
    const userId = request.user.userId;
    const teamId = request.params.teamId;

    if (!chatRoomId || !userId || !teamId) {
      throw new ApiError(400, "Please provide chat room id, user id and team id");
    }

    const isTeamLeader = await isAuthorized(userId, teamId);

    if (!isTeamLeader) {
      throw new ApiError(403, "You are not authorized to delete the chat room");
    }

    const deleteChatRoom = await prisma.chat.update({

      where: {
        id: chatRoomId
      },
      data: {
        isActive: false
      }
    })

    if (!deleteChatRoom) {
      throw new ApiError(500, "Failed to delete chat room");
    }

    response.status(200).json(
      new ApiResponse(200, {
        chatRoom: deleteChatRoom
      }, "Chat room deleted successfully")
    );

  } catch (error) {
    
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error deleting chat room", {
        error: error.message
      })
    );
  }

}

const getUserChats = async (request, response) => { }

const getTeamChats = async (request, response) => { }

const getChatDetails = async (request, response) => { }

const sendMessage = async (request, response) => {

  try {
  
    const chatRoomId = request.params.chatRoomId;
    const { message } = request.body;
    const userId = request.user.userId;

    if (!chatRoomId || !message || !userId) {
      throw new ApiError(400, "Please provide chat room id, message and user id");
    }

    const createMessage = await prisma.$transaction(async (prismaTx) => {

      const chatRoom = await prismaTx.chat.findUnique({
        where: {
          id: chatRoomId,
          isActive: true
        }
      })

      if (!chatRoom) {
        throw new ApiError(404, "Chat room not found");
      }

      const isMember = await isTeamMember(chatRoom.teamId, userId);

      if (!isMember) {
        throw new ApiError(403, "You are not a member of this team");
      }

      const newMessage = await prismaTx.message.create({
        data: {
          chatId: chatRoomId,
          userId: userId,
          message: message
        }
      })

      return newMessage;
    })

    if (!createMessage) {
      throw new ApiError(500, "Failed to send message");
    }

    response.status(200).json(
      new ApiResponse(200, {
        message: createMessage  
      }, "Message sent successfully")
    )

  } catch (error) {
    
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to send message", {
        error: error.message
      })
    );
  }

}

const updateMessage = async (request, response) => { }

const deleteMessage = async (request, response) => { }

const getMessagesInChat = async (request, response) => { }

const addUserToChat = async (request, response) => { }

const removeUserFromChat = async (request, response) => { }

const leaveChatRoom = async (request, response) => { }

export {
  createChatRoom,
  updateChatRoomDetails,
  deleteChatRoom,
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
};
