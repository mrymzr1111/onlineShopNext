// "use client"

import Container from "@/components/container"



// import Container from '@/components/container';
// import DashboardPage from '@/dashboardPage/page';
// import axios from 'axios';

// import React, { ChangeEvent, useActionState, useState} from 'react';

// const Dashboard = () => {
//   // const [state,action,isPending]=useActionState(handler,undefined)


// const [newProduct, setNewProduct] = useState({
//     image: "",
//     title: "",
//     description: "",
//     price: ""
// }


// );

//     const  handleInputChange=(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
//    const {value,name}=e.target
// setNewProduct(
//     {
//         ...newProduct, [name]:value
//     }
// )
// }
// const handleSubmit=()=>{
//  axios(
//     {
//    method:"POST" ,
//    url:"http://localhost:8000/products",
//    data:{
//   id: Math.floor(Math.random()*1000).toString,
// image: newProduct.image,
// title: newProduct.title,
// description: newProduct.description,
// price: newProduct.price
//    }
//     }
//  )
    
// }



//     return (
//         <Container>
//      <DashboardPage 
//      handleInputChange={handleInputChange}   
//      handleSubmit={handleSubmit}  
//      product={newProduct}         />
//         </Container>

//     );
// }
//  export default Dashboard;
// //  .............................................................................................
// "use client"; // ✅ Ensures client-side logic

// import Container from "@/components/container";
// import DashboardPage from "@/dashboardPage/page";
// // import DashboardPage from "@/dashboardPage/page";

// import axios from "axios"; // ✅ Needed if you're submitting to REST backend
// import React, { ChangeEvent, useState } from "react"; // ✅ Removed unused useActionState

// const Dashboard = () => {
//   // 🔧 Local state for form inputs
//   const [newProduct, setNewProduct] = useState({
//     image: "",
//     title: "",
//     description: "",
//     price: "",
//   });

//   // 🔧 Input change handler
//   const handleInputChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setNewProduct({ ...newProduct, [name]: value }); // ✅ Dynamic state update
//   };

//   // 🔧 Submit handler using axios (you can remove this if using Server Action)
//   const handleSubmit = async () => {
//     try {
//       await axios.post("http://localhost:8000/products", {
//         id: Math.floor(Math.random() * 1000).toString(), // ✅ Unique random ID
//         image: newProduct.image,
//         title: newProduct.title,
//         description: newProduct.description,
//         price: parseFloat(newProduct.price), // ✅ Ensure price is a number
//       });

//       setNewProduct({ image: "", title: "", description: "", price: "" }); // ✅ Reset form
//       alert("Product created successfully!");
//     } catch (error) {
//       console.error("Error creating product:", error); // ✅ Error handling
//     }
//   };

//   return (
//     <Container>
//       {/* 🔧 Passing props to the form component */}
//       <DashboardPage
//         handleInputChange={handleInputChange}
//         handleSubmit={handleSubmit}
//         product={newProduct}
//       />
//     </Container>
//   );
// };

// export default Dashboard;
//...............

import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Product</h2>
        <form className="space-y-5">
          <input
            type="text"
            name="image"
            placeholder="Enter product image URL"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 text-gray-700 placeholder-gray-400 bg-white"
          />

          <input
            type="text"
            name="title"
            placeholder="Enter product title"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 text-gray-700 placeholder-gray-400 bg-white"
          />

          <input
            type="text"
            name="price"
            placeholder="Enter product price"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 text-gray-700 placeholder-gray-400 bg-white"
          />

          <textarea
            name="description"
            rows={4}
            placeholder="Enter a brief description"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 text-gray-700 placeholder-gray-400 bg-white"
          />

          <button
            type="button"
            className="w-full py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
