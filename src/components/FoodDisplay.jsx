import React from 'react'
import { useStoreContext } from "../context/Store";


const FoodDisplay = () => {
    const contextValue = useStoreContext();
  return (
    <div>FoodDisplay</div>
  )
}

export default FoodDisplay