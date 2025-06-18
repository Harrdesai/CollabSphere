// controllers/users.controllers.js

import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { $Enums, Prisma, PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const searchedUserLists = async (request, response) => {

  const searchKeyWord = request.query.search?.toString().trim() || '';

  const tagIdString = request.query.tags?.toString() || '';
  const searchTagIds = tagIdString.split(',').map(tagId => tagId.trim()).filter(Boolean);

  const page = parseInt(request.query.page || '1', 10);
  const limit = parseInt(request.query.limit || '10', 10);
  const skip = (page - 1) * limit;

  console.log(`searchKeyWord:-------- ${searchKeyWord}, searchTags:------ ${searchTagIds}`);
  try {

    const users = await prisma.user.findMany({
      where: {
        isActive: true,
        AND: [
          {
            OR: [
              {
                firstName: {
                  contains: searchKeyWord,
                  mode: 'insensitive'
                }
              },
              {
                lastName: {
                  contains: searchKeyWord,
                  mode: 'insensitive'
                }
              }
            ]
          },
          ...(searchTagIds.length > 0
            ? [
                {
                  tags: {
                    some: {
                      id: {
                        in: searchTagIds,
                        mode: 'insensitive'
                      }
                    }
                  }
                }
              ]
            : [])
        ]
      },
      include: {
        tags: {
          select: {
            name: true,
            id: true
          }
        },
        email: false,
        mobileNumber: false,
        username: false,
        password: false,
        role: false,
        isActive: false,
        twitter: false,
        github: false,
        linkedIn: false,
        hashnode: false,
        peerlist: false,
        updatedAt: false,
        designation: false,
        _count: {
          select: {
            teams: true
          }
        }
        },
      skip,
      take: limit
    });

    if (users.length === 0) {
      return response.status(200).json(new ApiResponse(200, [], "No users found"));
    }
    
    response.status(200).json(new ApiResponse(200, users, "Users found successfully"));

  } catch (error) {

    console.error("Error searching users:", error);
    response.status(500).json(new ApiError(500, "Error searching users", { error: error.message }));
  }
}

const userTagLists = async (request, response) => {

  try {

    const tags = await prisma.tag.findMany({
      where: {
        users: {
          some: {
            isActive: true
          }
        }
      }
    });

    if (tags.length === 0) {
      return response.status(200).json(new ApiResponse(200, [], "No tags found"));
    }
    
    response.status(200).json(new ApiResponse(200, tags, "Tags found successfully"));

  } catch (error) {

    console.error("Error searching users:", error);
    response.status(500).json(new ApiError(500, "Error searching users", { error: error.message }));
  }
}
export { searchedUserLists, userTagLists };