

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form action={formAction} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
            required
              type="text"
              name="email"
              defaultValue={state?.email || ""}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {state?.errors?.email && (
              <p className="text-sm text-red-600 mt-1">{state.errors.email.join(", ")}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
            required
              type="password"
              name="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {state?.errors?.password && (
              <div className="text-sm text-red-600 mt-1">
                <ul className="list-disc list-inside ml-4">
                  {state.errors.password.map((err, idx) => (
                    <li key={idx}>{err}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          

          <div className="flex justify-between items-center pt-4">
            <button
              disabled={isPending}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {isPending ? "Loading..." : "Login"}
            </button>

            <Link href="/" className="text-sm text-blue-600 underline">
              or register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}