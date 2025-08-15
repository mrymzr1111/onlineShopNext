
// import MerchCard from "@/components/merchCard";
// import { getCollection } from "@/lib/db";
// import { ObjectId } from "mongodb";

// type Params = {
//   params: {
//     id: string;
//   };
// };
 


// // نوع داده Merch مطابق با props کامپوننت MerchCard
// type Merch = {
//   _id: string;
//   userId?: string;
//   image: string;
//   title: string;
//   description: string;
//   price: number;
// };



// export default async function Page({ params }: Params) {
//   const { id } =  params;

//   const merchCollection = await getCollection("merchandise");

//   const merchandise =
//     id.length === 24
//       ? await merchCollection?.findOne({
//           _id: new ObjectId(id),
//         })
//       : null;
// const safeMerch = merchandise
//     ? {
//         ...merchandise,
//         _id: merchandise._id.toString(),
//         userId: merchandise.userId?.toString(),
//       }
//     : null;
//   return (
//     <div className="container w-1/2 p-17">
//       {merchandise ? <MerchCard merch={safeMerch} /> : <p>Failed to fetch merch.</p>}
//     </div>
//   );
// }

import MerchCard from "@/components/merchCard";
import { getCollection } from "@/lib/db";
import { ObjectId, WithId, Document } from "mongodb";

type Params = {
  params: {
    id: string;
  };
};

// نوع داده Merch مطابق با props کامپوننت MerchCard
type Merch = {
  _id: string;
  userId?: string;
  image: string;
  title: string;
  description: string;
  price: number;
};

export default async function Page({ params }: Params) {
  const { id } = params;

  // بررسی طول id
  if (id.length !== 24) {
    return (
      <div className="container w-1/2 p-17">
        <p>Invalid merch ID.</p>
      </div>
    );
  }

  const merchCollection = await getCollection("merchandise");

  // گرفتن داده از MongoDB
  const merchandise = await merchCollection?.findOne<WithId<Document>>({
    _id: new ObjectId(id),
  });

  // تبدیل داده‌ها به نوع Merch
  const safeMerch: Merch | null = merchandise
    ? {
        _id: merchandise._id.toString(),
        userId: merchandise.userId?.toString(),
        image: merchandise.image,
        title: merchandise.title,
        description: merchandise.description,
        price: merchandise.price,
      }
    : null;

  return (
    <div className="container w-1/2 p-17">
      {safeMerch ? <MerchCard merch={safeMerch} /> : <p>Failed to fetch merch.</p>}
    </div>
  );
}
