
// import { SignJWT, jwtVerify, type JWTPayload } from "jose";
// const secretKey = process.env.SESSION_SECRET!;
// const encodedKey = new TextEncoder().encode(secretKey);

// export async function encrypt(payload :JWTPayload ) {
//   console.log(payload);
//   return new SignJWT(payload )
  
  
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("7d")
//     .sign(encodedKey);
// }


// export async function decrypt(session: string) {
//   try {
//     //extract payload from jwt  jwtverify(looking for str)
//     const { payload } = await jwtVerify(session, encodedKey, {
//       algorithms: ["HS256"],
//     });
//     return payload;
//   } catch {
//     console.error("Invalid session");
//     return null;
//   }
// }
//chna down
import "server-only"

import { jwtVerify, SignJWT, type JWTPayload } from "jose";
import { cookies } from "next/headers";
//sign your token
const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload:JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session:string) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function createSession(userId:string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}