// import { decrypt } from "@/lib/sessions"; // adjust path if needed
// import { cookies } from "next/headers";
// type AuthUser = {
//   userId: string;
// } | null;
// export default async function getAuthUser(params) {
// const cookieStore=await cookies()
// const session=cookieStore.get('session')?.value
// }
// if (session) {
//   const user=await decrypt
// }
// import { cookies } from "next/headers";

// //   //read value in our cookies
// export default async function getAuthUser(params) {
// const cookieStore=await cookies()
// const session=cookieStore.get('session')?.value
// }
// if (session) {
//   const user=await decrypt(session)
//   return user,
// }
/////////////////////////////////////////////down

// import { cookies } from "next/headers";
// import { decrypt } from "./sessions";
// type AuthUser = {
//   userId: string;
// } | null;
// export default async function getAuthUser(): Promise<AuthUser> {
//   //read value in our cookies
//   const cookieStore = await cookies(); 
//   //grab our session
//   const session = cookieStore.get("session")?.value;

//   console.log("Session cookie:", session);  
//   if (session) {
//     const user=await decrypt(session)
//     // return user
  

// if (user && typeof user.id === "string") {
//       return {
//         userId: user.id,
//       };
//     }
  
//   }
//   return null; // return the user payload
// }




import { cookies } from "next/headers";
import { decrypt } from "./sessions";

type AuthUser = {
  userId: string;
} | null;

export default async function getAuthUser(): Promise<AuthUser> {
  const cookieStore =  await cookies();
  const session = cookieStore.get("session")?.value;

  console.log("🔑 Session cookie:", session);

  if (session) {
    const user = await decrypt(session);
    console.log("🧩 Decrypted user object:", user);

    const userId = user?.id || user?._id || user?.userId;

    if (userId && typeof userId === "string") {
      return { userId };
    }

    console.warn("⚠️ No valid user ID found in session.");
  } else {
    console.warn("⚠️ No session cookie found.");
  }

  return null;
}
