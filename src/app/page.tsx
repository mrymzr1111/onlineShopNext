// import MerchCard from "@/components/merchCard";
// import { getCollection } from "@/lib/db";
// import Link from "next/link";




//      export default async function Home() {

//       //get our data from database and show it
// const merchCollection= await getCollection("merchandise")
// const merchandise=await merchCollection?.find().toArray()

// if (merchandise) {
//  return (
// //     <div className="grid grid-cols-2 gap-6">
// // <h1>Home</h1>

// // {
// // merchandise.map((merch)=> 
// // <div key={merch._id} >
// // {/* <MerchCard merch={merch}/> */}
// // </div>
// //   )
// // }
// //     </div>
// <div></div>
//   );
  
// }else{
//   return(
//     <div>
//       <p>Faild to fetch from database</p>
//     </div>
//   )
// }

  
// }
  
  // app/page.tsx or pages/index.tsx depending on your Next.js version
  //kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// import MerchCard from "@/components/merchCard";
// import { getCollection } from "@/lib/db";

// export default async function Home() {
//   // get data from database
//   const merchCollection = await getCollection("merchandise");
//   const merchandise = await merchCollection?.find().toArray();

//   if (!merchandise) {
//     return (
//       <div>
//         <p>Failed to fetch from database</p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-3 grid-rows-3   gap-6 p-6">
//       {merchandise.map((merch) => (
//         <MerchCard key={merch._id.toString()} merch={merch} />
//       ))}
//     </div>
//   );
// }

import MerchCard from "@/components/merchCard";
import { getCollection } from "@/lib/db";

export default async function Home() {
  const merchCollection = await getCollection("merchandise");
  const merchandise = await merchCollection?.find().toArray();

  if (!merchandise) {
    return (
      <div className="p-8 text-center text-red-500">Failed to fetch data.</div>
    );
  }

  const limitedMerchandise = merchandise.slice(0, 16); // Only 16 items

  return (
    <div className="p-6 sm:p-8">
      <h1 className="text-2xl font-bold mb-6">Featured Products</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        style={{ gridAutoRows: "1fr" }} // make all rows equal height
      >
        {limitedMerchandise.map((merch: any) => (
          <MerchCard key={merch._id} merch={merch} />
        ))}
      </div>
    </div>
  );
}
