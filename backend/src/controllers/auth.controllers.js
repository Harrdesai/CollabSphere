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

const isUsernameAvailable = async (request, response) => {

  try {
    
    const { username } = request.body;

    if (!username) {
      throw new ApiError(400, "Username is required");
    }

    const checkUsernameExists = await prisma.user.findUnique({
      where: {
        username: username.toLowerCase()
      }
    })

    if (checkUsernameExists) {
      throw new ApiError(400, "Username already in use, please choose another username");
    }
    
    response.status(200).json(
      new ApiResponse(201, {
        username
      }, "Username is available")
    )

  } catch (error) {
    
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error while checking availability of username", {
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

    const checkUserExists = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase()
      }
    })

    if (checkUserExists) {
      throw new ApiError(400, "User already exists");
    }

    const checkUsernameExists = await prisma.user.findUnique({
      where: {
        username: username.toLowerCase()
      }
    })

    if (checkUsernameExists) {
      throw new ApiError(400, "Username already exists, please choose another username");
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
        role: false,
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

const forgetUsername = async (request, response) => {

  try {

    const { email, mobileNumber } = request.body;
  
    if (!email || !mobileNumber) {
      throw new ApiError(400, "Please provide email and mobile number");
    }
  
    const findUser = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
        mobileNumber
      }
    })
  
    if (!findUser) {
      throw new ApiError(404, "User not found");
    }
  
    response.status(200).json(
      new ApiResponse(200, {
        user: {
          email: findUser.email,
          mobileNumber: findUser.mobileNumber,
          username: findUser.username
        }
      }, "User data fetched successfully")
    )

  } catch (error) {
    
    console.error("Error fetching user:", error);
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error while checking user in imported CSV table", {
        error: error.message
      })
    )
  }

}

const resetPassword = async (request, response) => { 

  try {
    
    const { email, mobileNumber, newPassword } = request.body;

    if (!email || !mobileNumber || !newPassword) {
      throw new ApiError(400, "Please provide all required fields");
    }

    const findUser = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
        mobileNumber
      }
    })

    if (!findUser) {
      throw new ApiError(404, "User not found");
    }
    
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: {
        userId: findUser.userId
      },
      data: {
        password: hashedPassword
      }
    })

    response.status(200).json(
      new ApiResponse(200, {
        user: {
          email: findUser.email,
          mobileNumber: findUser.mobileNumber,
          username: findUser.username,
          firstName: findUser.firstName,
          lastName: findUser.lastName
        }
      }, "Password reset successfully")
    )
  } catch (error) {
    
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to reset password", {
        error: error.message
      })
    )

  }
}

const updateProfile = async (request, response) => { 

  try {

    const userId = request.cookies.userId;

    const { firstName, lastName, username, about, twitter, github, linkedIn, hashnode, peerlist } = request.body

    if(!userId || !firstName || !lastName || !username || !about) {
      throw new ApiError(400, "Please provide all required fields");
    }

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
        about: true,
        role: false,
        twitter: true,
        github: true,
        linkedIn: true,
        hashnode: true,
        peerlist: true
      }
    })

    if (user.username !== username) {
      const checkUsernameExists = await prisma.user.findUnique({
        where: {
          username
        }
      })
      if (checkUsernameExists) {
        throw new ApiError(400, "Username already exists, please choose another username");
      }
    }

    const updatedUser = await prisma.user.update({
      where: {
        userId
      },
      data: {
        firstName,
        lastName,
        username,
        about,
        twitter,
        github,
        linkedIn,
        hashnode,
        peerlist
      }
    })

    response.status(200).json(
      new ApiResponse(200, {
        user: {
          id: updatedUser.id,
          email: updatedUser.email,
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          mobileNumber: updatedUser.mobileNumber,
          username: updatedUser.username,
          courseName: updatedUser.courseName,
          about: updatedUser.about,
          twitter: updatedUser.twitter,
          github: updatedUser.github,
          linkedIn: updatedUser.linkedIn,
          hashnode: updatedUser.hashnode,
          peerlist: updatedUser.peerlist
        }
      }, "Profile updated successfully")
    )
    
  } catch (error) {
    
    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error updating profile", {
        error: error.message
      })
    )
  }
}

export {
  isUserAvailableInImportedCSV,
  isUsernameAvailable,
  registerUser,
  loginUser,
  logoutUser,
  getMe,
  forgetUsername,
  resetPassword,
  updateProfile
}