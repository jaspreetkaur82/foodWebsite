import React from 'react';
import "./Table.css";

function Table() {
  return (
    <div>
  <h1 className="text-center text-danger fs-4 my-3">Book a Table</h1>
  <h1 className="text-center text-black fs-4 my-3">Book Your <span className="text-danger">Stay With Us</span></h1>
  <div className="parent4 mx-5">
    <div className="container5">
      <div className="img1">
        <img src="https://www.sheinterior.com.sg/wp-content/uploads/2023/05/6399f785bf3ea32a196ccad5_market-house_Website-Header-1-scaled.jpeg" alt className="image2 mx-5 " />  </div>
      <div className="form mx-5">
        <input type="your Name" id="name" placeholder="Your name" name="name" className="form1" />
        <input type="email" id="name" placeholder="Your Email" name="email" className="form1" />
        <input type="number" id="name" placeholder="Your phone" name="number" className="form1" /><br></br>
        <input type="dob" id="date" placeholder="date" name="date" className="form3" />
        <input type="time" id="name" placeholder="time" name="time" className="form3" />
        <input type="people" id="people" placeholder="#of people" name="people" className="form3" />
        <br /><br />
        <input type="message" id="message" placeholder="Message" name="message" className="form2" />
        <br /><br />
        <button className="button">book a Table</button>
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
  );
}

export default Table;
