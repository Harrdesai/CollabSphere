// src/zodSchema/removeMember.schema.ts
import z from "zod";

const removeMemberSchema = z.object({
  arrayOfUserRoleInTeamIds: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one role.",
  }),
});
export default removeMemberSchema;