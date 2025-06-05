

import Container from '@/components/container';
// import { findUserByEmail } from '../../action/auth'
import React from 'react';
import ProductItem, { IProductList } from '@/components/productItem';
import Link from 'next/link';
import Pagination from '@/components/pagination ';
import Search from '@/components/search';

  interface IStoreProps{
      params: {};
      searchParams : Promise <{
    page:string,
    per_page:string
    title:string
    
      }>;
    }

 async function  Store  ({searchParams}:IStoreProps)  {
  console.log(searchParams);
  // const page=(await searchParams).page??"1"
 const page = (await searchParams).page ?? "1";

const per_page=(await searchParams).per_page??"5"
const title=(await searchParams).title??""

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


const result=await fetch(`http://localhost:8000/products?_page=${page}&_per_page=${per_page}&title=${title}`);
    const  data=(await result.json()) as IProductList;
console.log(data);


  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Store</h1>
      <Search />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         {data.data.map((item) => (

<Link key={item.id} href={`/store/${item.id}`}>
          <ProductItem  {...item} />
          </Link>
        ))}
      
      </div>
      <Pagination  pageCount={data.pages}  />
    </Container>
    
  );
};

export default Store;
