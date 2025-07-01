// src/zodSchema/sendInvitation.Schema.ts
import z from "zod";

export interface SendInvitationProps {
  userId: string;
  designation: string;
}

const sendInvitationSchema: z.ZodSchema<SendInvitationProps> = z.object({
  userId: z.string().min(1, "Please select a member"),
  designation: z.string().min(1, "Please select a role"),
});

export default sendInvitationSchema;