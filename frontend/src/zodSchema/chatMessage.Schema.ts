// src/zodSchema/chatMessage.Schema.ts
import { z } from "zod";

const chatMessageSchema = z.object({
  message: z.string().min(1, "Please type something"),
})

export default chatMessageSchema