
// import { getCollection } from "@/lib/db";


// import { ObjectId } from "mongodb";
// import Link from "next/link";
// import Layout  from "@/components/dash";
// import Image from "next/image";
// import { deleteMerch  } from "../addmerch/merch";
// import getAuthUser from "@/lib/getAuthUser";
// import DeleteMerchForm from "@/components/DeleteMerchForm";

// export default async function Dashboard() {
//   const user = await getAuthUser();
// console.log("AUTH USER:", user);
//   if (!user || typeof user.userId !== "string") {
//     throw new Error("User ID is missing or not a string");
//   }

//   const merchCollection = await getCollection("merchandise");
//   const merchUser = await merchCollection
//     ?.find({ userId: new ObjectId(user.userId) })
//     .sort({ $natural: -1 })
//     .toArray();

//   return (
//     < Layout>
//     <div className="min-h-screen  p-20">
      
//       <h1 className="text-m font-black text-gray-900 mb-10 leading-tight tracking-tight">
//   Welcome to{' '}
//   <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
//     Dashboard
//   </span>
// </h1>

//       {merchUser && merchUser.length > 0 ? (
//         <div className="overflow-x-auto   border-b  border-gray-300 rounded-xl shadow-md">
//           <table className="w-full table-auto bg-blue-20 border border-gray-300 rounded-lg">
//             <thead>
//               <tr className="bg-gray-7  text-gray-800 text-left">
//                 <th className="p-4 border-b  border-gray-300 ">Title</th>
//                 <th className="p-4 border-b text-center  border-gray-300  ">View</th>
//                 <th className="p-4 border-b text-center  border-gray-300   ">Edit</th>
//                 <th className="p-4 border-b text-center  border-gray-300     ">Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {merchUser.map((merch) => (
//                 <tr key={merch._id.toString()} className="hover:bg-gray-100 transition">
//                   <td className="p-4 border-b   border-gray-300  font-medium text-indigo-700">{merch.title}</td>
                  
//                   <td className="p-4 border-b  border-gray-300 text-center">
//                     <Link
//                       href={`/show/${merch._id.toString()}`}
//                       className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-1 px-3 rounded-lg transition   border-gray-300  "
//                     >
//                       View
//                     </Link>
//                   </td>

//                   <td className="p-4 border-b    border-gray-300        text-center">
//                     <Link
//                       href={`/admin/edit/${merch._id.toString()}`}
//                       className="bg-orange-300 hover:bg-orange-400 text-orange-800 font-semibold py-1 px-3 rounded-lg transition"
//                     >
//                       Edit
//                     </Link>
//                   </td>

//                   <td className="p-4 border-b   border-gray-300     text-center">
                   
                 
//   <DeleteMerchForm merchId={merch._id.toString()} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//       ) : (
//         // <p className="text-red-600  bold font-medium mt-4">No merchandise found...</p>
// <div className="mt-6 p-4 bg-yellow-100 border border-yellow-400 rounded-lg text-yellow-800 flex items-center gap-3">
//   <span>⚠️</span>
//   <span>No merchandise found. Start by adding your first item!</span>
// </div>



//       )}
//     </div>
//     </Layout>
//   );
// }








// import { getCollection } from "@/lib/db";
// import { ObjectId } from "mongodb";
// import Link from "next/link";
// import Layout from "@/components/dash";
// import getAuthUser from "@/lib/getAuthUser";
// import DeleteMerchForm from "@/components/DeleteMerchForm";

// export default async function Dashboard() {
//   const user = await getAuthUser();
//   if (!user || typeof user.userId !== "string") {
//     throw new Error("User ID is missing or not a string");
//   }

//   const merchCollection = await getCollection("merchandise");
//   const merchUser = await merchCollection
//     ?.find({ userId: new ObjectId(user.userId) })
//     .sort({ $natural: -1 })
//     .toArray();

//   return (
//     <Layout>
//       <div className="fullscreen  p-10 bg-orange-100">
//         <h1 className="text-xl font-black text-gray-900 mb-10 tracking-tight">
//           Welcome to{" "}
//           <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
//             Dashboard
//           </span>
//         </h1>

//         {merchUser && merchUser.length > 0 ? (
//           <div className="overflow-x-auto rounded-2xl shadow-lg bg-white">
//             <table className="w-full table-auto bg-white rounded-2xl">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-800 text-left">
//                   <th className="p-4">Title</th>
//                   <th className="p-4 text-center">View</th>
//                   <th className="p-4 text-center">Edit</th>
//                   <th className="p-4 text-center">Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {merchUser.map((merch) => (
//                   <tr key={merch._id.toString()} className="hover:bg-gray-50 transition">
//                     <td className="p-4 font-medium text-indigo-700">{merch.title}</td>
//                     <td className="p-4 text-center">
//                       <Link
//                         href={`/show/${merch._id.toString()}`}
//                         className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-1 px-3 rounded-lg transition"
//                       >
//                         View
//                       </Link>
//                     </td>
//                     <td className="p-4 text-center">
//                       <Link
//                         href={`/admin/edit/${merch._id.toString()}`}
//                         className="bg-orange-300 hover:bg-orange-400 text-orange-800 font-semibold py-1 px-3 rounded-lg transition"
//                       >
//                         Edit
//                       </Link>
//                     </td>
//                     <td className="p-4 text-center">
//                       <DeleteMerchForm merchId={merch._id.toString()} />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div className="mt-6 p-4 bg-yellow-100 rounded-lg text-yellow-800 flex items-center gap-3">
//             <span>⚠️</span>
//             <span>No merchandise found. Start by adding your first item!</span>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// }

