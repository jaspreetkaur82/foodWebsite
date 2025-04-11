import React from 'react'
import "./Chef.css"
function Chefs() {
  return (
    <div>
  <h2 className="text-center text-danger fs-4 my-3">Meet Our Expert Chefs</h2>
  <p className="text-center fs-5 my-3">Meet our world-class chefs who bring passion and expertise to every dish. Our team is dedicated to creating exceptional culinary experiences for you!</p>
  <div className="parent2">
    <div className="container2 ">
      <img src="https://themewagon.github.io/dingo/img/team/chefs_1.png" className="image6" />
      <h6 className="fs-4">Adam Billiard</h6>
    </div>
    <div className="container2">
      <img src="https://themewagon.github.io/dingo/img/team/chefs_2.png" className="image6" />
      <h6 className="fs-4">Fred Macyard</h6>
    </div>
    <div className="container2">
      <img src="https://themewagon.github.io/dingo/img/team/chefs_3.png" className="image6" />
      <h6 className="fs-4">Justin Stuard
      </h6>
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


export default Chefs
