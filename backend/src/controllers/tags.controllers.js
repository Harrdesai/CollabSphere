import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { isAuthorized } from "../utils/helpers.js";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const getAllTags = async (request, response) => {
  
  try {
    const tags = await prisma.tag.findMany();

    if (tags.length === 0) {
      return response.status(200).json(new ApiResponse(200, [], "No tags found"));
    }
    
    response.status(200).json(new ApiResponse(200, tags, "Tags fetched successfully"));

  } catch (error) {
    console.log(error);
    response.status(500).json(new ApiError(500, "Something went wrong"));
  
  }
};

export { getAllTags };