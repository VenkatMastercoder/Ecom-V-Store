/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Create a Card Context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [{},{},{},{}]

  // const addItemsToCart = (newItem) => {
  //   // setCart((prev) => [...prev, newItem]);
  //   setCart([...cart, newItem]);
  // };

  const addItemsToCart = (newItem) => {
    setCart((prevCart) => {
      // Check if Prev Items there in the Cart
      const existingItems = prevCart.findIndex((items) => items.id === newItem.id);

      console.log("existingItems:",existingItems)

      if(existingItems !== -1) {
        
        // If Items Exits, Update the Quantity for that Items 
        return prevCart.map((itemss,index)=>{
          console.log("Index:",index)
          if(index === existingItems) {
            return {
              ...itemss,
              quantity: (itemss.quantity || 1) + 1
            }
          }
          return itemss
        })
      }

      // if Items Does Not Exits
      return [...prevCart, newItem ];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItemsFromCart = (itemsId) => {
    const updatedCart = cart.filter((items) => {
      return items.id !== itemsId;
    });
    setCart(updatedCart);
  };

  const updateCartQuantity = (itemsId, newQuantity) => {
    const updatedCart = cart.map((items) => {
      if (itemsId === items.id) {
        return { ...items, quantity: newQuantity };
      }
      return items;
    });

    setCart(updatedCart);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          addItemsToCart,
          clearCart,
          removeItemsFromCart,
          updateCartQuantity,
        }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
