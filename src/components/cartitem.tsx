
// import React, { useState, useEffect } from 'react';
// import Counter from './counter';
// import Image from 'next/image';
// import axios from 'axios';
// import { IProductProps } from './productItem';  

// interface ICartItemProps {
//   id: number;
//   qty: number;
// }

// const Cartitem = ({ id, qty }: ICartItemProps) => {
//   const [data, setData] = useState<IProductProps | null>(null);

//   useEffect(() => {
//     // Fetch the specific product details based on the id
//     axios.get<IProductProps>(`http://localhost:8000/products/${id}`)
//       .then(result => {
//         setData(result.data);  // Store the data from the API response
//       })
//       .catch(error => {
//         console.error("Error fetching product data:", error);
//       });
//   }, [id]);  // Dependency on `id`, so the effect will run whenever `id` changes

//   // If data is not yet available (before the API request is completed), we show a loading state
//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b-2 border-gray-300 pb-6">
//         {/* Product Image */}
//         <div className="col-span-3  ">
//           <Image
//             alt="product image"
//             // src={data.imageUrl || "/pic/girll.png"} 
//             src={typeof data.image === 'string' && data.image !== '' ? data.image : "/pic/girll.png"}
//             // width={300}
//             // height={200}
//             height={300}
//             width={200}
//            style={{objectFit:'contain'}}
//             className="rounded-lg shadow-lg transform  hover:grayscale transition-transform duration-300 ease-in-out"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="col-span-9">
//           <h2 className="text-2xl font-semibold text-teal-800 mb-2">{data.title}</h2>
//           <p className="text-sm text-gray-500 mb-2">Quantity: {qty}</p>
          
//           {/* Display the price */}
//           <p className="text-xl font-bold text-teal-600 mb-4">
//             Price:  ${Number(data.price).toFixed(2)} {/* Ensure price is a number */}
//           </p>

//           {/* Counter Component */}
//           <Counter id={id.toString()} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cartitem;






import React, { useState, useEffect } from 'react';
import Counter from './counter';
import Image from 'next/image';
import axios from 'axios';
import { IProductProps } from './productItem';  

interface ICartItemProps {
  id: number;
  qty: number;
}

const CartItem = ({ id, qty }: ICartItemProps) => {
  const [data, setData] = useState<IProductProps | null>(null);

  useEffect(() => {
    let isMounted = true;

    axios.get<IProductProps>(`http://localhost:8000/products/${id}`)
      .then(result => {
        if (isMounted) setData(result.data);
      })
      .catch(error => {
        console.error("Error fetching product data:", error);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!data) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Product Image */}
        <div className="col-span-12 md:col-span-3 flex justify-center md:justify-start">
          <Image
            alt="Product image"
            src={typeof data.image === 'string' && data.image.trim() !== '' ? data.image : "/pic/girll.png"}
            height={300}
            width={200}
            style={{ objectFit: 'contain' }}
            className="rounded-xl shadow-md hover:grayscale transition duration-300 ease-in-out"
          />
        </div>

        {/* Product Info */}
        <div className="col-span-12 md:col-span-9 space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{data.title}</h2>
          <p className="text-sm text-gray-500">Quantity: {qty}</p>
          <p className="text-lg md:text-xl font-bold text-gray-500">
            Price: ${Number(data.price).toFixed(2)}
          </p>

          {/* Counter */}
          <div className="pt-2">
            <Counter id={id.toString()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;


