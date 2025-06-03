
// "use client"

// import { createContext, useState, useContext } from 'react';



// type shoppingCartContextprops={
//     children:React.ReactNode;
// }
// type ICartItem=[
//     id:number,
//     aty:number
// ]

// const shoppingCartContext=createContext({});

// export function shoppingCartProvider({children}:shoppingCartContextprops) {

//  const [CartItem,setCartItem] = useState <ICartItem[]>([]);
//    return(
// <shoppingCartContext.Provider value={{CartItem}}>
//     {children}
// </shoppingCartContext.Provider>
//    ) 


// }


// 'use client';

// import { createContext, useState, ReactNode, useContext } from 'react';

// // Define the type for each cart item
// type ICartItem = {
//   id: number;
//   qty: number;
// };

// // Props for the provider
// type ShoppingCartContextProps = {
//   children: ReactNode;
// };

// // Define the context shape
// type ShoppingCartContextType = {
//   cartItems: ICartItem[];
//   setCartItems: React.Dispatch<React.SetStateAction<ICartItem[]>>;
//   handleIncreaseProductQty:(id:number)=>void
// };



// // Create context with initial empty shape
// const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);



//      export const useShoppingCartContext=()=>{
//     return useContext(ShoppingCartContext)
// }






// // Component name must start with an uppercase letter
// export function ShoppingCartProvider({ children }: ShoppingCartContextProps) {
//   const [cartItems, setCartItems] = useState<ICartItem[]>([]);
 
//   const handleIncreaseProductQty=(id:number)=>{
//   setCartItems((currentItem)=>{
//     const isNotProductExist=currentItem.find((item)=>item.id==id)==null;

// if (isNotProductExist) {
//  return [...currentItem,{id:id, qty:1}]
// }else{ 
//   return currentItem.map((item)=>{
//     if (item.id==id) {
//      return {...item,id:id,qty:item.qty+1}
//     }else{
//       return item;
//     }
//   })
// }
//   })
  
//   }

//   return (
//     <ShoppingCartContext.Provider value={{ cartItems, setCartItems ,handleIncreaseProductQty}}>
//       {children}
//     </ShoppingCartContext.Provider>
//   );
// }

// export default ShoppingCartContext;

// 'use client';

// import { createContext, useState, ReactNode, useContext } from 'react';

// // Define the type for each cart item
// type ICartItem = {
//   id: number;
//   qty: number;
// };

// // Props for the provider
// type ShoppingCartContextProps = {
//   children: ReactNode;
// };

// // Define the context shape
// type ShoppingCartContextType = {
//   cartItems: ICartItem[];
//   setCartItems: React.Dispatch<React.SetStateAction<ICartItem[]>>;
//   handleIncreaseProductQty: (id: number) => void;
// };

// // Create context with an initial empty shape
// const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

// // Custom hook to use shopping cart context
// export const useShoppingCartContext = () => {
//   return useContext(ShoppingCartContext);
// };

// // Component name must start with an uppercase letter
// export function ShoppingCartProvider({ children }: ShoppingCartContextProps) {
//   const [cartItems, setCartItems] = useState<ICartItem[]>([]);

//   const handleIncreaseProductQty = (id: number) => {
//     setCartItems((currentItems) => {
//       const productExists = currentItems.find((item) => item.id === id);

//       if (!productExists) {
//         return [...currentItems, { id, qty: 1 }];
//       } else {
//         return currentItems.map((item) =>
//           item.id === id ? { ...item, qty: item.qty + 1 } : item
//         );
//       }
//     });
//   };

//   return (
//     <ShoppingCartContext.Provider value={{ cartItems, setCartItems, handleIncreaseProductQty }}>
//       {children}
//     </ShoppingCartContext.Provider>
//   );
// }

// export default ShoppingCartContext;
'use client';

import { createContext, useState, ReactNode, useContext, useEffect } from 'react';

// Define the type for each cart item
type ICartItem = {
  id: number;
  qty: number;
};

// Props for the provider
type ShoppingCartContextProps = {
  children: ReactNode;
};

// Define the context shape
type ShoppingCartContextType = {
  cartItems: ICartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<ICartItem[]>>;
  handleIncreaseProductQty: (id: number) => void;
  getProductsQty:(id:number)=>number;
  cartTotalQty:()=>number;
  deleteFromCart:(id:number)=>void
  handleDecreaseProductQty:(id:number)=>number
};

// Create context with an initial empty shape
const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

// Custom hook to use shopping cart context
export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext);

  // If context is not provided, throw an error
  if (!context) {
    throw new Error('useShoppingCartContext must be used within a ShoppingCartProvider');
  }

  return context;
};

// Component name must start with an uppercase letter
export function ShoppingCartProvider({ children }: ShoppingCartContextProps) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  // Function to handle increasing product quantity
  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const productExists = currentItems.find((item) => item.id === id);

      if (!productExists) {
        return [...currentItems, { id, qty: 1 }];
      } else {
        return currentItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
    });
  };


  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const isLastOne = currentItems.find((item) => item.id === id)?.qty === 1;
      
      if (isLastOne) {
        // If quantity is 1, remove the item from the cart
        return currentItems.filter((item) => item.id !== id);
      } else {
        // Decrease the quantity of the item
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
//delete cart


const deleteFromCart = (id: number) => {
  setCartItems((currentItems) => {
    return currentItems.filter(item => item.id !== id);
  });
};





   
 const getProductsQty=(id:number)=>{
  return cartItems.find(item=>item.id==id)?.qty||0 
  }



  
  const cartTotalQty = () => {
    return cartItems.reduce((total, item) => total + item.qty, 0);
  };


  //loading page every time the user enter the page
useEffect(() => {
  const storedCartItems=localStorage.getItem("cartItems")
  if (storedCartItems) {
    setCartItems(JSON.parse(storedCartItems))
  }
 
}, []);


 //set
useEffect(() => {
  
  localStorage.setItem("cartItems",JSON.stringify(cartItems))
}, [cartItems]);




  return (
    <ShoppingCartContext.Provider value={{ cartItems, setCartItems, handleIncreaseProductQty,getProductsQty ,cartTotalQty,handleDecreaseProductQty,deleteFromCart}}>

      {children}
      </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
