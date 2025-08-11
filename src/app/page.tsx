

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
