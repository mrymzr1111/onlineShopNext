"use client" ;
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';
import { PiShoppingCartLight } from "react-icons/pi";
import { useShoppingCartContext } from './context/shoppingcartcontext';
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
    const pathName=usePathname()
   const {cartTotalQty}= useShoppingCartContext()
    const navLinks=[
        {
            href:"/",
      title:  "Home"
        },
        {
        href:'/store',
      title:  "store"
        }
        ,
        {
          href:"/dashboard",
      title:  "Dashbord"
        }
        
       
    ]
    
    return (
        <nav className=' top-0 w-full h-16 bg-white z-50 '>
        <div className="shadow p-4 flex space-x-4   ">
     {
        navLinks.map((i=>
            <Link key={i.href}   href={i.href}    className={`mr-4 ${pathName===i.href?"text-cyan-700":""} `}>{i.title} </Link>
        ))
     }


<div   className='ml-auto '>
  {/* <span className=' absolute top-0 right-4 bg-red-500 text-white text-xs rounded-full py-1 px-2'>  {cartTotalQty()} </span> */}
  {/* <Link href="/cart"><PiShoppingCartLight  size={28} className="transform -translate-x-2"  /></Link> */}
  {/* <Link href="/login">< CiLogin  size={28}  /></Link> */}
  
  <div className="flex items-center space-x-4 relative">
  {/* Cart Total Badge */}
  <span className="absolute bottom-3   right-4.25  bg-red-500 text-white text-xs rounded-full py-1 px-2">
    {cartTotalQty()}
  </span>

  {/* Shopping Cart Icon */}
  <Link href="/cart">
    <PiShoppingCartLight size={28} className="transform -translate-x-2" />
  </Link>

  {/* Login Icon */}
  <Link href="/login">
    <CiLogin size={28} />
  </Link>
</div>







      </div>
        </div>
      
      </nav>

    );
}

export default Navbar;
