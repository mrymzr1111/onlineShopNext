// "use client"
// import { useActionState } from "react";

// const DashboardPage=({handler,handleInputChange,product})=>{
//  const [state,action,isPending]=useActionState(handler,undefined);

// return(


//      <form action={action}>
//       <div className="mb-4 pt-7">
//       <div className="mb-4">
//       <input
//             id="item"
//             type="text"
//             name='title'
//             // onChange={handleInputChange}
//             className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//             placeholder="Enter product image URL"
//           />
//         {/* {state?.errors?.email && (
//             <p className="text-sm text-red-600 mt-1" >{state.errors.email}</p>
//           )} */}
//           <input
//             id="item"
//             type="text"
//             name='item'
//             onChange={handleInputChange}
//             className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//             placeholder="Enter product title"
//           />
        
// <input
//             id="item"
//             type="text"
//             name='price'
//             onChange={handleInputChange}
//             className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//             placeholder="Enter item price"
//           />
//         </div>
//         </div>
        
//         <div>
//           <textarea
//             id="description"
//             rows={4}
//             className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//             placeholder="Enter a brief description"
//           />
//         </div>
//         <button
//          disabled={isPending}
     

//           className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-200"
//         >
//                {
//             isPending ? "loading..." : "submit"
//           }
//         </button>
// </form>


// )
// }
// export default  DashboardPage;

// ...................................................................................................
// "use client";

// import React from "react";

// type Props = {
//   handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
//   handleSubmit: () => void;
//   product: {
//     image: string;
//     title: string;
//     description: string;
//     price: string;
//   };
// };

// const DashboardPage = ({ handleInputChange, handleSubmit, product }: Props) => {
//   return (
//     <form onSubmit={(e) => e.preventDefault()} className="pt-7">
//       <div className="mb-4">
//         <input
//           type="text"
//           name="image"
//           value={product.image}
//           onChange={handleInputChange}
//           className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//           placeholder="Enter product image URL"
//         />

//         <input
//           type="text"
//           name="title"
//           value={product.title}
//           onChange={handleInputChange}
//           className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//           placeholder="Enter product title"
//         />

//         <input
//           type="text"
//           name="price"
//           value={product.price}
//           onChange={handleInputChange}
//           className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//           placeholder="Enter product price"
//         />
//       </div>

//       <div>
//         <textarea
//           name="description"
//           value={product.description}
//           onChange={handleInputChange}
//           rows={4}
//           className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//           placeholder="Enter a brief description"
//         />
//       </div>

//       <button
//         type="button"
//         onClick={handleSubmit}
//         className="w-full py-3 mt-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-200"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default DashboardPage;
//..................................................................................................
// "use client"; // ✅ Ensures this is a client component

// import React from "react";

// type Props = {
//   handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // ✅ Type-safe props
//   handleSubmit: () => void; // ✅ Submit handler
//   product: {
//     image: string;
//     title: string;
//     description: string;
//     price: string;
//   };
// };

// const DashboardPage = ({ handleInputChange, handleSubmit, product }: Props) => {
//   return (
//     <form onSubmit={(e) => e.preventDefault()} className="pt-7"> {/* ✅ Prevent default to stop page reload */}
//       {/* 🔧 image input */}
//       <input
//         type="text"
//         name="image"
//         value={product.image} // ✅ Binding to state
//         onChange={handleInputChange}
//         placeholder="Enter product image URL"
//         className="input-style"
//       />

//       {/* 🔧 title input */}
//       <input
//         type="text"
//         name="title"
//         value={product.title}
//         onChange={handleInputChange}
//         placeholder="Enter product title"
//         className="input-style"
//       />

//       {/* 🔧 price input */}
//       <input
//         type="text"
//         name="price"
//         value={product.price}
//         onChange={handleInputChange}
//         placeholder="Enter product price"
//         className="input-style"
//       />

//       {/* 🔧 description input */}
//       <textarea
//         name="description"
//         value={product.description}
//         onChange={handleInputChange}
//         placeholder="Enter a brief description"
//         rows={4}
//         className="input-style"
//       />

//       {/* 🔧 Submit Button */}
//       <button
//         type="button" // ✅ Prevents form submission by default
//         onClick={handleSubmit}
//         className="submit-button"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default DashboardPage;

//payyyyyyin
// "use client";

// import React from "react";

// type Props = {
//   handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
//   handleSubmit: () => void;
//   product: {
//     image: string;
//     title: string;
//     description: string;
//     price: string;
//   };
// };

// const DashboardPage = ({ handleInputChange, handleSubmit, product }: Props) => {
//   return (
//     <form onSubmit={(e) => e.preventDefault()} className="pt-7 space-y-4">
//       <input
//         type="text"
//         name="image"
//         value={product.image}
//         onChange={handleInputChange}
//         placeholder="Enter product image URL"
//         className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//       />

//       <input
//         type="text"
//         name="title"
//         value={product.title}
//         onChange={handleInputChange}
//         placeholder="Enter product title"
//         className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//       />

//       <input
//         type="text"
//         name="price"
//         value={product.price}
//         onChange={handleInputChange}
//         placeholder="Enter product price"
//         className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//       />

//       <textarea
//         name="description"
//         value={product.description}
//         onChange={handleInputChange}
//         rows={4}
//         placeholder="Enter a brief description"
//         className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//       />

//       <button
//         type="button"
//         onClick={handleSubmit}
//         className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-200"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default DashboardPage;




