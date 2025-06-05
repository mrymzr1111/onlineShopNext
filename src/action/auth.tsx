

"use server";

import { loginFormSchema } from "@/lib/rules";

import bcrypt from "bcrypt";
import { createSession } from "@/lib/server-session";

type LoginState = {
  errors?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  email?: string;
};



export async function login(state:LoginState
  
  
  , formData: FormData) {
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

  //  چک رمز عبور
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return {
      errors: { password: ["Incorrect password"] },
    };
  }

  //  ایجاد سشن و کوکی
  await createSession(user._id.toString());

  return { success: true };
}
