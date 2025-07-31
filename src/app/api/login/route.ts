

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { findUserByEmail } from "@/lib/db";
import { encrypt } from "@/lib/sessions";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // 1. پیدا کردن کاربر
    const user = await findUserByEmail(email);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    // 2. بررسی پسورد
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    // 3. ساختن توکن JWT
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const token = await encrypt({ userId: user._id.toString(), expiresAt: expiresAt.toISOString() });

    // 4. ساخت پاسخ با کوکی سشن
    const response = NextResponse.json({ success: true });

    response.cookies.set({
      name: "session",
      value: token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      expires: expiresAt,
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
