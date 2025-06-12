

import Container from '@/components/container';
// import { findUserByEmail } from '../../action/auth'
import React from 'react';
import ProductItem, { IProductList } from '@/components/productItem';
import Link from 'next/link';
import Pagination from '@/components/pagination ';

import Search from '@/components/search';

  // interface IStoreProps{
  //   params: Promise<{ id: string }>;

  //     searchParams : Promise <{
  //   page:string,
  //   per_page:string
  //   title:string
    
  //     }>;
  //   }
  //inj
// interface IStoreProps {
//   params: { id: string };
//   searchParams?: {
//     page?: string;
//     per_page?: string;
//     title?: string;
//   };
// }
//  async function  Store  ({searchParams,params}:IStoreProps)  {
//   // console.log(searchParams);
//     const resolvedSearchParams = await searchParams;
//   // const page=(await searchParams).page??"1"
// //  const page =  searchParams?.page ?? "1";

// // const per_page=searchParams?.per_page??"5"
// // const title=searchParams?.title??"";

// const page =resolvedSearchParams ?.page || '1';         
//   const title = resolvedSearchParams?.title || '';         
//  const per_page=resolvedSearchParams?.per_page||"5"

// const result=await fetch(`http://localhost:8000/products?_page=${page}&_per_page=${per_page}&title=${title}`);
//     const  data=(await result.json()) as IProductList;
// console.log(data);


//   return (
//     <Container>
//       <h1 className="text-2xl font-bold mb-4">Store</h1>
//       <Search />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//          {data.data.map((item) => (

// <Link key={item.id} href={`/store/${item.id}`}>
//           <ProductItem  {...item} />
//           </Link>
//         ))}
      
//       </div>
//       <Pagination  pageCount={data.pages}  />
//     </Container>
    
//   );
// };

// export default Store;

interface IStoreProps {
  // حذف params چون صفحه اصلی store نیازی به این پارامتر ندارد
  searchParams?: Promise<{
    page?: string;
    per_page?: string;
    title?: string;
  }>;
}

export default async function Store({ searchParams }: IStoreProps) {
  const resolvedSearchParams = await searchParams;

  const page = resolvedSearchParams?.page || '1';
  const per_page = resolvedSearchParams?.per_page || '5';
  const title = resolvedSearchParams?.title || '';

  const res = await fetch(
    `http://localhost:8000/products?_page=${page}&_per_page=${per_page}&title=${title}`,
    { cache: 'no-store' }
  );

  const data: IProductList = await res.json();

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Store</h1>
      <Search />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.data.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
      <Pagination pageCount={data.pages} />
    </Container>
  );
}
