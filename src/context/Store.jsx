import React, { createContext, useContext, useState } from "react";
import { food_list } from "../assets/assets";

// Create a context
export const StoreContext = createContext(null);

// Create a provider component
const StoreContextProvider = ({ children }) => {
  // Your state or any other logic here
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 1)
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    else {
      delete cartItems[itemId]
      setCartItems({...cartItems});
    }
  };
  const value = {
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreContextProvider, useStoreContext };
