import z from "zod";

const chatRoomSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long" ),
  about: z.string().min(8, "About must be at least 8 characters long" ),
})

export default chatRoomSchema