// import { getCollection } from "@/lib/db"
// import getAuthUser from "@/lib/getAuthUser"
// import { ObjectId } from "mongodb"
// import Link from "next/link";

// export default  async function Dashboard() {
//     // get the current logged in user's information 
//     const user=await getAuthUser()
//      if (!user || typeof user.userId !== "string") {
//     throw new Error("User ID is missing or not a string");
//   }
//     //get collection
//     const merchCollection=await getCollection(" merchandise")
//     //filter itarate over mongodb
//     const merchUser= await merchCollection?.find(
//     // converted into an ObjectId type from string(user.userId) before querying
// { userId: new ObjectId(user.userId)}) .sort({$natural:-1}).toArray();


//     return(
//         //loop over it 
// <div className="">
//   <h1>Welcome to Dashboard </h1>  
// {merchUser && 
// <table>
   
//         <thead>
//              <tr>
//             <th className="3/6">title</th>
//   <th className="1/6 sr-only">view </th>
//     <th className="1/6 sr-only"> Edit </th>
//       <th className="1/6 sr-only"> Delete </th>
//         </tr>
//         </thead>
//         <tbody>
//             {merchUser.map((merch)=>
//             <tr className="" key= {merch._id.toString()}>
//                <td className="w-3/6 text-blue-500" >{merch.title}
//             <Link href={`/show/${merch._id.toString()}`}>view</Link>
//                </td>

//                  <td className="w-3/6 text-green-500" >{merch.title}
//             <Link href={`/admin/edit/${merch._id.toString()}`}>Edit</Link>
//                </td>

//  <td className="w-3/6 text-yellow-500" >{merch.title}
//             <Link href={`/delete/${merch._id.toString()}`}>view</Link>
//                </td>
//                 </tr>)}
//         </tbody>

  
// </table> }


// {
//    !merchUser && <p> Failed to fetch data! </p>
// }
// </div>
//     )
// }




// import { getCollection } from "@/lib/db"
// import getAuthUser from "@/lib/getAuthUser"
// import { ObjectId } from "mongodb"
// import Link from "next/link";

// export default async function Dashboard() {
//   const user = await getAuthUser()

//   if (!user || typeof user.userId !== "string") {
//     throw new Error("User ID is missing or not a string");
//   }

//   const merchCollection = await getCollection("merchandise");
//   const merchUser = await merchCollection?.find({
//     userId: new ObjectId(user.userId),
//   }).sort({ $natural: -1 }).toArray();

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Welcome to Dashboard</h1>

//       {merchUser && merchUser.length > 0 ? (
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-2 border">Title</th>
//               <th className="p-2 border">View</th>
//               <th className="p-2 border">Edit</th>
//               <th className="p-2 border">Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {merchUser.map((merch) => (
//               <tr key={merch._id.toString()} className="text-center">
//                 <td className="p-2 border text-blue-500">{merch.title}</td>
//                 <td className="p-2 border">
//                   <Link href={`/show/${merch._id.toString()}`} className="text-blue-600 hover:underline">View</Link>
//                 </td>
//                 <td className="p-2 border">
//                   {/* <Link href={`/edit/${merch._id.toString()}`} className="text-green-600 hover:underline">Edit</Link> */}
//               <Link href={`/admin/edit/${merch._id.toString()}`}>Edit</Link>
//                 </td>
//                 <td className="p-2 border">
//                   <Link href={`/delete/${merch._id.toString()}`} className="text-red-600 hover:underline">Delete</Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="text-red-500">Failed to fetch data or no merchandise found.</p>
//       )}
//     </div>
//   );
// }
import { getCollection } from "@/lib/db";
import getAuthUser from "@/lib/getAuthUser";
import { ObjectId } from "mongodb";
import Link from "next/link";

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
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">welcome to Dashboard</h1>

      {merchUser && merchUser.length > 0 ? (
        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="w-full table-auto bg-gray-50 border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-800 text-left">
                <th className="p-4 border-b">Title</th>
                <th className="p-4 border-b text-center">View</th>
                <th className="p-4 border-b text-center">Edit</th>
                <th className="p-4 border-b text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {merchUser.map((merch) => (
                <tr key={merch._id.toString()} className="hover:bg-gray-100 transition">
                  <td className="p-4 border-b font-medium text-indigo-700">{merch.title}</td>
                  
                  <td className="p-4 border-b text-center">
                    <Link
                      href={`/show/${merch._id.toString()}`}
                      className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-1 px-3 rounded-lg transition"
                    >
                      View
                    </Link>
                  </td>

                  <td className="p-4 border-b text-center">
                    <Link
                      href={`/admin/edit/${merch._id.toString()}`}
                      className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-semibold py-1 px-3 rounded-lg transition"
                    >
                      Edit
                    </Link>
                  </td>

                  <td className="p-4 border-b text-center">
                    <Link
                      href={`/delete/${merch._id.toString()}`}
                      className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-1 px-3 rounded-lg transition"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-red-600  bold font-medium mt-4">No merchandise found...</p>
      )}
    </div>
  );
}
