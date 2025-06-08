

"use client";

import { useActionState } from "react";
import { login } from "../../action/auth"; 
import Link from "next/link";

export default function LoginPage() {
  const [state, action, isPending] = useActionState(login, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

      <form action={action} className="space-y-4">
        <div  className="space-y-1"        >
          <label htmlFor="email" className="block text-sm font-medium text-gray-700" >Email</label>
          <input type="text"   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"   defaultValue={state?.email ? String(state.email) : ""}
 name="email" />
          {state?.errors?.email && (
            <p className="text-sm text-red-600 mt-1" >{state.errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password"  className="block text-sm font-medium text-gray-700"     >Password</label>
          <input type="password"       className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"            name="password" />
          {state?.errors?.password && (
            <div className="text-sm text-red-600 mt-1">
              <p>Password must:</p>
              <ul className="list-disc list-inside ml-4">
                {state.errors.password.map((err: string) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* <div className="space-y-1"    >
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700" >Confirm Password</label>
          <input type="password" name="confirmPassword"  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {state?.errors?.confirmPassword && (
            <p className="text-sm text-red-600 mt-1">{state?.errors?.confirmPassword}</p>
          )}
        </div> */}

        <div className="flex justify-between items-center pt-4">
          <button disabled={isPending}   className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50">
            {isPending ? "Loading..." : "Register"}
          </button>

          <Link href="/" className="text-sm text-blue-600 underline" >
            or login here
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
}
