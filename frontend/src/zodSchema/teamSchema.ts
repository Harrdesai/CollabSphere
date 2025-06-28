// src/zodSchema/teamSchema.ts
import { z } from "zod";

export interface TeamProps {
  title: String;
  about: String;
  tags: String[];
  link: { name: String, url: String }[];

}

const teamSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long" ),
  about: z.string().min(8, "About must be at least 8 characters long" ),
  tags: z.array(z.string()).optional(),
  link: z.array(z.object({
    name: z.string(),
    url: z.string(),
  })).optional(),
});

export default teamSchema