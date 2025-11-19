"use server";

import { signInSchema } from "@/schemas/authSchema";
import z from "zod";

export const signIn = async (data: z.infer<typeof signInSchema>) => {
  const item = signInSchema.parse(data);

  return { success: true, message: "Sign-in successful", data: item };
};
