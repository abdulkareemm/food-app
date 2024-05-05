import React, { useState } from 'react'
import { Header, Menu, FoodDisplay } from "../components";

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div >
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category = {category}/>
    </div>
  )
}

export default Home