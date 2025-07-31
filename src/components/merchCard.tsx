// import Link from "next/link";

// export default function MerchCard({merch}) {
//     return(
//         <div className="border border-slate-400 border-dashed p-4 rounded-md h-full">
  

// <p className="text-slate-400 text-xs"> creat ay   </p>
// <Link  href="" className="block text-xl font-semibold">
// {merch.title}
// </Link>
// <p className="text-sm">{merch.content}</p>
// </div>
//     )

// }

// import Link from "next/link";

// export default function MerchCard({ merch }: { merch: any }) {
//   return (
//     <div className="border border-slate-400 border-dashed p-4 rounded-md h-full">
//       <p className="text-slate-400 text-xs">Created at: {/* optionally format merch.createdAt */}</p>
//       <Link href={`/merch/${merch._id}`} className="block text-xl font-semibold">
//         {merch.title}
//       </Link>
//       <p className="text-sm">{merch.description}</p>
//     </div>
//   );
// }


// import Link from "next/link";

// export default function MerchCard({ merch }: { merch: any }) {
//   return (
//     <div className="w-full max-w-xs bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
//       <Link href={`/show/${merch._id.toString()}`}>
//         <div>
//             <div className="relative w-full pb-[75%] overflow-hidden">
//   <img
//     src={merch.image}
//     alt={merch.title}
//     className="absolute top-0 left-0 w-full h-full object-cover"
//   />
// </div>

//           {/* <img
//             src={merch.image}
//             alt={merch.title}
//             className="w-full h-48 object-cover"
//           /> */}
//           <div className="p-4">
//             <h3 className="text-lg font-semibold truncate">{merch.title}</h3>
//             <p className="text-sm text-gray-600 line-clamp-2">
//               {merch.description}
//             </p>
//             <p className="text-green-600 font-bold mt-2">${merch.price}</p>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }


import Link from "next/link";

export default function MerchCard({ merch }: { merch: any }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <Link href={`/show/${merch._id.toString()}`} className="block">
        {/* Image */}
        <div className="relative w-full aspect-[4/5] bg-gray-100">
          <img
            src={merch.image}
            alt={merch.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 truncate">{merch.title}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {merch.description}
          </p>
          <p className="text-xl font-semibold text-rose-600 mt-3">
            ${merch.price}
          </p>
        </div>
      </Link>
    </div>
  );
}
