// "use client"; 

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React from 'react';
// import { PiShoppingCartLight } from "react-icons/pi";
// import { useShoppingCartContext } from './context/shoppingcartcontext';
// import { CiLogin, CiUser } from "react-icons/ci";
// import { JWTPayload } from 'jose';
// import { Logout } from '@/action/auth';
// // import getAuthUser from '@/lib/getAuthUser';


// type NavbarProps = {
//   authUser?: JWTPayload;
// };

// //i passed authUser as a props because it cant work in client side and works on client server
// export default function Navbar({ authUser }: NavbarProps) {
//   const pathName = usePathname();
//   const { cartTotalQty } = useShoppingCartContext();

//   const navLinks = [
//     { href: "/", title: "Home" },
//     { href: "/store", title: "Shop" },
//   ];

//   return (
//     <nav className="top-0 w-full h-16 bg-white z-50 shadow">
//       <div className="p-4 flex items-center justify-between">
//         {/* Left side links */}
//         <div className="flex space-x-4">
//           {navLinks.map((i) => (
//             <Link
//               key={i.href}
//               href={i.href}
//               className={`mr-2 ${pathName === i.href ? "text-cyan-700" : ""}`}
//             >
//               {i.title}
//             </Link>
//           ))}
//         </div>

//         {/*  Right side icons  i create protected route{?():()}    */}

     
//         <div className="flex items-center space-x-4 relative">
//           {
//             authUser? 
//             (
          
//               <div className="flex items-center space-x-6">
//                 <link ></link>
//           <Link
//             href="/admin/mainpanel"
//             className="text-gray-800 hover:text-black transition duration-200 font-medium"
//           >
//             Dashboard
//           </Link>
//            <Link
//             href="/admin/addmerch"
//             className="text-gray-800 hover:text-black transition duration-200 font-medium"
//           >
//            Dashboard MONGO
//           </Link>
// <form action={Logout}>
//           <button
           
//             className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-black transition"
//           >
//             Logout
//           </button>
//           </form>
//         </div>
        
//             )
//             :

//             (  

//  <div className="flex items-center space-x-4 relative">

//   {/* Cart icon */}
//   <div className="relative group">
//     <Link href="/cart">
//       <PiShoppingCartLight size={28} className="transform -translate-x-2" />
//     </Link>
//     {/* Tooltip below */}
//     <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
//       Cart
//     </div>
//     {/* Cart badge */}
//     <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full py-0.5 px-2">
//       {cartTotalQty()}
//     </span>
//   </div>

//   {/* Register icon */}
//   <div className="relative group">
//     <Link href="/auth/register">
//       <CiUser size={28} />
//     </Link>
//     {/* Tooltip below */}
//     <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
//       Register
//     </div>
//   </div>

//   {/* Login icon */}
//   <div className="relative group">
//     <Link href="/auth/signin">
//       <CiLogin size={28} />
//     </Link>
//     {/* Tooltip below */}
//     <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
//       Login
//     </div>
//   </div>
// </div>


// )
//           }
          
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { PiShoppingCartLight } from "react-icons/pi";
import { useShoppingCartContext } from './context/shoppingcartcontext';
import { CiLogin, CiUser } from "react-icons/ci";
import { JWTPayload } from 'jose';
import { Logout } from '@/action/auth';

type NavbarProps = {
  authUser?: JWTPayload;
};

export default function Navbar({ authUser }: NavbarProps) {
  const pathName = usePathname();
  const { cartTotalQty } = useShoppingCartContext();

  const navLinks = [
    { href: "/", title: "Home" },
    { href: "/store", title: "Shop" },
  ];

  return (
    <nav className="top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left links */}
        <div className="flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={`hover:text-cyan-700 transition ${
                pathName === i.href ? "text-cyan-700 font-semibold" : ""
              }`}
            >
              {i.title}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-6">
          {authUser ? (
            <div className="flex items-center space-x-4">
              <Link
                href="/admin/mainpanel"
                className="text-gray-700 hover:tex
                t-cyan-700 font-medium transition"
              >
                Dashboard
              </Link>

              <Link
                href="/admin/addmerch"
                className="text-gray-700 hover:text-cyan-700 font-medium transition"
              >
                Add Product
              </Link>

              <form action={Logout}>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-800 hover:bg-black text-white text-sm font-medium rounded-lg shadow-sm transition"
                >
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <div className="flex items-center space-x-6 text-gray-700">
              {/* Cart */}
              <div className="relative group">
                <Link href="/cart">
                  <PiShoppingCartLight size={26} className="hover:text-cyan-700 transition" />
                </Link>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 shadow">
                  {cartTotalQty()}
                </span>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition duration-300">
                  Cart
                </div>
              </div>

              {/* Register */}
              <div className="relative group">
                <Link href="/auth/register">
                  <CiUser size={26} className="hover:text-cyan-700 transition" />
                </Link>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition duration-300">
                  Register
                </div>
              </div>

              {/* Login */}
              <div className="relative group">
                <Link href="/auth/signin">
                  <CiLogin size={26} className="hover:text-cyan-700 transition" />
                </Link>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition duration-300">
                  Login
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
