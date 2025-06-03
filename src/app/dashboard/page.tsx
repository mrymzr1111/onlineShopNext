"use client"

import Container from '@/components/container';
import axios from 'axios';

import React, { ChangeEvent, useState } from 'react';

const Dashboard = () => {
 


const [newProduct, setNewProduct] = useState({
    image: "",
    title: "",
    description: "",
    price: ""
}


);

    const  handleInputChange=(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
   const {value,name}=e.target
setNewProduct(
    {
        ...newProduct, [name]:value
    }
)
}
const handleSubmit=()=>{
 axios(
    {
   method:"POST" ,
   url:"http://localhost:8000/products",
   data:{
  id: Math.floor(Math.random()*1000).toString,
image: newProduct.image,
title: newProduct.title,
description: newProduct.description,
price: newProduct.price
   }
    }
 )
    
}



    return (
        <Container>
      <div className="mb-4 pt-7">
      <div className="mb-4">
      <input
            id="item"
            type="text"
            name='title'
            onChange={handleInputChange}
            className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
            placeholder="Enter product image URL"
          />
          <input
            id="item"
            type="text"
            name='title'
            onChange={handleInputChange}
            className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
            placeholder="Enter product title"
          />
        
<input
            id="item"
            type="text"
            name='price'
            onChange={handleInputChange}
            className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
            placeholder="Enter item price"
          />
        </div>
        </div>
        
        <div>
          <textarea
            id="description"
            rows={4}
            className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
            placeholder="Enter a brief description"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-200"
        >
          Submit
        </button>

        </Container>

    );
}
 export default Dashboard;
//  .............................................................................................

