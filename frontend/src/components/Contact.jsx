import React from 'react'
import "./Contact.css"

 function Contact() {
    
  return (

  <div>
    <h1 className="contact text-center text-danger  fs-4 my-3">Contact Us</h1>
    <div className="flex d-flex my-5 ">
      <div className="card  shadow p-3 mb-5 bg-body rounded" style={{width: 480, height: 200}}>
        <div className="card-body my-2 ">
          <h5 className="card-title fs-5 "><i className="fa-solid fa-location-dot mx-2 fs-4" />Address</h5>
          <p className="card-text my-3 fs-6">A108 Adam Street, New York, NY 535022</p>
        </div>
      </div>
      <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{width: '18rem'}}>
        <div className="card-body my-2">
          <h5 className="card-tite 1  fs-5"> <i className="fa-solid fa-phone mx-2" />Call us</h5>
          <p className="card-text1 my-3 fs-6">+1 5589 55488 55</p>
        </div>
      </div>
      <div className="card text shadow p-3 mb-5 bg-body rounded" style={{width: '18rem'}}>
        <div className="card-body my-2">
          <h5 className="card-title1 fs-5"> <i className="fa-solid fa-envelope mx-2" />Email Us</h5>
          <p className="card-tex my-3 fs-6">info@example.com</p>
        </div>
      </div>
    </div>
    <div className="flex d-flex my-5 ">
      <div className="card  shadow p-3 mb-5 bg-body rounded" style={{width: 500, height: 500}}>
        <div className="card-body my-2 ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.2312462919845!2d75.84796007485897!3d30.880191374513437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a825313ade647%3A0x8221aeeb0002f9ba!2sANSH%20InfoTech!5e0!3m2!1sen!2sin!4v1738905636094!5m2!1sen!2sin" width={400} height={400} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> </div>
      </div>
      <div className="card text-center shadow p-3 mb-5 bg-body rounded " style={{width: 600, height: 500}}>
        <div className="card-body">
          <form className="row g-4  p-3">
            <div className="col-md-6">
              <input type="text" className="form-control2 " placeholder="Your Name" id="input" />
            </div>
            <div className="col-md-6">
              <input type="password" className="form-control2" placeholder="Your Email" id="input" />
            </div>
            <div className="col-12">
              <input type="text" className="form-control3" placeholder="Subject" id="input" />
            </div>
            <div className="col-12">
              <input type="text" className="form-control1 " placeholder="Message" id="input" />
            </div>
            <div className="col-12"><br />
              <button type="submit " className="btn2  ">Send Message</button>
            </div>
          </form>
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
        </div></footer>
    </div>
  
  )     
  }
  export default Contact
  
