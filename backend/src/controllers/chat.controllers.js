// src/controllers/chat.controllers.js

import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const createChatRoom = async (request, response) => { }

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
