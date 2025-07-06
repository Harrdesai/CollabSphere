
import { z } from "zod";

export interface NoticeProps {
  teamId: string;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
}

const noticeSchema = z
  .object({
    teamId: z.string().min(1, "Team id is required"),
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    startDate: z.date({
      required_error: "Start date is required",
    }),
    endDate: z.date({
      required_error: "End date is required",
    }),
  })
  .refine((data) => data.startDate > new Date(), {
    message: "Start date must be in the future",
    path: ["startDate"],
  })
  .refine((data) => data.endDate > data.startDate, {
    message: "End date must be after start date",
    path: ["endDate"],
  });

export default noticeSchema;