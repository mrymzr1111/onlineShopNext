
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';

const categories = ['All categories', 'Mockups', 'Templates', 'Design', 'Logos'];

const Search = () => {
  const router = useRouter();
  const searchParams=useSearchParams()
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const dropdownRef = useRef(null);
 const dropdownRef = useRef<HTMLDivElement>(null);


  const handleSearch = (e: React.FormEvent) => {
    const currentSearchParams=new URLSearchParams(searchParams.toString())
    currentSearchParams.set("title",search)
    e.preventDefault();
    const categoryParam = selectedCategory !== 'All categories' ? `&category=${selectedCategory}` : '';
    // router.push(`/store?title=${search}${categoryParam}`);
    // router.push(`/store?${ currentSearchParams.toString()}${categoryParam}`);
    router.push(`/store?${currentSearchParams.toString()}${categoryParam}`);
  console.log(searchParams.toString());
 
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md mx-auto pb-9">
      <div className="flex relative" ref={dropdownRef}>
        {/* Dropdown Button */}
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="shrink-0  z-10 inline-flex items-center h-11 px-4 text-sm font-medium text-gray-800 bg-gray-100 border border-gray-300 rounded-s-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          {selectedCategory}
          <svg
            className="w-3 h-4 ml-2 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-1 z-20 bg-white divide-y divide-gray-100 rounded-md shadow w-44">
            <ul className="py-2 text-sm text-gray-700">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleCategorySelect(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Search Input */}
        <div className="relative w-full">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            required
            className="block w-full p-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-e-md focus:ring-gray-500 focus:border-gray-500 outline-none"
          />
          <button
            type="submit"
            className="absolute px-4  py-3   top-0   flex-1         right-0 p-2.5 text-sm font-medium text-white bg-gray-700 rounded-e-md hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-500"
          >
            <svg
              className="w-4 h-4 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
