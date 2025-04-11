import React from 'react'
import "./Gallery.css"

function Gallery() {
  return (
<div>
<div>
  <h1 className="text-center text-danger fs-4 my-4">Gallery</h1>
  <h1 className="text-center  fs-4 my-4">Some photos fr<span className="text-danger">om Our Restaurant</span></h1>
  <div className="gallery-container">
    <div className="gallery-item"><img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-1.jpg" alt /></div>
      <div className="gallery-item"><img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-2.jpg" alt /></div>
    <div className="gallery-item"><img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-6.jpg" alt /></div>
    <div className="gallery-item"><img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-7.jpg" alt /></div>
    <div className="gallery-item"><img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-8.jpg" alt /></div>
    <div className="gallery-item"><img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-4.jpg" alt /></div>
    <div className="gallery-item"><img src="https://images.getbento.com/accounts/19fcad6c1fd057f294461dacf26ebe27/media/images/82641Oceanaire_NightDiningRoom2.jpg?fit=max&w=1800&auto=format,compress" alt="Special Dessert" /></div>
    <div className="gallery-item"><img src="https://hips.hearstapps.com/vidthumb/images/hb-eataly-5-1555018689.jpg?crop=1.00xw:1.00xh;0,0" alt /></div>
    <div className="gallery-item"><img src="https://th.bing.com/th/id/OIP.Cl_5Jp99SFiVcA2qRrghbAHaFt?rs=1&pid=ImgDetMain" alt /></div>
    <div className="gallery-item"><img src="https://bootstrapmade.com/content/demo/Restaurantly/assets/img/events-slider/events-slider-3.jpg" alt /></div>
    <div className="gallery-item"><img src="https://th.bing.com/th/id/OIP.vZcT0QuxSiXT0cLShleu2wHaE8?w=999&h=666&rs=1&pid=ImgDetMain" alt /></div>
    <div className="gallery-item"><img src="https://th.bing.com/th/id/OIP.t0g7XZNVGdola050_1P3CgHaFj?rs=1&pid=ImgDetMain" alt /></div>

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

export default Gallery