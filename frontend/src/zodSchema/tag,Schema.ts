// src/zodSchema/tag,Schema.ts
import { z } from "zod";

const TagSchema = z.object({
  tagName: z.string().min(3, { message: "Tag name is required" }),
});

export default TagSchema