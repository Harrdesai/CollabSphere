// src/zodSchema/teamSchema.ts
import { z } from "zod";

interface Link {
  name: string;
  url: string;
}

interface tags {
  id: string;
  name: string;
}
export interface TeamProps {
  title: string;
  about: string;
  link: Link[];
  tags: tags[];
}

const teamSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long" ),
  about: z.string().min(8, "About must be at least 8 characters long" ),
  tags: z.array(z.object({ id: z.string(), name: z.string() })).optional(),
  link: z.array(z.object({
    name: z.string(),
    url: z.string(),
  })).optional(),
});

export default teamSchema