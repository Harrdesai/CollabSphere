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

    const { firstName, lastName, email, mobileNumber, username, password, courseName, about, twitter, github, linkedIn, hashnode, peerlist } = request.body

    if (!firstName || !lastName || !email || !mobileNumber || !username || !password || !about) {
      throw new ApiError(400, "Please provide all required fields",);
    }

    // match the email and mobileNumber with ImportCSV data-table
    const user = await prisma.importCSV.findUnique({
      where: {
        email_mobileNumber: {
          email: email.toLowerCase(),
          mobileNumber
        }
      }
    })

    if (!user) {
      throw new ApiError(400, "Invalid email or mobile number please contact admin")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email: email.toLowerCase(),
        mobileNumber,
        username: username.toLowerCase(),
        password: hashedPassword,
        courseName,
        about,
        twitter,
        github,
        linkedIn,
        hashnode,
        peerlist
      }
    })

    if (!newUser) {
      throw new ApiError(500, "Error while registering user");
    }

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    response.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    })

    response.status(200).json(
      new ApiResponse(201, {
        user: {
          id: newUser.userId,
          email: newUser.email,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          mobileNumber: newUser.mobileNumber,
          username: newUser.username,
          courseName: newUser.courseName,
          about: newUser.about,
          role: newUser.role,
          twitter: newUser.twitter,
          github: newUser.github,
          linkedIn: newUser.linkedIn,
          hashnode: newUser.hashnode,
          peerlist: newUser.peerlist
        }
      }, "User Profile created successfully")
    )

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

    const { email, password, username } = request.body;

    // eighter email or username
    if (!email && !username || !password) {
      throw new ApiError(400, "Please provide email or username and password");
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
        username: username.toLowerCase()
      }
    })

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new ApiError(401, "Incorrect password");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const userId = user.userId

    response.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    })

    response.cookie("userId", userId, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    response.status(200).json(
      new ApiResponse(200, {
        user: {
          id: user.userId,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          mobileNumber: user.mobileNumber,
          username: user.username,
          courseName: user.courseName,
          about: user.about,
          role: user.role,
          twitter: user.twitter,
          github: user.github,
          linkedIn: user.linkedIn,
          hashnode: user.hashnode,
          peerlist: user.peerlist
        }
      }, "User logged in successfully")
    )

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

    response.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development"
    });

    response.clearCookie("userId", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development"
    });

    response.status(200).json(new ApiResponse(200, {
      user: {
        firstName: request.user.firstName,
        lastName: request.user.lastName
      }
    }, "User logged out successfully"));

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

    if (!request.user) {
      throw new ApiError(404, "User not found");
    }

    const userId = request.cookies.userId;

    const user = await prisma.user.findUnique({
      where: {
        userId
      },
      select: {
        userId: true,
        email: true,
        firstName: true,
        lastName: true,
        mobileNumber: true,
        username: true,
        courseName: true,
        password: false,
        about: true,
        role: true,
        twitter: true,
        github: true,
        linkedIn: true,
        hashnode: true,
        peerlist: true
      }
    })

    response.status(200).json(
      new ApiResponse(200, {
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          mobileNumber: user.mobileNumber,
          username: user.username,
          courseName: user.courseName,
          about: user.about,
          role: user.role,
          twitter: user.twitter,
          github: user.github,
          linkedIn: user.linkedIn,
          hashnode: user.hashnode,
          peerlist: user.peerlist
        }
      }, "User data fetched successfully")
    )

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