
import { z } from "zod";

export interface NoticeProps {
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
}
const noticeSchema: z.ZodSchema<NoticeProps> = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters long" }),
  content: z.string().min(3, { message: "Content must be at least 3 characters long" }),
  startDate: z.date({ required_error: "Start date is required" }),
  endDate: z.date({ required_error: "End date is required" }),
  })
  
  export default noticeSchema;