import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Menu() {
  const [menu, setMenu] = useState([]);

  

  useEffect(()=>{
    fetchProduct()

  },[])

  console.log(menu)
  console.log("say my name");

  return (
    <div>
     
    </div>
  );
}

export default Menu;
