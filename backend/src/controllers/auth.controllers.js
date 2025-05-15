import bcrypt from "bcryptjs";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { PrismaClient } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const registerUser = async (request, response) => {

  try {

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error While registering user", {
        error: error.message
      })
    )

  }
}

const loginUser = async (request, response) => {

  try {

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error while logging in user", {
        error: error.message
      })
    )

  }
};

const logoutUser = async (request, response) => {

  try {

  } catch (error) {

    console.error("Error logging out user:", error);
    response.status(error.statusCode).json(
      new ApiError(error.statusCode, "Error logging out user", {
        error: error.message
      })
    )
  }
}

const getMe = async (request, response) => {

  try {

  } catch (error) {

    console.error("Error fetching user:", error);
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error fetching user", {
        error: error.message
      })
    )
  }
}

const forgetUsername = async (request, response) => {}

const resetPassword = async (request, response) => { }

const updateProfile = async (request, response) => { }

export {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
  forgetUsername,
  resetPassword,
  updateProfile
}