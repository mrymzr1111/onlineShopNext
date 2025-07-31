
import MerchCard from "@/components/merchCard";
import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";

type Params = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Params) {
  const { id } =  params;

  const merchCollection = await getCollection("merchandise");

  const merchandise =
    id.length === 24
      ? await merchCollection?.findOne({
          _id: new ObjectId(id),
        })
      : null;
const safeMerch = merchandise
    ? {
        ...merchandise,
        _id: merchandise._id.toString(),
        userId: merchandise.userId?.toString(),
      }
    : null;
  return (
    <div className="container w-1/2 p-17">
      {merchandise ? <MerchCard merch={safeMerch} /> : <p>Failed to fetch merch.</p>}
    </div>
  );
}

