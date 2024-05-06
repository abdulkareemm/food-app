import React, { useState } from 'react'
import { Header, Menu, FoodDisplay, Download } from "../components";

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div >
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category = {category}/>
      <Download/>
    </div>
  )
}

export default Home