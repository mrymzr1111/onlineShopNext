// import { decrypt } from "@/lib/sessions"; // adjust path if needed
// import { cookies } from "next/headers";

// export default async function getAuthUser(params) {
// const cookieStore=await cookies()
// const session=cookieStore.get('session')?.value
// }
// if (session) {
//   const user=await decrypt
// }
// import { cookies } from "next/headers";

// export default async function getAuthUser(params) {
// const cookieStore=await cookies()
// const session=cookieStore.get('session')?.value
// }
// if (session) {
//   const user=await decrypt(session)
//   return user,
// }


import { cookies } from "next/headers";
import { decrypt } from "./sessions";

export default async function getAuthUser() {
  //read value in our cookies
  const cookieStore = await cookies(); 
  //grab our session
  const session = cookieStore.get("session")?.value;

  console.log("Session cookie:", session);  
  if (session) {
    const user=await decrypt(session)
    return user
  }

  const user = await decrypt(session); //  decrypt the session
  return user; // return the user payload
}
