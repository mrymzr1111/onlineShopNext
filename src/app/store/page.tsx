
// import Container from '@/components/container';

// import images  from "../../components/pic/imagesd.png";
// import image  from "../../components/pic/girll.png";

// import React from 'react';
// import ProductItem from '@/components/productItem';

  
// const Store = () => {
// const data=[
//     {
//         id:"1",
//       image:{images},
//       title:"hhhh",
//       description:"nnnn",
//       price:170
//     },
//     {
//         id:"2",
//         image:{image},
//         title:"hhh",
//         description:"hhhh",
//         price:130
//     }
// ,
// {
//     id:"3",
//     image:{image},
//     title:"jjhh",
//     description:"jjjjj",
//     price:120
// }


// ]

//     return (
//         <Container>
//             <h1>Home</h1>
//             <div className='grid grid-cols-4 gap-4  top-3'>
//                 {
//                     data.map((item)=>(
//                         <ProductItem key={item.id} {...item} />
//                     )
//                ) }
               
//             </div>
//         </Container>
//     );
// }
// export default Store;


import Container from '@/components/container';

import React from 'react';
import ProductItem, { IProductPropso } from '@/components/productItem';
import Link from 'next/link';

 async function  Store  ()  {
  // const data = [
  //   {
  //     id: '1',
  //     image: images,
  //     title: 'Product 1',
  //     description: 'Description 1',
  //     price: 170,
  //   },
  //   {
  //     id: '2',
  //     image: image,
  //     title: 'Product 2',
  //     description: 'Description 2',
  //     price: 130,
  //   },
  //   {
  //     id: '3',
  //     image: image,
  //     title: 'Product 3',
  //     description: 'Description 3',
  //     price: 120,
  //   },
  // ];


const result=await fetch("http://localhost:8000/products/");
    const  data=(await result.json()) as IProductPropso [] ;


  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         {data.map((item) => (

<Link key={item.id} href={`/store/${item.id}`}>
          <ProductItem  {...item} />
          </Link>
        ))}
      
      </div>
    </Container>
  );
};

export default Store;