//down
// import { getCollection } from "@/lib/db";
// import { ObjectId } from "mongodb";
// import Link from "next/link";
// import Layout from "@/components/dash";
// import getAuthUser from "@/lib/getAuthUser";
// import DeleteMerchForm from "@/components/DeleteMerchForm";


// export default async function Dashboard() {
//   const user = await getAuthUser();
//   if (!user || typeof user.userId !== "string") {
//     throw new Error("User ID is missing or not a string");
//   }

//   const merchCollection = await getCollection("merchandise");
//   const merchUser = await merchCollection
//     ?.find({ userId: new ObjectId(user.userId) })
//     .sort({ $natural: -1 })
//     .toArray();

//   return (
//     <Layout>
//       <div className="fullscreen p-6 sm:p-10 bg-orange-100">
//         <h1 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 sm:mb-10 tracking-tight">
//           Welcome to{" "}
//           <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
//             Dashboard
//           </span>
//         </h1>

//         {merchUser && merchUser.length > 0 ? (
//           <div className="overflow-x-auto rounded-2xl shadow-lg bg-white">
//             {/* Add min-w so table can scroll horizontally on small screens */}
//             <table className="w-full min-w-[600px] table-auto bg-white rounded-2xl">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-800 text-left">
//                   <th className="p-3 sm:p-4">Title</th>
//                   <th className="p-3 sm:p-4 text-center">View</th>
//                   <th className="p-3 sm:p-4 text-center">Edit</th>
//                   <th className="p-3 sm:p-4 text-center">Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {merchUser.map((merch) => (
//                   <tr
//                     key={merch._id.toString()}
//                     className="hover:bg-gray-50 transition"
//                   >
//                     <td className="p-3 sm:p-4 font-medium text-indigo-700">
//                       {merch.title}
//                     </td>
//                     <td className="p-3 sm:p-4 text-center">
//                       <Link
//                         href={`/show/${merch._id.toString()}`}
//                         className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-1 px-3 rounded-lg transition"
//                       >
//                         View
//                       </Link>
//                     </td>
//                     <td className="p-3 sm:p-4 text-center">
//                       <Link
//                         href={`/admin/edit/${merch._id.toString()}`}
//                         className="bg-orange-300 hover:bg-orange-400 text-orange-800 font-semibold py-1 px-3 rounded-lg transition"
//                       >
//                         Edit
//                       </Link>
//                     </td>
//                     <td className="p-3 sm:p-4 text-center">
//                       <DeleteMerchForm merchId={merch._id.toString()} />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div className="mt-6 p-4 bg-yellow-100 rounded-lg text-yellow-800 flex items-center gap-3">
//             <span>⚠️</span>
//             <span>No merchandise found. Start by adding your first item!</span>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// }


import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";
import Link from "next/link";
import Layout from "@/components/dash";
import getAuthUser from "@/lib/getAuthUser";
import DeleteMerchForm from "@/components/DeleteMerchForm";

export default async function Dashboard() {
  const user = await getAuthUser();
  if (!user || typeof user.userId !== "string") {
    throw new Error("User ID is missing or not a string");
  }

  const merchCollection = await getCollection("merchandise");
  const merchUser = await merchCollection
    ?.find({ userId: new ObjectId(user.userId) })
    .sort({ $natural: -1 })
    .toArray();

  return (
    <Layout>
      <div
        className="fullscreen p-6 sm:p-10 bg-gray-200
                   animate-fadeIn"
      >
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 sm:mb-10 tracking-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
            Dashboard
          </span>
        </h1>

        {merchUser && merchUser.length > 0 ? (
          <div className="overflow-x-auto rounded-2xl shadow-lg bg-white">
            <table className="w-full min-w-[600px] table-auto bg-white rounded-2xl">
              <thead>
                <tr className="bg-gray-100 text-gray-800 text-left">
                  <th className="p-3 sm:p-4">Title</th>
                  <th className="p-3 sm:p-4 text-center">View</th>
                  <th className="p-3 sm:p-4 text-center">Edit</th>
                  <th className="p-3 sm:p-4 text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {merchUser.map((merch) => (
                  <tr
                    key={merch._id.toString()}
                    className="hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                  >
                    <td className="p-3 sm:p-4 font-medium text-indigo-700">
                      {merch.title}
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <Link
                        href={`/show/${merch._id.toString()}`}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-1 px-3 rounded-lg transition 
                                   transform hover:scale-105 active:scale-95"
                      >
                        View
                      </Link>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <Link
                        href={`/admin/edit/${merch._id.toString()}`}
                        className="bg-orange-300 hover:bg-orange-400 text-orange-800 font-semibold py-1 px-3 rounded-lg transition
                                   transform hover:scale-105 active:scale-95"
                      >
                        Edit
                      </Link>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <DeleteMerchForm merchId={merch._id.toString()} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-6 p-4 bg-yellow-100 rounded-lg text-yellow-800 flex items-center gap-3 animate-fadeIn">
            <span>⚠️</span>
            <span>No merchandise found. Start by adding your first item!</span>
          </div>
        )}
      </div>
    </Layout>
  );
}
