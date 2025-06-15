// src/zodSchema/login.Schema.ts
import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

const loginSchema: z.ZodSchema<any> = z.object({
  
  emailOrUsername: z.string().min(3, { message: "Email/Username must be at least 3 characters long" }),
  password: z.string().regex(passwordRegex, { message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character" }),
  
})

export default loginSchema
