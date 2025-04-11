import React from 'react'
import './About.css'

function About() {
  return (
    <div>
  <div>
    <h1 className="head text-center my-5 text-danger fs-3">About Us</h1>
    <div className="parent">
      <div className="img1">
        <img src="https://thumbs.dreamstime.com/b/elegant-table-setting-restaurant-interior-elegant-table-setting-restaurant-interior-257717004.jpg" alt className="image mx-3 my-3" />  </div>
         <div>
        <p className="fs-5 my-4 para2"> <i className="fa-solid fa-circle-check text-danger mx-2" />Welcome to our website, your all-in-one solution for seamless and efficient restaurant management. Our system is designed to streamline every aspect of restaurant operations, from order management and inventory tracking to staff scheduling and customer feedback.</p>
        <p className="fs-5 my-4 para2"><i className="fa-solid fa-circle-check text-danger mx-2" />we aim to empower restaurants of all sizes with cutting-edge technology that simplifies daily operations, enhances customer satisfaction, and drives profitability. We understand the fast-paced nature of the food service industry and have built a solution tailored to meet those dynamic needs.</p>
        <p className="fs-5 my-4 para2"><i className="fa-solid fa-circle-check text-danger mx-2" /> our vision is to revolutionize the restaurant industry by providing cutting-edge technology that simplifies complex processes. We believe restaurants should focus on delivering great food and memorable experiences, while we handle the backend operations with smart automation and real-time insights.</p>     
        <p className="fs-5 my-4 para2"><i className="fa-solid fa-circle-check text-danger mx-2" />your smart and reliable partner in modern restaurant operations. Designed with innovation and efficiency in mind, DelishTrack helps restaurant owners and managers seamlessly manage daily operations, enhance customer service, and boost profitability, all in one intuitive platform.</p>
        
      </div>
    </div>
  </div>
  <h2 className=" text-center text-danger fs-4">Why Us</h2>
  <h2 className="h2 text-center text-dark fs-3 ">Why choose <span className="text-danger "> Our Restaurant</span></h2>
  <div className="flex d-flex my-5 ">
    <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: '18rem'}}>
      <div className="card-body my-2 ">
        <h5 className="card-title1 "> <i className="fa-solid fa-square-check  text-danger mx-1" />User-Friendly Interface</h5>
        <p className="card-text1 my-3 ">Easy to learn and use, even for non-technical staff.</p>
      </div>
    </div>
    <div className="card  text-center shadow p-3 mb-5 bg-body rounded" style={{width: '18rem'}}>
      <div className="card-body my-2">
        <h5 className="card-title1 "> <i className="fa-solid fa-square-check  text-danger mx-1" />Customizable &amp; Scalable</h5>
        <p className="card-text1 my-3 ">Adapt the system to match your restaurant's unique workflow.</p>
      </div>
    </div>
    <div className="card text shadow p-3 mb-5 bg-body rounded" style={{width: '18rem'}}>
      <div className="card-body my-2">
        <h5 className="card-title1 "> <i className="fa-solid fa-square-check  text-danger mx-1" />Secure &amp; Reliable</h5>
        <p className="card-text1 my-3 ">We prioritize your data security and system reliability.</p>
      </div>
    </div>
  </div>
  <footer style={{ width: "100%", height: 400, backgroundColor: "black", color: "white" }}>
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
      </footer>
  </div>
  
  )
}


export default About
