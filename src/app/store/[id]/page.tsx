
import Image from 'next/image';
import Counter from '../../../components/counter';
import { IProductProps } from '@/components/productItem';


// interface IPageProps {
//   params: {
//     id: string;
//   };
//   searchParams?: { [key: string]: string | string[] | undefined };
// }

// interface PageProps {


//   params: Promise<{ id: string }>;



// //   params: {
// //     id: string;
// //   };
// //   searchParams?: {
// //     [key: string]: string | string[] | undefined;
// //   };
// }

// export default async function Page({ params }: PageProps) {
//   const { id } =await params;

//   const result = await fetch(`http://localhost:8000/products/${id}`,{ cache: 'no-store' });
//   const data = (await result.json()) as IProductProps;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 px-6 bg-gradient-to-r from-indigo-100 via-indigo-50 to-indigo-100 rounded-xl shadow-2xl">
//       <div className="w-full max-w-sm p-4 bg-white shadow-lg rounded-2xl transform transition-all hover:scale-105 hover:shadow-xl duration-300 ease-in-out col-span-1 md:col-span-5">
//         <Image
//           src={data.image}
//           alt="Product Image"
//           className="w-full h-auto object-cover rounded-2xl shadow-md"
//           width={300}
//           height={200}
//         />
//       </div>

//       <div className="col-span-1 md:col-span-7 flex flex-col justify-center pl-0 md:pl-8">
//         <h2 className="text-4xl md:text-5xl font-semibold text-indigo-800 tracking-wide text-center md:text-left">
//           {data.description}
//         </h2>
//         <p className="text-lg text-gray-700 mt-4 max-w-xl text-center md:text-left">
//           {data.title}
//         </p>

//         <div className="flex items-center justify-center md:justify-start mt-6 space-x-6">
//           <p className="text-2xl md:text-3xl font-semibold text-gray-800">
//             Price: <span className="text-3xl md:text-4xl text-red-600 font-bold">{data.price}</span>
//           </p>
//           {/* <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-5 rounded-full shadow-xl hover:opacity-90 transition duration-300 ease-in-out">
//             Add to Cart
//           </button> */}
//         </div>

//         <div className="mt-6">
//           <Counter id={id} />
//         </div>
//       </div>

// {/* <div>  store id  :{params.id}       </div> */}

//     </div>
//   );
// }

export default async function Page({
  params,
}: {
   params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/products/${id}`);
//   const data: IProductProps = await res.json();
//   const data = await res.json();
 const data = (await res.json()) as IProductProps;
  return (
    <div>
      <h1>{data.title}</h1>
      <Image src={data.image} alt="" width={300} height={200} />
      <Counter id={id} />
    </div>
  );
}
