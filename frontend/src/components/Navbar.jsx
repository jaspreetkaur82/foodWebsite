import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark">
  <div className="container-fluid">
    <Link to ="/"className="navbar-brand  text-white mx-4 fs-2" >Delicious<span className="text-danger"> Bites</span></Link>  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
        <li className="nav-item">
          <Link className="nav-link active text-white " aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="./About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="./Menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="./Special">Specials</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="./Event">Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="./Gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="./Chef">Chefs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="./Contact">Contact</Link>
        </li>
      </ul>
      
          <div className="absolute6 ">
        <Link to="/Login" target="_blank" rel="noopener noreferrer">
  <button type="button" className="btn btn-danger g-4">Login</button></Link>

</div>
          
          
          

          
      
    
  

    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar
