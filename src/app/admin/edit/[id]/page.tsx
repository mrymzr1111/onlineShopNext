


import MerchForm from "@/components/merchForm";
import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";
// import { updateMerch } from "../../addmerch/merch";
import { MerchandiseType } from "@/components/merchForm";
import {  updateMerch } from "../../addmerch/merch";



interface PageProps {
  params: {
    id: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
}




export default async function Page({ params }: PageProps) {

  // const id = params.id;

  // const merchCollection = await getCollection("merchandise");

  // let merchandise: MerchandiseType | null = null;

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

// interface PageProps {
//   params: {
//     id: string;
//   };
//   searchParams?: { [key: string]: string | string[] | undefined };
// }


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





// interface MerchandiseType {
//   _id: string;
//   image: string;
//   title: string;
//   description: string;
//   price: number;
// }

// interface merchActionState {
//   success: boolean;
//   message?: string;
// }

// interface PageProps {
//   params: { id: string };
//   searchParams?: { [key: string]: string | string[] | undefined };
// }

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

//   // Convert FormData to MerchandiseType inside the handler
//   const updateMerch = async (formData: FormData): Promise<merchActionState> => {
//     try {
//       const updated: MerchandiseType = {
//         _id: formData.get("_id") as string,
//         image: formData.get("image") as string,
//         title: formData.get("title") as string,
//         description: formData.get("description") as string,
//         price: Number(formData.get("price")),
//       };

//       // Perform DB update logic here
//       if (merchCollection) {
//         await merchCollection.updateOne(
//           { _id: new ObjectId(updated._id) },
//           { $set: { ...updated } }
//         );
//       }

//       return { success: true };
//     } catch (error) {
//       console.error(error);
//       return { success: false, message: "Failed to update merchandise" };
//     }
//   };

//   return (
//     <div className="w-full">
//       <MerchForm handler={updateMerch} merchandise={merchandise ?? undefined} />
//     </div>
//   );
// }
