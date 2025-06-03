
// import React from 'react';
// import { config } from 'next/dist/build/templates/pages';

// const Middleware = () => {
//     return (
//         <div>
            
//         </div>
//     );
// }

// export default Middleware;
//  export const config={
// macher:["/dashboard"]
//  }
// import React from 'react';
// // import { config as nextConfig } from 'next/dist/build/templates/pages';
// import { NextRequest, NextResponse } from 'next/server';

// const Middleware = (request:NextRequest) => {
//     const token=request.cookies.get("token")?.value
//     if (token) {
//       return  NextResponse.next()
//     }
//     const url=new URL(request.url)
//     url.pathname="/login"
//     return NextResponse.redirect(url.toString())
//     return (
//         <div>
//             {/* Your component code */}
//         </div>
//     );
// }

// export default Middleware;

// export const config = {
//     matcher: ["/dashboard/:path*"],
// };



// import { NextRequest, NextResponse } from 'next/server';

// // Middleware function to handle request
// export default function Middleware(request: NextRequest) {
//     // Get token from cookies
//     const token = request.cookies.get("token")?.value;

//     // If token exists, allow the request to continue
//     if (token) {
//         return NextResponse.next();
//     }

//     // Otherwise, redirect to the login page
//     const url = new URL(request.url);
//     url.pathname = "/login"; // Redirect to login
//     return NextResponse.redirect(url.toString()); // Perform the redirection
// }

// // Middleware configuration to match the /dashboard route and its sub-paths
// export const config = {
//     matcher: ["/dashboard/:path*"], // Apply middleware only to /dashboard and sub-paths
// };

// import { NextRequest, NextResponse } from 'next/server';

// // Middleware function to handle request
// export default function Middleware(request: NextRequest) {
//     // Get token from cookies
//     const token = request.cookies.get("token")?.value;

//     // If token exists, allow the request to continue
//     if (token) {
//         return NextResponse.next();
//     }

//     // Otherwise, redirect to the login page
//     const url = new URL(request.url);
//     url.pathname = "/login"; // Redirect to login
//     return NextResponse.redirect(url.toString()); // Perform the redirection
// }

// // Middleware configuration to match the /dashboard route and its sub-paths
// export const config = {
//     matcher: ["/dashboard/:path*"], // Apply middleware only to /dashboard and sub-paths
// };




// import { NextRequest, NextResponse } from 'next/server';

// // Middleware function to handle request
// export default function Middleware(request: NextRequest) {
//     // Get token from cookies
//     const token = request.cookies.get("token")?.value;
// const url=request.nextUrl;
//     // If token exists, allow the request to continue
//     if (!token){
//         url.pathname = '/login';
//         return NextResponse.redirect(url.toString()); // Perform the redirection
      
//     }

//     return NextResponse.next();
//     // Otherwise, redirect to the login page
//     // const url = new URL(request.url);
//     // url.pathname = "/login"; // Redirect to login
  
// }

// // Middleware configuration to match the /dashboard route and its sub-paths
// export const config = {
//     // matcher: ["/dashboard/:path*"], // Apply middleware only to /dashboard and sub-paths
//     matcher: ['/dashboard' ,'/dashboard/:path*'],
// };


// import { NextRequest, NextResponse } from "next/server";

// // Middleware function to handle request
// export default function Middleware(request: NextRequest) {
//   const token = request.cookies.get("token")?.value;
//   const url = request.nextUrl;

//   // If token is missing, redirect to the login page
//   if (!token){
//     url.pathname = "/login"; // Redirect to the login page
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next(); // Allow the request to continue to the requested page
// }

// // Middleware configuration to apply it only to /dashboard and sub-paths
// export const config = {
//   matcher: ["/dashboard", "/dashboard/:path*"], // Apply middleware to /dashboard and its sub-paths
// };


// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//     console.log("middleware executed ")
    
//   const token = request.cookies.get("token")?.value;
// //  

//   if(!token){
 
//     const loginUrl= request.nextUrl.clone();
//     loginUrl.pathname = "/login";
//      return NextResponse.redirect(loginUrl);
// //     return NextResponse.next();
// //     const url =new URL( request.nextUrl);
// //  url.pathname = "/login"
//     // url.pathname = "/login";
//     // return NextResponse.redirect(url);
   
// }
// // return NextResponse.next();

// // return  NextResponse.redirect(url.toString())
//   }

 

// export const config = {
//   matcher: ["/dashboard", "/dashboard/:path*"],
// };

// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('token')?.value;

//   if (!token) {
//     const loginUrl = new URL('/login', request.url);
//     return NextResponse.redirect(loginUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/dashboard'],
// };
