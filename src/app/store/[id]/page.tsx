// import Image from 'next/image';
// import React from 'react';
// import image from '@/components/pic/imagesd.png';
import ProductItem, { IProductPropso } from '@/components/productItem';



// const Product1= () => {
//     return (
//         <div className='grid grid-cols-12'> 
//           <div className='col-span-3 '>
//           <Image  src={image} alt='PIC'/>
//           </div>
//           <div className='col-span-9 p-5'>
//           <h2 > produt 1</h2>
// <h1> this is the first option....  </h1>
// <p className='pt-4'> price <span>20$</span></p>

//           </div>
//         </div>
//     );
// }

// export default Product1;

// "use client"
// import Image from 'next/image';
// import React, { useState } from 'react';
// import image from '@/components/pic/imagesd.png';

// const Product1 = () => {
//   const [quantity, setQuantity] = useState(0);

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => {
//     if (quantity >=1) setQuantity(quantity - 1);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 px-6 bg-gradient-to-r from-indigo-100 via-indigo-50 to-indigo-100 rounded-xl shadow-xl">
//       {/* Image Container */}
//       <div className="col-span-1 md:col-span-4 flex justify-center items-center">
//         <div className="w-full max-w-sm p-4 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
//           <Image
//             src={image}
//             alt="Product Image"
//             className="w-full h-auto object-cover rounded-xl"
//           />
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className="col-span-1 md:col-span-8 flex flex-col justify-center pl-0 md:pl-8">
//         <h2 className="text-3xl md:text-4xl font-semibold text-indigo-800 tracking-wide">
//           Product 1
//         </h2>
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gradient-to-r bg-clip-text from-blue-500 to-purple-600 mt-2">
//           The First Beautiful Option
//         </h1>
//         <p className="text-lg text-gray-700 mt-4 max-w-md">
//           Discover the elegance and craftsmanship of this product. Ideal for those who appreciate luxury and simplicity. Perfect for any occasion.
//         </p>

//         <div className="flex items-center mt-6 space-x-4">
//           <p className="text-2xl md:text-3xl font-bold text-gray-800">
//             Price: <span className="text-3xl md:text-4xl text-red-500">$20</span>
//           </p>
//           <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 ease-in-out">
//             Add to Cart
//           </button>

//           {/* Quantity Control */}
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={handleIncrease}
//               className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 transition duration-300"
//             >
//               +
//             </button>
//             <span className="text-xl font-semibold">{quantity}</span>
//             <button
//               onClick={handleDecrease}
//               className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 transition duration-300"
//             >
//               -
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product1;


// "use client";
// import Image from 'next/image';
// import React, { useState } from 'react';
// import image from '@/components/pic/imagesd.png';

// Function Product1 () {
//   const [quantity, setQuantity] = useState(0);

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => {
//     if (quantity >= 1) setQuantity(quantity - 1);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 px-6 bg-gradient-to-r from-indigo-100 via-indigo-50 to-indigo-100 rounded-xl shadow-2xl">
//       {/* Image Container */}
//       <div className="col-span-1 md:col-span-5 flex justify-center items-center">
//         <div className="w-full max-w-sm p-4 bg-white shadow-lg rounded-2xl transform transition-all hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
//           <Image
//             src={image}
//             alt="Product Image"
//             className="w-full h-auto object-cover rounded-2xl shadow-md"
//           />
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className="col-span-1 md:col-span-7 flex flex-col justify-center pl-0 md:pl-8">
//         <h2 className="text-4xl md:text-5xl font-semibold text-indigo-800 tracking-wide text-center md:text-left">
//           Product 1
//         </h2>
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gradient-to-r bg-clip-text from-blue-500 to-purple-600 mt-2 text-center md:text-left">
//           The First Beautiful Option
//         </h1>
//         <p className="text-lg text-gray-700 mt-4 max-w-xl text-center md:text-left">
//           Discover the elegance and craftsmanship of this product. Ideal for those who appreciate luxury and simplicity. Perfect for any occasion.
//         </p>

//         <div className="flex items-center justify-center md:justify-start mt-6 space-x-6">
//           <p className="text-2xl md:text-3xl font-semibold text-gray-800">
//             Price: <span className="text-3xl md:text-4xl text-red-600 font-bold">$20</span>
//           </p>
//           <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-5 rounded-full shadow-xl hover:bg-blue-700 transition duration-300 ease-in-out">
//             Add to Cart
//           </button>
//         </div>

//         {/* Ultra Compact and Square Quantity Control */}
//         <div className="flex items-center justify-center md:justify-start mt-6 space-x-3">
//           {/* Decrease Button */}
//           <button
//             onClick={handleDecrease}
//             className="bg-gray-200 text-gray-800 p-1 w-8 h-8 rounded-full shadow-md hover:bg-gray-300 transform transition duration-200 hover:scale-105"
//           >
//             <span className="text-xl">-</span>
//           </button>

//           {/* Quantity Display Box */}
//           <div className="text-lg font-semibold text-gray-800 bg-white p-2 w-10 h-10 rounded-full shadow-md flex items-center justify-center">
//             {quantity}
//           </div>

//           {/* Increase Button */}
//           <button
//             onClick={handleIncrease}
//             className="bg-gray-200 text-gray-800 p-1 w-8 h-8 rounded-full shadow-md hover:bg-gray-300 transform transition duration-200 hover:scale-105"
//           >
//             <span className="text-xl">+</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product1;
// "use client";
// import Image from 'next/image';
// import React, { useState } from 'react';
// import image from '@/components/pic/imagesd.png'; // Ensure this path is correct

// function Product1() {

//     // const result =await fetch("http://localhost:8000/products");
//     //  const data =await result.json() []

//   const [quantity, setQuantity] = useState(0);

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => {
//     if (quantity > 0) setQuantity(quantity - 1);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 px-6 bg-gradient-to-r from-indigo-100 via-indigo-50 to-indigo-100 rounded-xl shadow-2xl">
//       {/* Image Container */}
//       <div className="col-span-1 md:col-span-5 flex justify-center items-center">
//         <div className="w-full max-w-sm p-4 bg-white shadow-lg rounded-2xl transform transition-all hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
//           <Image
//             src={image}
//             alt="Product Image"
//             className="w-full h-auto object-cover rounded-2xl shadow-md"
//           />
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className="col-span-1 md:col-span-7 flex flex-col justify-center pl-0 md:pl-8">
//         <h2 className="text-4xl md:text-5xl font-semibold text-indigo-800 tracking-wide text-center md:text-left">
//           Product 1
//         </h2>
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gradient-to-r bg-clip-text from-blue-500 to-purple-600 mt-2 text-center md:text-left">
//           The First Beautiful Option
//         </h1>
//         <p className="text-lg text-gray-700 mt-4 max-w-xl text-center md:text-left">
//           Discover the elegance and craftsmanship of this product. Ideal for those who appreciate luxury and simplicity. Perfect for any occasion.
//         </p>

//         <div className="flex items-center justify-center md:justify-start mt-6 space-x-6">
//           <p className="text-2xl md:text-3xl font-semibold text-gray-800">
//             Price: <span className="text-3xl md:text-4xl text-red-600 font-bold">$20</span>
//           </p>
//           <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-5 rounded-full shadow-xl hover:opacity-90 transition duration-300 ease-in-out">
//             Add to Cart
//           </button>
//         </div>

//         {/* Quantity Control */}
//         <div className="flex items-center justify-center md:justify-start mt-6 space-x-3">
//           <button
//             onClick={handleDecrease}
//             className="bg-gray-200 text-gray-800 w-8 h-8 rounded-full shadow-md hover:bg-gray-300 transition duration-200 hover:scale-105"
//           >
//             <span className="text-xl">-</span>
//           </button>

//           <div className="text-lg font-semibold text-gray-800 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center">
//             {quantity}
//           </div>

//           <button
//             onClick={handleIncrease}
//             className="bg-gray-200 text-gray-800 w-8 h-8 rounded-full shadow-md hover:bg-gray-300 transition duration-200 hover:scale-105"
//           >
//             <span className="text-xl">+</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product1;

import Image from 'next/image';

import Counter from '../../../components/counter'; // Import the Counter component


  export interface IResultProps{

    params:Promise<{id:string}>;
    searchParams: Promise<>;
 
}



async  function Product1({params}:IResultProps) {

const {id}=await params;

    const result=await fetch(`http://localhost:8000/products/${id}`);
        const  data=(await result.json()) as IProductPropso ;

    // type IProduct1={

    //     id: string,
    //     image: string,
    //     title: string,
    //     description: string,
    //     price: number,
    // }
    // const result=await fetch("http://localhost:8000/products/1");
    // const  data=(await result.json()) as IProductPropso ;
    // // console.log(`/pic/${data.image}`);


  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 px-6 bg-gradient-to-r from-indigo-100 via-indigo-50 to-indigo-100 rounded-xl shadow-2xl">
      {/* Product Image */}
      <div className="w-full max-w-sm p-4 bg-white shadow-lg rounded-2xl transform transition-all hover:scale-105 hover:shadow-xl duration-300 ease-in-out col-span-1 md:col-span-5">
        <Image
        src={data.image} 
          alt="Product Image"
          className="w-full h-auto object-cover rounded-2xl shadow-md"
          width={300} // Width of the image
  height={200} // Height of the image
        />
      </div>

      {/* Product Details */}
      <div className="col-span-1 md:col-span-7 flex flex-col justify-center pl-0 md:pl-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-indigo-800 tracking-wide text-center md:text-left">
      {data.description} 
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gradient-to-r bg-clip-text from-blue-500 to-purple-600 mt-2 text-center md:text-left">
        
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-xl text-center md:text-left">
          {data.title}
          </p>

        <div className="flex items-center justify-center md:justify-start mt-6 space-x-6">
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            Price: <span className="text-3xl md:text-4xl text-red-600 font-bold">{data.price}</span>
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-5 rounded-full shadow-xl hover:opacity-90 transition duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>

        {/* Counter Component */}
        <div className="mt-6">
          <Counter id={id} />
        </div>
      </div>
    </div>
  );
}

export default Product1;

