// src/lib/server-session.ts
"use server";

import { cookies } from "next/headers";
import { encrypt } from "./sessions";

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });

  const cookieStore = cookies(); 
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "lax",
    expires: expiresAt,
  });
}
