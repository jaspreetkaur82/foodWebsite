import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [menu,setMenu]=useState([])

  const fetchProduct=async()=>{
  
      let response=await axios.get("http://localhost:3000/api/products")
      console.log(response)
      setMenu(response.data.product)
  
    }


    useEffect(()=>{
      fetchProduct()

    },[])

    
  return (
    <div>
       <h1>React Api testing</h1>

       {menu.map((item,index)=>(
        <ul key={index}>
          <h1>{item.name}</h1>
          <h2>{item.description}</h2>
          <h3>{item.category}</h3>
          <img src={item.image} />

        </ul>
       ))}

       
    </div>
  )
}

export default App
