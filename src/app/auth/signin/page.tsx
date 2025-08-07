

// "use client";

// import { useEffect } from "react";
// import { useActionState } from "react";
// // import { register, type RegisterActionState } from "../../action/register";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import {  LogIn, RegisterActionState } from "@/action/auth";
// // import toast from "react-hot-toast";
// import { showError, showSuccess } from "@/app/utils/toast";


// export default function loginPage() {
//   // useActionState lets the form call a Server Action (register)
//   const [state, formAction, isPending] = useActionState<RegisterActionState, FormData>(LogIn, {});
//   const router = useRouter();
// //using useeffect so i used use client
//   useEffect(() => {
//     if (state?.success) {
//     //  toast.success("You're now logged in");
//     showSuccess("Register Success", "Welcome to your dashboard!");
//       router.push("/admin/mainpanel"); 
//     }
//     else if(state?.errors){
// //   toast.error("Login Faild please try again");
//      showError("Register Failed", "Please fix the errors and try again.");
//     }
//   } 
//   , [state, router]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
//       <h1 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-transparent bg-clip-text">
//   Login
// </h1>

//         <form action={formAction} className="space-y-4">
//           <div className="space-y-1">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//             required
//               type="text"
//               name="email"
//               defaultValue={state?.email || ""}
//               className="w-full border focus:bg-blue-50 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {state?.errors?.email && (
//               <p className="text-sm text-red-600 mt-1">{state.errors.email.join(", ")}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//             required
//               type="password"
//               name="password"
//               className="w-full focus:bg-blue-50  border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {state?.errors?.password && (
//               <div className="text-sm text-red-600 mt-1">
//                 <ul className="list-disc list-inside ml-4">
//                   {state.errors.password.map((err, idx) => (
//                     <li key={idx}>{err}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

          

//           <div className="flex justify-between items-center pt-4">
//             {/* <button
//               disabled={isPending}
//               className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//             >
//               {isPending ? "Loading..." : "Login"}
//             </button> */}
// <button
//   disabled={isPending}
//   className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
// >
//   {isPending ? "Loading..." : "Login"}
// </button>
//             <Link href="/" className="text-sm text-blue-600 underline">
//               or register here
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }








"use client";

import { useEffect } from "react";
import { useActionState } from "react";
// import { register, type RegisterActionState } from "../../action/register";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {  LogIn, RegisterActionState } from "@/action/auth";
// import toast from "react-hot-toast";
import { showError, showSuccess } from "@/app/utils/toast";


export default function loginPage() {
  // useActionState lets the form call a Server Action (register)
  const [state, formAction, isPending] = useActionState<RegisterActionState, FormData>(LogIn, {});
  const router = useRouter();
//using useeffect so i used use client
  useEffect(() => {
    if (state?.success) {
    //  toast.success("You're now logged in");
    showSuccess("Register Success", "Welcome to your dashboard!");
      router.push("/admin/mainpanel"); 
    }
    else if(state?.errors){
//   toast.error("Login Faild please try again");
     showError("Register Failed", "Please fix the errors and try again.");
    }
  } 
  , [state, router]);
return (
  <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-400 via-indigo-200 to-blue-200">
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 ">
  
  

      <h1 className="text-3xl sm:text-2xl font-extrabold text-center mb-6 sm:mb-8 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-400 text-transparent bg-clip-text">
      LogIn
      </h1>

      <form action={formAction} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            required
            type="text"
            name="email"
            defaultValue={state?.email || ""}
            className="w-full px-4 py-2 rounded-md border border-white/30 bg-white/20 text-black placeholder-white/90 focus:outline-none focus:bg-blue-50    focus:ring-2 focus:ring-white/60"
          />
          {state?.errors?.email && (
            <p className="text-sm text-red-500 mt-1">{state.errors.email.join(", ")}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            className="w-full px-4 py-2 rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-blue-50   "
          />
          {state?.errors?.password && (
            <ul className="text-sm text-red-500 mt-1 list-disc list-inside ml-4">
              {state.errors.password.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-2">
          <button
            disabled={isPending}
            className="w-full bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 py-2 rounded-md font-semibold hover:opacity-90 disabled:opacity-50 transition"
          >
            {isPending ? "Loading..." : "Login"}
          </button>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/"
            className="text-sm text-blue-900 underline hover:text-blue-500 transition"
          >
            or register here
          </Link>
        </div>
      </form>
    </div>
  </div>
);
}












