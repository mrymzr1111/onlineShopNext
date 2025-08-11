




import { cookies } from "next/headers";
import { decrypt } from "./sessions";

type AuthUser = {
  userId: string;
} | null;
export default async function getAuthUser(): Promise<AuthUser> {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  console.log("Session cookie:", session);

  if (session) {
    const user = await decrypt(session);
    console.log(" Decrypted user object:", user);

    const userId = user?.id || user?._id || user?.userId;

    if (userId) {
      return { userId: typeof userId === "string" ? userId : userId.toString() };
    }

    console.warn("⚠️ No valid user ID found in session.");
  } else {
    console.warn("⚠️ No session cookie found.");
  }

  return null;
}
