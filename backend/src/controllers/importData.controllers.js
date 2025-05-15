import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import fs from "fs";
import csvParser from "csv-parser";
import { PrismaClient } from "../generated/prisma/index.js";


const importData = async (request, response) => {
  
  const prisma = new PrismaClient();

  try {

    if ( !request.cookies.userId) {
      throw new ApiError(401, "user not found");
    }

    const isAdmin = await prisma.user.findUnique({
      where: {
        userId: request.cookies.userId
      },
      select: {
        role: true
      }
    })

    if (isAdmin.role !== "admin") {
      throw new ApiError(403, "Access denied, please contact admin");
    }
    
    if (!request.file) {
      throw new ApiError(404, "File not found");
    }

    const filePath = request.file.path;

    const records = [];
    const invalidRows = [];

    const readFile = new Promise((resolve, rejects) => {

      fs.createReadStream(filePath)
        .pipe(csvParser({
          headers: ["email", "mobileNumber", "courseName"], skipLines: 1
        }))
        .on("data", (row) => {

          // Validate row fields
          const { email, mobileNumber, courseName } = row;

          // Check if any required field is missing
          if (!email || !mobileNumber || !courseName) {
            invalidRows.push({ row, error: "Missing required field" });
            return;
          }

          // Validate email format
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            invalidRows.push({ row, error: "Invalid email format" });
            return;
          }

          // Validate mobile number (basic check for numeric and length)
          if (!/^\d{10}$/.test(mobileNumber)) {
            invalidRows.push({ row, error: "Invalid mobile number format" });
            return;
          }

          // Optional: Check if courseName is a valid string (can also check for comma-separated courses)
          if (typeof courseName !== "string") {
            invalidRows.push({ row, error: "Invalid course name format" });
            return;
          }

          records.push(row)
        })
        .on("end", () => resolve(records))
        .on("error", (error) => rejects(error));
    });

    await readFile;

    for (const record of records) {
      const courseNameArray = record.courseName.includes(",")
        ? record.courseName.split(",")
        : [record.courseName];

      await prisma.importCSV.create({
        data: {
          email: record.email,
          mobileNumber: record.mobileNumber,
          courseName: courseNameArray
        }
      })
    }

    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);  // Delete the file after processing
        console.log(`File deleted: ${filePath}`);
      }
    } catch (error) {
      console.error("Error deleting file:", error.message);
    }

    console.log(`Participants imported successfully ${records}`);
    response.status(200).json(new ApiResponse(200, "Participants imported successfully"));

  } catch (error) {

    response.status(error.statusCode || 500).json(
      new ApiError(error.statusCode || 500, "Failed to import participants details", {
        error: error.message
      })
    )
  }
}

export { importData }


// if is there any issue in detail upload from file the code snipet which is added for data check in file would be responsible



