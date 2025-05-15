import { request, response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ApiError } from "../utils/api-error.js";
import { PrismaClient } from "../generated/prisma/index.js";

dotenv.config({
  path: "./.env",
});

const prisma = new PrismaClient();

const authMiddleware = async (request, response, next) => {

  try {

    const token = request.cookies.jwt;

    if (!token) {
      throw new ApiError(401, "token not found");
    }

    let decoded;

    try {

      decoded = jwt.verify(token, process.env.JWT_SECRET);

    } catch (error) {

      response.status(error.statusCode || 500).json(
        new ApiError(error.statusCode || 500, "Error authenticating user", {
          error: error.message
        })
      )

    }

    const userId = request.cookies.userId;

    const user = await prisma.user.findUnique({
      where: {
        userId
      },
      select: {
        userId: true,
        firstName: true,
        lastName: true,
      }
    });

    if (!user) {
      throw new ApiError(401, "User not found");
    }

    request.user = user;

    next();

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error authenticating user", {
        error: error.message
      })
    )
  }
}

const checkRole = async (request, response, next) => {

  try {

    const userId = request.user.id;

    const user = await prisma.user.findUnique({
      where: {
        id: userId
      },
      select: {
        role: true,
      }
    });

    if (!user || user.role === "user") {

      throw new ApiError(403, "Access denied");

    }

    next();

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error authenticating user", {
        error: error.message
      })
    )

  }
}

export { authMiddleware, checkRole };

// catch (error) {
    
//   console.error("Error authenticating user:", error);
//   response.status(error.statusCode).json(
//     new ApiError(error.statusCode, {
//       error: error.message
//     }, "Error authenticating user")
//   )
// }