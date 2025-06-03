

"use server";

import { loginFormSchema } from "@/lib/rules";

import bcrypt from "bcrypt";
import { createSession } from "@/lib/server-session";

export async function login(state: any, formData: FormData) {
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

  // 🧩 1. پیدا کردن کاربر
  const user = await findUserByEmail(email);
  if (!user) {
    return {
      errors: { email: ["User not found"] },
    };
  }

  // 🧩 2. چک رمز عبور
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return {
      errors: { password: ["Incorrect password"] },
    };
  }

  // 🧩 3. ایجاد سشن و کوکی
  await createSession(user._id.toString());

  return { success: true };
}
