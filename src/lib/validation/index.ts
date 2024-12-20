
import { z } from "zod";
export const SignupValidation = z.object({
  name: z.string().min(2, { message: " Too short " }),
  username: z.string().min(2, { message: " Too short " }),
  email: z.string().email(),
  password : z.string().min(8, { message: " Password must be atleaset eight charcters " }),
});
export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: " Password must be atleaset eight charcters " }),
});