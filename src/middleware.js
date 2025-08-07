
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
import getAuthUser from "@/lib/getAuthUser";

import { NextResponse } from "next/server";



const protectedRoutes= ["/admin/mainpanel", "/admin/addmerch"];
const publicRoutes=['/auth/signin','/auth/register'];



export default async function middleware(req) {
const path=req.nextUrl.pathname;
const isProtected=protectedRoutes.includes(path)|| path.startsWith('/admin/edit/');

const isPublic=publicRoutes.includes(path);

//signe in
const user=await getAuthUser()
const userId=user?.userId;


if (isProtected && !userId) {
    return  NextResponse.redirect(new URL("/auth/signin",req.nextUrl));
}

if (isPublic && userId) {
 return NextResponse.redirect(new URL(("/admin/mainpanel" ,req.nextUrl )));
}

return  NextResponse.next();



}
// f (!user) return redirect("/");

//   const id = formData.get("id")?.toString();
//   if (!id || id.length !== 24) {
//     return;
//   }

//   const merchCollection = await getCollection("merchandise");
//   if (!merchCollection) {
//     return;
//   }






//   // const handleDelete=async ()=> {
//   //   const confirmed=window.confirm("do you want to delete?");
//   //   if (!confirmed) return;
//   // }
//   const deleteResult = await merchCollection.deleteOne({ _id: new ObjectId(id) });

//   if (deleteResult.deletedCount === 0) {
//     // No document deleted, handle if needed
//     return;
//   }
  


// // Add this:
//  revalidatePath("/admin/dashboard");

