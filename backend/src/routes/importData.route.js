// src/routes/importData.route.js
import express from "express";

import multer from "multer"
import { importData } from "../controllers/importData.controllers.js";
import { authMiddleware, checkRole } from "../middleware/auth.middleware.js";


const importParticipantsData = express.Router();

const upload = multer({ dest: 'public/uploads/' });

importParticipantsData.post("/",  upload.single("participantsData"), importData);

export default importParticipantsData;