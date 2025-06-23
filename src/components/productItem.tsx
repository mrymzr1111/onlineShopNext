
// import React from 'react';
// import Image, { StaticImageData } from 'next/image';
// import Container from './container';


// export interface IProductProps {
//   id: string;
//   image: string | StaticImageData;
//   title: string;
//   description: string;
//   price: number;
// }

//     export interface IProductList{
// "first": number|null,
// "prev": number|null,
// "next": number|null,
// "last": number|null,
// "pages": number,
// "items": number|null,
// data:IProductProps[

// ]
// }


// const ProductItem = ({ image, title, price, description }: IProductProps) => {
//   const validImage =
//     typeof image === 'string'
//       ? image.trim() !== '' ? image : null
//       : image || null;

//   return (
//     <Container>
//     <div className="shadow-md rounded-md overflow-hidden items-center justify-center">
//       {validImage ? (
//         <div className="w-full h-72 relative">
//           <Image src={validImage} alt={title} width={300} height={5} className="object-cover" />
//         </div>
//       ) : (
//         <div className="w-full h-72 bg-gray-200 flex items-center justify-center">
//           <span>No Image Available</span>
//         </div>
//       )}
//       <div className="p-2 items-center justify-center text-center shadow-md border-t-4 border-gray-200">
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <p className="text-gray-700 mb-1">{description}</p>
//         <p className="text-blue-600 font-bold">{price} $</p>
//       </div>
//     </div>
//     </Container>
//   );
// };

// export default ProductItem;



// export interface IProductProps {
//   id: string;
//   image: string | StaticImageData;
//   title: string;
//   description: string;
//   price: number;
// }

//     export interface IProductList{
// "first": number|null,
// "prev": number|null,
// "next": number|null,
// "last": number|null,
// "pages": number,
// "items": number|null,
// data:IProductProps[

// ]
// }

// export default function ProductItem({ image, title, price, description }: IProductProps) {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {data?.map((product) => (
//             <div key={product.id} className="group relative">
//               <img
//                 alt={product.imageAlt}
//                 src={product.imageSrc}
//                 className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
//               />
//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
//                     <a href={product.href}>
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {product.name}
//                     </a>
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
//new

// import React from 'react';
// import Image, { StaticImageData } from 'next/image';
// import Container from './container';

// export interface IProductProps {
//   id: string;
//   image: string | StaticImageData;
//   title: string;
//   description: string;
//   price: number;
// }

// const ProductItem = ({ image, title, price, description }: IProductProps) => {
//   const validImage =
//     typeof image === 'string'
//       ? image.trim() !== '' ? image : null
//       : image || null;

//   return (
//     <Container>
//       <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
//         {validImage ? (
//           <div className="w-full h-72 relative">
//             <Image
//               src={validImage}
//               alt={title}
//               t="fill"
//               objectFit="cover"
//               className="transition-transform duration-300 ease-in-out hover:scale-105"
//             />
//           </div>
//         ) : (
//           <div className="w-full h-72 bg-gray-200 flex items-center justify-center">
//             <span className="text-gray-500">No Image Available</span>
//           </div>
//         )}

//         <div className="p-4 text-center space-y-2">
//           <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
//           <p className="text-gray-600 text-sm">{description}</p>
//           {/* <p className="text-teal-600 font-bold text-lg">${price.toFixed(2)}</p> */}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default ProductItem;
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { motion } from "framer-motion";
import AnimatedImage from './animateep';
import Container from './container';

export interface IProductProps {
  id: string;
  image: string | StaticImageData;
  title: string;
  description: string;
  price: number;
}

const ProductItem = ({ image, title, price, description }: IProductProps) => {
  const validImage =
    typeof image === 'string'
      ? image.trim() !== '' ? image : null
      : image || null;

  return (
    <Container>
      <div className="group w-full rounded-lg bg-gray-50 shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
        <div className="relative aspect-square bg-gray-200">
          {validImage ? (


<AnimatedImage src={validImage as string}  alt={title}/>
           
// {/* <Image
//   src={validImage}
//   alt={title}
//   fill
//   style={{ objectFit: 'cover' }}
//   className="rounded-t-lg group-hover:opacity-80 transition duration-300"
//    sizes="(max-width: 768px) 100vw, 33vw"
// /> */}


          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}
        </div>

        <div className="p-4">
          <h2 className="text-base  text-gray-900 text-8xl font-bold  mb-1">${price} </h2> 
          <h3 className="text-sm text-gray-700  mb-1">{title}</h3>
          <p className="text-xs text-gray-400 mb-2 line-clamp-2">{description}</p>
          {/* <p className="text-lg font-semibold text-gray-900">${price.toFixed(2)}</p> */}
        </div>
      </div>
    </Container>
  );
};

export default ProductItem;
