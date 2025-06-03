


"use client";
import Cartitem from '@/components/cartitem';
import Container from '@/components/container';
import { useShoppingCartContext } from '@/components/context/shoppingcartcontext';
import { IProductProps } from '@/components/productItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


interface IDiscountData{
  id: number,
code: string,
percentage: number
}

const Cart = () => {
  const { cartItems } = useShoppingCartContext();
  const [data, setData] = useState<IProductProps[]>([]);
  const [discountCode, setDiscountCode] = useState("");
const[finalPrice,setFinalPrice]=useState(0);
const[discountP,setDiscountP]=useState(0);

  useEffect(() => {
    // Fetch the product details from the API based on the id
    axios('http://localhost:8000/products')
      .then((result) => {
        const { data } = result;            
        setData(data);  
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  // Calculate the total price dynamically
  const totalPrice = cartItems.reduce((total, item) => {
    const selected = data.find((product) => product.id.toString() === item.id.toString());
    return total + (selected?.price ? Number(selected.price) : 0) * item.qty;
  }, 0);

  const handleSubmitDiscount = () => {
    axios(`http://localhost:8000/disscount?code=${discountCode}`)
      .then((result) => {
        const  data  = result.data as IDiscountData[];  
        let discountP=totalPrice *data[0].percentage/100 ;
       let finalPrice=totalPrice-discountP;
       setDiscountP(discountP);
       setFinalPrice(finalPrice)
        
        // Here you can handle the discount response (e.g., update the total)
      })
      .catch((error) => {
        console.error("Error applying discount:", error);
      });
  };

  return (
    <Container>
      <div className="bg-gradient-to-r from-teal-50 to-white p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-extrabold text-center text-teal-700 mb-6">Your Cart</h1>
        
        {cartItems.map((item) => (
          <Cartitem key={item.id} {...item} />
        ))}
        
        {/* Total Section */}
        <div className="flex justify-between mt-6 border-t-2 border-gray-300 pt-6">
          <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <input
            onChange={(e) => setDiscountCode(e.target.value)}
            type="text"
            placeholder="Enter discount code"
            className="w-full sm:w-72 px-4 py-2 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            onClick={handleSubmitDiscount}
            className="w-full sm:w-auto px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-200"
          >
            Apply
          </button>
        </div>

        <div className="flex justify-between mt-6 border-t-2 border-gray-300 pt-6">
          <p>final Price: ${finalPrice}</p>
        </div>


        {/* Checkout Button */}
        <div className="mt-6 text-center">
          <button
           
            className="px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 ease-in-out"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
