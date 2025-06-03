

import React from 'react';
import Image, { StaticImageData } from 'next/image';


export interface IProductProps {
  id: string;
  image: string | StaticImageData;
  title: string;
  description: string;
  price: number;
}

    export interface IProductList{
"first": number|null,
"prev": number|null,
"next": number|null,
"last": number|null,
"pages": number,
"items": number|null,
data:IProductProps[

]
}


const ProductItem = ({ image, title, price, description }: IProductProps) => {
  const validImage =
    typeof image === 'string'
      ? image.trim() !== '' ? image : null
      : image || null;

  return (
    <div className="shadow-md rounded-md overflow-hidden items-center justify-center">
      {validImage ? (
        <div className="w-full h-72 flex">
          <Image src={validImage} alt={title} width={300} height={200} className="object-cover" />
        </div>
      ) : (
        <div className="w-full h-72 bg-gray-200 flex items-center justify-center">
          <span>No Image Available</span>
        </div>
      )}
      <div className="p-2 items-center justify-center text-center shadow-md border-t-4 border-gray-200">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-700 mb-1">{description}</p>
        <p className="text-blue-600 font-bold">{price} $</p>
      </div>
    </div>
  );
};

export default ProductItem;


