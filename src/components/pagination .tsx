



"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import ReactPaginate from 'react-paginate';

import Container from './container';

interface PaginationProps {
  pageCount: number;
}

const Pagination = ({ pageCount }: PaginationProps) => {
  const router = useRouter();

  const handlePageClick = (e: { selected: number }) => {
    const selectedPage = e.selected + 1;
    router.push(`/store?page=${selectedPage}&per_page=2`);
  };

  return (
    <Container>
      <div className="flex justify-center mt-8 mb-7">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="inline-flex items-center space-x-2"
          pageClassName="relative inline-flex items-center px-5 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500"
          previousClassName="relative inline-flex items-center px-5 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500"
          nextClassName="relative inline-flex items-center px-5 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500"
          disabledClassName="opacity-50 cursor-not-allowed"
          activeClassName="bg-blue-500 text-white border-blue-500 shadow-xl scale-105"
          breakClassName="text-gray-500"
        />
      </div>
    </Container>
  );
}

export default Pagination;
