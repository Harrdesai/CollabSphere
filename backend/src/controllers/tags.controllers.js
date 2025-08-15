// src/controllers/tags.controllers.js
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
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

const createTag = async (request, response) => {

  try {

    const { tagName } = request.body;

    if (!tagName) {
      throw new ApiError(400, "Tag is required");
    }

    const isTagAlreadyCreated = await prisma.tag.findFirst({
      where: {
        name: tagName.toLowerCase().trim().split(" ").join("")
      }
    })

    if (isTagAlreadyCreated) {
      throw new ApiError(400, "Tag already exists");
    }

    const newTag = await prisma.tag.create({
      data: {
        name: tagName.toLowerCase().trim().split(" ").join("")
      }
    })

    response.status(200).json(
      new ApiResponse(200, {
        tag: newTag
      }, `Tag : ${tagName} created successfully`)
    )

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error while creating tag", {
        error: error.message
      })
    )

  }
}

const updateTag = async (request, response) => {

  try {

    const { updatedName, oldName } = request.body;

    if (!updatedName || !oldName) {
      throw new ApiError(400, "new name and tag is required");
    }

    const tagId = await prisma.tag.findUnique({
      where: {
        name: oldName.toLowerCase().trim().split(" ").join("")
      },
      select: {
        id: true
      }
    })
    const updatedTag = await prisma.tag.update({
      where: {
        id: tagId.id
      },
      data: {
        name: updatedName.toLowerCase().trim().split(" ").join("")
      }
    })

    response.status(200).json(
      new ApiResponse(200, {
        tag: updatedTag
      }, `Tag : ${updatedName} updated successfully`)
    )

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Error while updating tag", {
        error: error.message
      })
    )

  }
}

export { getAllTags, createTag, updateTag };