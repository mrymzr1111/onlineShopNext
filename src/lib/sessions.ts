
import { SignJWT, jwtVerify, type JWTPayload } from "jose";
const secretKey = process.env.SESSION_SECRET!;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload :JWTPayload ) {
  console.log(payload);
  return new SignJWT(payload )
  
  
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}


export async function decrypt(session: string) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    console.error("Invalid session");
    return null;
  }
}


 