// src/zodSchema/registerUser.Schema.ts
import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

const mobileNumberRegex = /^[0-9]{10}$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;

const registerUserSchema: z.ZodSchema<any> = z.object({

    firstName: z.string().min(3, { message: "First name must be at least 3 characters long" }),
    lastName: z.string().min(3, { message: "Last name must be at least 3 characters long" }),
    email: z.string().email( { message: "Invalid email address" }),
    mobileNumber: z.string().regex(mobileNumberRegex, { message: "Mobile number must be a 10-digit number" }),
    username: z.string().regex(usernameRegex, { message: "Username must be between 3 and 16 characters long and can only contain letters, numbers, and underscores" }),
    password: z.string().regex(passwordRegex, { message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character" }),
    confirmPassword: z.string().regex(passwordRegex, { message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character" }),
    // courseName: z.ZodArray(
    //   z.object({
    //     courseName: z.string().min(3, { message: "Course name must be at least 3 characters long" }),
    //   }),{message: "Please select atLeast one course"}),
    about: z.string().min(3, { message: "About must be at least 3 characters long" }),
    twitter: z.string().trim(),
    github: z.string().trim(),
    linkedIn: z.string().trim(),
    hashnode: z.string().trim(),
    peerlist: z.string().trim(),
});

export default registerUserSchema