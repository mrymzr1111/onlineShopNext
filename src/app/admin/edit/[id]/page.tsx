


import MerchForm from "@/components/merchForm";
import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";
// import { updateMerch } from "../../addmerch/merch";
import { MerchandiseType } from "@/components/merchForm";
import {  updateMerch } from "../../addmerch/merch";

interface PageProps {
  params: {
    id: string; // ✅ always string from URL
  };
}

// export default async function Page({ params }: { params: { id: string | Promise<string> } }) {
export default async function Page({ params }:PageProps) {
  const {id}  = params;
  // if id might be a Promise, await it:
  // const id = typeof params.id === 'string' ? params.id : await params.id;
  //connects to the merchandise collection in MongoDB database
  const merchCollection = await getCollection("merchandise");

  let merchandise: MerchandiseType | null = null;

  if (id.length === 24 && merchCollection) {
    // specific document finds (item with ID jjj) that you want to edit
    //query the db based on the id
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

 
     
           <MerchForm  handler={updateMerch} merchandise={merchandise} />
 

 
    </div>
  );
}
