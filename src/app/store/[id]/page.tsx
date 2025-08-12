
import Image from 'next/image';
import Counter from '../../../components/counter';


export default async function Page({
  params,
}: {
  //  params: Promise<{ id: string }>;
  params: { id: string }
}) {
  const { id } = params;

  const res = await fetch(`http://localhost:8000/products/${id}`);
//   const data: IProductProps = await res.json();
//   const data = await res.json();
 const data = (await res.json()) ;
  return (
   
<div className="flex items-center justify-center p-4">
  <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Product Info */}
      <div className="flex flex-col gap-5 text-gray-700">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 tracking-tight">
          {data.title}
        </h1>
        <p className="text-xl sm:text-2xl font-semibold">
          Price: <span className="text-gray-600">${data.price}</span>
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-gray-600">
          {data.description || "This product is carefully crafted and ideal for daily use, combining function and form."}
        </p>
        <div className="pt-2 sm:pt-4">
          <Counter id={id} />
        </div>
      </div>

      {/* Product Image */}
      <div className="w-full flex justify-center">
        <Image
          src={data.image}
          alt={data.title}
          width={400}
          height={300}
          className="rounded-2xl border border-gray-300 shadow-sm object-cover max-w-full h-auto"
        />
      </div>
    </div>
  </div>
</div>



















  );
}
