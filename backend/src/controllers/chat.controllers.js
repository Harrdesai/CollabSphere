// src/controllers/chat.controllers.js

import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { PrismaClient } from "../generated/prisma/index.js";
import { isAuthorized } from "../utils/helpers.js";

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

const updateChatRoomDetails = async (request, response) => { }

const deleteChatRoom = async (request, response) => { }

const archiveChatRoom = async (request, response) => { }

const getUserChats = async (request, response) => { }

const getTeamChats = async (request, response) => { }

const getChatDetails = async (request, response) => { }

const sendMessage = async (request, response) => { }

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
};
