

"use server";


import bcrypt from "bcrypt";
import { createSession } from "@/lib/server-session";
import { loginFormSchema } from "@/lib/rules";
import { findUserByEmail} from "../lib/db";




export async function login(_state:unknown
  
  
  , formData: FormData) {
  const emailInput = String(formData.get("email") ?? "");
  const validatedFields = loginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      email: formData.get("email"),
    };
  }

  const { email, password } = validatedFields.data;

  // پیدا کردن کاربر
  const user = await findUserByEmail(email);
  if (!user) {
    return {
      errors: { email: ["User not found"] },
    };
  }

  //  checking password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return {
      errors: { password: ["Incorrect password"] },
    };
  }

  //  createSession & cookies
  await createSession(user._id.toString());

  return { success: true };
}
