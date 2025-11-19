"use server";

import { signInSchema, signUpSchema } from "@/schemas/authSchema";
import z from "zod";

export const signIn = async (data: z.infer<typeof signInSchema>) => {
  const item = signInSchema.parse(data);

  return { success: true, message: "Sign-in successful", data: item };
};

export const signUp = async (data: z.infer<typeof signUpSchema>) => {
  const item = signUpSchema.parse(data);

  return { success: true, message: "Sign-up successful", data: item };
};
