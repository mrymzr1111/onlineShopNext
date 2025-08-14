


// import MerchForm from "@/components/merchForm";
// import { getCollection } from "@/lib/db";
// import { ObjectId } from "mongodb";
// // import { updateMerch } from "../../addmerch/merch";
// import { MerchandiseType } from "@/components/merchForm";
// import {  updateMerch } from "../../addmerch/merch";

// // type PageProps = {
// //   params: { id: string | Promise<string> };
// //   searchParams?: Record<string, string | string[] | undefined>;
// // };




// // // export default async function Page({ params }: { params: { id: string | Promise<string> } }) {
// // export default async function Page({ params }: PageProps) {
// //   // const {id}  = params;
// //     const id = typeof params.id === "string" ? params.id : await params.id;


// export default async function Page(props: any) {
//   const params = props.params as { id: string | Promise<string> };
//   const id = typeof params.id === "string" ? params.id : await params.id;

//   // rest of your code...
// }






//     // console.log("Params:", params);
//   // if id might be a Promise, await it:
//   // const id = typeof params.id === 'string' ? params.id : await params.id;
//   //connects to the merchandise collection in MongoDB database
//   const merchCollection = await getCollection("merchandise");

//   let merchandise: MerchandiseType | null = null;

//   if (id.length === 24 && merchCollection) {
//     // specific document finds (item with ID jjj) that you want to edit
//     //query the db based on the id
//     const data = await merchCollection.findOne({ _id: new ObjectId(id) });
//     if (data) {
//       merchandise = {
//         _id: data._id.toString(),
//         image: data.image,
//         title: data.title,
//         description: data.description,
//         price: data.price,
//       };
//     }
//   }



//   return (
//     <div className="w-full">

 
     
//            <MerchForm  handler={updateMerch} merchandise={merchandise} />
 

 
//     </div>
//   );
// }

// import MerchForm from "@/components/merchForm";
// import { getCollection } from "@/lib/db";
// import { ObjectId } from "mongodb";
// import { MerchandiseType } from "@/components/merchForm";
// import { updateMerch } from "../../addmerch/merch";
// type PageProps = {
//   params: { id: string };
// };


// export default async function Page({ params }: PageProps) {
//   const id = params.id;

//   const merchCollection = await getCollection("merchandise");

//   let merchandise: MerchandiseType | null = null;

//   if (id.length === 24 && merchCollection) {
//     const data = await merchCollection.findOne({ _id: new ObjectId(id) });
//     if (data) {
//       merchandise = {
//         _id: data._id.toString(),
//         image: data.image,
//         title: data.title,
//         description: data.description,
//         price: data.price,
//       };
//     }
//   }

//   return (
//     <div className="w-full">
//       <MerchForm handler={updateMerch} merchandise={merchandise} />
//     </div>
//   );
// }



import MerchForm from "@/components/merchForm";
import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";
import { MerchandiseType } from "@/components/merchForm";
import { updateMerch } from "../../addmerch/merch";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const merchCollection = await getCollection("merchandise");

  let merchandise: MerchandiseType | null = null;

  if (id.length === 24 && merchCollection) {
    const data = await merchCollection.findOne({ _id: new ObjectId(id) });
    if (data) {
      merchandise = {
        _id: data._id.toString(),
        image: data.image,
        title: data.title,
        description: data.description,
        price: data.price,
      };
    }
  }

  return (
    <div className="w-full">
      <MerchForm handler={updateMerch} merchandise={merchandise} />
    </div>
  );
}
