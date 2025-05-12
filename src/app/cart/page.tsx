// import Container from '@/components/container';
// import Counter from '@/components/counter';
// import Image from 'next/image';
// import React from 'react';


// const Page = () => {
//     return (
//         <Container>
//       <div className='bg-slate-100'    >
     
//             cart
       
// <div className='grid grid-cols-12 '>
// <Image alt='image'  src="/pic/girll.png"  width={300} height={200} className='col-span-3'/>
   
// </div>
// <div className='col-span-9'>
//     <Counter/>
// <h2> name of Product  </h2>
// <p> the number of item  </p>
// <p>the price </p>
// </div>
//             </div>
//         </Container>
        
//     );
// }

// export default Page;
import Cartitem from '@/components/cartitem';
import Container from '@/components/container';

import React from 'react';

const Page = () => {
    return (
        <Container>
            <div className="bg-gradient-to-r from-teal-50 to-white p-8 rounded-xl shadow-xl">
                <h1 className="text-3xl font-extrabold text-center text-teal-700 mb-6">Your Cart</h1>

                {/* Cart Item Section */}
                <Cartitem/>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <input 
                        type="text"
                        placeholder="Enter discount code"
                        className="w-full sm:w-72 px-4 py-2 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                    <button className="w-full sm:w-auto px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-200">
                        Apply
                    </button>
                </div>
                {/* Checkout Button */}
                <div className="mt-6 text-center">
                    <button className="px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 ease-in-out">
                        Proceed to Checkout
                    </button>
                </div>
                
            </div>
        </Container>
    );
};

export default Page;

// import Cartitem from '@/components/cartitem';
// import Container from '@/components/container';
// import React from 'react';

// const Page = () => {
//     return (
//         <Container>
//             <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-10 rounded-2xl shadow-2xl max-w-4xl mx-auto mt-10">
//                 <h1 className="text-3xl sm:text-4xl font-bold text-center text-teal-700 mb-8">Your Shopping Cart</h1>

//                 {/* Cart Items */}
//                 <div className="mb-8">
//                     <Cartitem />
//                 </div>

//                 {/* Discount Code Section */}
//                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
//                     <input 
//                         type="text"
//                         placeholder="Enter discount code"
//                         className="w-full sm:w-72 px-4 py-2 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
//                     />
//                     <button className="w-full sm:w-auto px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-200">
//                         Apply
//                     </button>
//                 </div>

//                 {/* Checkout Button */}
//                 <div className="text-center">
//                     <button className="w-full sm:w-auto px-8 py-3 bg-teal-600 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-teal-700 transition duration-300">
//                         Proceed to Checkout
//                     </button>
//                 </div>
//             </div>
//         </Container>
//     );
// };

// export default Page;