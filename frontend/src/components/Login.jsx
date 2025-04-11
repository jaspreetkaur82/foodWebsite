import React from 'react'
import "./Login.css"

function Login() {
  return (
<div>
  <img className='banner-image' src="/public/menu.jpg"  alt="..." />
        
<div className="absolute9">
    <div class="login">
    
       <div className="login-container">
       <h1 className="h1">Login</h1>
  
  <form id="loginForm">
    <div className="input-group">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" required />
    </div>
    <div className="input-group">
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" required />
    </div>
    <button style={{width:"250px", color:"white",backgroundColor:"red",border:"none",borderRadius:"20px",fontSize:"20px",}}> Login</button>
    <p className="register">Don't have an account? <a href="./sign">Register</a></p>
  </form>

</div>
</div>
{/* <footer style={{ width: "100%", height: 400, backgroundColor: "black", color: "white" }}>
        <div className="contaner mx-5">
          <div className="row">
            <div className="col my-5">
              <h2 className="fs-5 text-white">About Orbit</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="parent1 my-5">
                <h3 className="fs-5">Connect</h3>
                <i className="fa-brands fa-facebook mx-1 my-1" />
                <i className="fa-brands fa-square-instagram mx-1 my-1" />
                <i className="fa-brands fa-linkedin mx-1 my-1" />
                <i className="fa-brands fa-square-twitter mx-1 my-1" />
              </div>
            </div>
            <div className="col my-5">
              <h2 className="text-white fs-5">
                <i className="fa-solid fa-location-dot mx-2" /> Address
              </h2>
              <p className="text-white">
                A108 Adam Street <br /> New York, NY 535022
              </p>
            </div>
            <div className="col my-5">
              <h1 className="fs-5">
                <i className="fa-solid fa-clock mx-2" /> Opening Hours
              </h1>
              <p className="text-white">Monday - Friday: 9:00 AM - 10:00 PM</p>
              <p className="text-white">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
            <div className="col my-5">
            <h1 className="fs-5">
                <i className="fa-solid fa-clock mx-2" /> Contact
              </h1>
              <p className="text-white">43 Raymouth Rd. Baltemoer, London 3910</p>
              <p className="text-white">+1 5589 55488 55</p>
              <p className="text-white">info@example.com</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>Copyright © 2025 Delicious Bites | All Rights Reserved</p>
          </div>
        </div>
      </footer> */}
    
</div>
</div>



  )
}

export default Login