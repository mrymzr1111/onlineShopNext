

"use client"

import { useParams } from 'next/navigation';
import { useShoppingCartContext } from './context/shoppingcartcontext';
import { HiOutlineTrash } from 'react-icons/hi';


// import React, { useState } from 'react';
interface IAddToCartProps{
  id:string

 }
function Counter({id}:IAddToCartProps) {
  const {
    // cartItems,
    // setCartItems,
    handleIncreaseProductQty,
    getProductsQty,
    handleDecreaseProductQty,
    deleteFromCart
  } = useShoppingCartContext();
  
   

  const params = useParams();
  console.log(params);



  return (
    <div className="flex items-center justify-center md:justify-start mt-4 space-x-3">
      {/* Product ID */}
      <main className="text-xs text-gray-500">Product ID: {params.id}</main>

      {/* Decrease Button */}
      <button
         onClick={()=>handleDecreaseProductQty(parseInt(id))}
        className="bg-gray-200 text-gray-800 w-10 h-10 rounded-full shadow-md hover:bg-gray-300 transition-all duration-200 ease-in-out flex items-center justify-center transform hover:scale-110"
      >
        <span className="text-xl font-bold">-</span>
      </button>

      {/* Quantity Display */}
      <div className="text-lg font-semibold text-gray-800 bg-white w-14 h-14 rounded-lg shadow-md flex items-center justify-center text-gray-800 border-2 border-gray-300">
      {getProductsQty(parseInt(id))}
      </div>

      {/* Increase Button */}
      <button
        onClick={()=>handleIncreaseProductQty(parseInt(id))}
        className="bg-gray-200 text-gray-800 w-10 h-10 rounded-full shadow-md hover:bg-gray-300 transition-all duration-200 ease-in-out flex items-center justify-center transform hover:scale-110"
      >
        <span className="text-xl font-bold">+</span>
      </button>

<div>

<button
  onClick={() => deleteFromCart(parseInt(id))}
  className="bg-red-500 hover:bg-red-600 text-white w-11 h-11 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:rotate-6 flex items-center justify-center border border-red-700"
  title="حذف از سبد خرید"
>
  <HiOutlineTrash className="w-6 h-6" />
</button>

</div>



    </div>
    
  );
}

export default Counter;
