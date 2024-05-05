import React, { createContext, useContext } from "react";
import {food_list} from "../assets/assets"

// Create a context
export const StoreContext = createContext(null);

// Create a provider component
const StoreContextProvider = ({ children }) => {
  // Your state or any other logic here
  const value = food_list;

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};


export  {StoreContextProvider,useStoreContext}
