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

// list of chatrooms of a team
const getTeamChatRooms = async (request, response) => {

  try {

    const teamId = request.params.teamId;
    const userId = request.user.userId;

    if (!teamId || !userId) {
      throw new ApiError(400, "Please provide team id and user id");
    }

    const isTeamLeader = await isAuthorized(userId, teamId);

    const teamChats = await prisma.$transaction(async (prismaTx) => {

      const isMember = await isTeamMember(teamId, userId);

      if (!isMember) {
        throw new ApiError(403, "You are not a member of this team");
      }

      const team = await prismaTx.teams.findUnique({
        where: {
          id: teamId,
          isActive: true
        },
        include: {
          chats: isTeamLeader ? true : {
            where: {
              isActive: true
            }
          }
        }
      })

      if (!team) {
        throw new ApiError(404, "Team not found");
      }

      return team.chats;
    })

    if (!teamChats) {
      throw new ApiError(500, "Failed to get team chats");
    }

    response.status(200).json(
      new ApiResponse(200, {
        teamChats: teamChats
      }, "Team chats fetched successfully")
    );

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to get team chatrooms", {
        error: error.message
      })
    );
  }

}

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

// You can modify the message when it is send in last 5 minutes
const updateMessage = async (request, response) => {

  try {

    const messageId = request.params.messageId;
    const { message } = request.body;
    const userId = request.user.userId;

    if (!messageId || !message || !userId) {
      throw new ApiError(400, "Please provide message id, message and user id");
    }

    const isMessageOwner = await prisma.message.findUnique({
      where: {
        id: messageId,
        userId: userId
      }
    })

    if (!isMessageOwner) {
      throw new ApiError(403, "You are not the owner of this message");
    }

    const updatedMessage = await prisma.$transaction(async (prismaTx) => {

      const isMember = await isTeamMember(isMessageOwner.teamId, userId);

      if (!isMember) {
        throw new ApiError(403, "You are not a member of this team");
      }

      const currentTime = new Date();
      const messageTime = new Date(isMessageOwner.createdAt);

      if (currentTime - messageTime > 5 * 60 * 1000) {
        throw new ApiError(400, "Message is older than 5 minutes, now you can't update it");
      }

      const updatedMessage = await prismaTx.message.update({
        where: {
          id: messageId
        },
        data: {
          message: message
        }
      })

      return updatedMessage
    })

    if (!updatedMessage) {
      throw new ApiError(500, "Failed to update message");
    }

    response.status(200).json(
      new ApiResponse(200, {
        message: updatedMessage
      }, "Message updated successfully")
    )

  } catch (error) {
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error updating message", {
        error: error.message
      })
    )
  }

}

// Delete message which is send in last 2 minutes
const deleteMessage = async (request, response) => {

  try {

    const messageId = request.params.messageId;
    const userId = request.user.userId;

    if (!messageId || !userId) {
      throw new ApiError(400, "Please provide message id and user id");
    }

    const isMessageOwner = await prisma.message.findUnique({
      where: {
        id: messageId,
        userId: userId
      }
    })

    if (!isMessageOwner) {
      throw new ApiError(403, "You are not the owner of this message");
    }

    const deletedMessage = await prisma.$transaction(async (prismaTx) => {

      const isMember = await isTeamMember(isMessageOwner.teamId, userId);

      if (!isMember) {
        throw new ApiError(403, "You are not a member of this team");
      }

      const currentTime = new Date();
      const messageTime = new Date(isMessageOwner.createdAt);

      if (currentTime - messageTime > 2 * 60 * 1000) {
        throw new ApiError(400, "Message is older than 2 minutes, you cannot delete it");
      }

      const deletedMessage = await prismaTx.message.delete({
        where: {
          id: messageId
        }
      })

      return deletedMessage
    })

    if (!deletedMessage) {
      throw new ApiError(500, "Failed to delete message");
    }

    response.status(200).json(
      new ApiResponse(200, {
        message: deletedMessage
      }, "Message deleted successfully")
    )

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to delete message", {
        error: error.message
      })
    )
  }

}

// pagination with limit of 20 messages
const getMessages = async (request, response) => {

  try {

    const chatRoomId = request.params.chatRoomId;
    const userId = request.user.userId;
    const teamId = request.params.teamId;

    if (!chatRoomId) {
      throw new ApiError(400, "Please provide chat room id");
    }

    const messages = await prisma.$transaction(async (prismaTx) => {



      const isMember = await isTeamMember(teamId, userId);

      if (!isMember) {
        throw new ApiError(403, "You are not a member of this team");
      }

      const isChatRoomActive = await prismaTx.chat.findUnique({
        where: {
          id: chatRoomId,
          isActive: true
        }
      })

      if (!isChatRoomActive) {
        throw new ApiError(404, "Chat room not found");
      }

      const messages = await prismaTx.message.findMany({
        where: {
          chatId: chatRoomId,
        },
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true
            }
          }
        },
        orderBy: {
          createdAt: "desc"
        },
        take: 20
      })

      return messages
    })

    if (!messages) {
      throw new ApiError(500, "Failed to get messages in chat");
    }

    response.status(200).json(
      new ApiResponse(200, {
        messages: messages
      }, "Messages fetched successfully")
    )

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to get messages in chat", {
        error: error.message
      })
    )
  }

}

export {
  createChatRoom,
  updateChatRoomDetails,
  deleteChatRoom,
  getUserChats,
  getTeamChatRooms,
  getChatDetails,
  sendMessage,
  updateMessage,
  deleteMessage,
  getMessages,
};
