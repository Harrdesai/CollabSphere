import bcrypt from "bcryptjs";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { PrismaClient } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const isUserAvailableInImportedCSV = async (request, response) => {

  try {

    const { email = "", mobileNumber = "" } = request.body;

    if (!email && !mobileNumber) {
      throw new ApiError(400, "Email and mobile number are required");
    }

    const isUserAvailable = await prisma.importCSV.findFirst({
      where: {
        OR: [
          email ? { email: email.toLowerCase() } : undefined,
          mobileNumber ? { mobileNumber } : undefined
        ].filter(Boolean)
      }
    })

    if (!isUserAvailable) {
      throw new ApiError(404, "User not found in CSV table");
    }

    response.status(200).json(
      new ApiResponse(201, {
        user: {
          email: isUserAvailable.email,
          mobileNumber: isUserAvailable.mobileNumber,
          courseName: isUserAvailable.courseName
        }
      }, "User found in CSV table")
    )

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error while finding user in CSV table", {
        error: error.message
      })
    )

  }
}

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