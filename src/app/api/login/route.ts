// import { error } from "console";
// import { NextResponse } from "next/server";






// const SECRET="my-secret " ;
// export async function POST(req:Request) {
//     const {username,password}=await req.json();


//    if (username==='admin@nn ' && password==='123456') {
//         const token=jwt.sign({username},SECRET,{expiresIn:"1h"});
//         const res=NextResponse.json({success:true});
//         res.cookies.set('token',token,{
//             httpOnly:true ,
//             path:'/',
//             maxAge:60*60

//         })
//         return res;


//     }
//     return NextResponse.json({error:'inavalid '})

// }

// import { NextResponse } from "next/server";
// import jwt from 'jsonwebtoken';

// const SECRET = "my-secret";

// export async function POST(req: Request) {
//   try {
//     const { username, password } = await req.json();

//     // Trim input and check credentials
//     if (username.trim() === "admin@nn" && password === "123456") {
//       const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });

//       const res = NextResponse.json({ success: true });
//       res.cookies.set("token", token, {
//         httpOnly: true,
//         path: "/",
//         maxAge: 60 * 60, // 1 hour
//       });

//       return res;
//     }

//     return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
//   } catch (err) {
//     console.error("Error in login handler:", err);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }
// import { NextResponse } from "next/server";
// import jwt from 'jsonwebtoken';

// const SECRET = "my-secret";

// export async function POST(req: Request) {
//   try {
//     // گرفتن داده‌ها از درخواست
//     const { username, password } = await req.json();

//     // اعتبارسنجی نام کاربری و رمز عبور
//     if (username.trim() === "admin@nn" && password === "123456") {
      
//       // ساخت توکن JWT
//       const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });

//       // پاسخ با موفقیت
//       const res = NextResponse.json({ success: true });
      
//       // تنظیم کوکی به عنوان توکن
//       res.cookies.set("token", token, {
//         httpOnly: true,    // فقط در سمت سرور قابل دسترسی است
//         secure: process.env.NODE_ENV === "production", // تنها در محیط تولید HTTPS
//         path: "/",
//         maxAge: 60 * 60, // 1 ساعت
//       });

//       return res;
//     }

//     // در صورت اشتباه بودن اعتبار
//     return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
//   } catch (err) {
//     // در صورت خطا در سرور
//     console.error("Error in login handler:", err);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET = 'my-secret'; // در پروژه واقعی از env استفاده کن

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (username === 'admin@nn' && password === '123456') {
    const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });

    const res = NextResponse.json({ success: true });
    res.cookies.set('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60,
      secure: process.env.NODE_ENV === 'production',
    });

    return res;
  }

  return NextResponse.json({ error: 'نام کاربری یا رمز اشتباه است' }, { status: 401 });
}
