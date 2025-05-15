// src/controllers/noticeBoard.controllers.js

import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const createNotice = async (request, response) => { }

const getNotices = async (request, response) => { }

const getNotice = async (request, response) => { }

const updateNotice = async (request, response) => { }

const deleteNotice = async (request, response) => { }

// Notice Request
const createNoticeRequest = async (request, response) => { }

const getNoticeRequests = async (request, response) => { }

const getNoticeRequest = async (request, response) => { }

const updateNoticeRequest = async (request, response) => { }

const cancelNoticeRequest = async (request, response) => { }

const acceptNoticeRequest = async (request, response) => { }

const deleteNoticeRequest = async (request, response) => { }

const rejectNoticeRequest = async (request, response) => { }

const getPendingNoticeRequests = async (request, response) => { }

const getAcceptedNoticeRequests = async (request, response) => { }

export {
  createNotice,
  getNotices,
  getNotice,
  updateNotice,
  deleteNotice,
  createNoticeRequest,
  getNoticeRequests,
  getNoticeRequest,
  updateNoticeRequest,
  cancelNoticeRequest,
  acceptNoticeRequest,
  deleteNoticeRequest,
  rejectNoticeRequest,
  getPendingNoticeRequests,
  getAcceptedNoticeRequests
}