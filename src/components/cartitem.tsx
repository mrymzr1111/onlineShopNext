import React from 'react';
import Counter from './counter';
import Image from 'next/image';

const Cartitem = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b-2 border-gray-300 pb-6">
                    {/* Product Image */}
                    <div className="col-span-3">
                        <Image
                            alt="product image"
                            src="/pic/girll.png"
                            width={300}
                            height={200}
                            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="col-span-9">
                        <h2 className="text-2xl font-semibold text-teal-800 mb-2">Name of Product</h2>
                        <p className="text-sm text-gray-500 mb-2">Quantity: 1</p>
                        <p className="text-xl font-bold text-teal-600 mb-4">$49.99</p>

                        {/* Counter Component */}
                        <Counter />
                    </div>
                </div>

                {/* Total Section */}
                <div className="flex justify-between mt-6 border-t-2 border-gray-300 pt-6">
                    <p className="text-lg font-medium text-gray-700">Total</p>
                    <p className="text-2xl font-extrabold text-teal-700">$49.99</p>
                </div>
        </div>
    );
}

export default Cartitem;
