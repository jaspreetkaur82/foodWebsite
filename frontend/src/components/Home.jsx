import React from 'react'
import "./Home.css"


function Home() {
  return (
   

    <div>
          

      <div id="carouselExampleFade" className="carousel slide carousel-fade mb-0" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/2019/10/29103100/Gaddis-LR-1920x1279.jpg" className="img" alt />
        <div className="absolute "> <h1 className="relativeheading  text-dark text-center ">Eat Healthy <span className="text-danger"> And Naturally</span></h1>  </div>
        <div className="absolute1"><p className="text-dark">Experience the finest flavors crafted with love and passion. Indulge in our carefully curated menu, featuring mouthwatering dishes made from the freshest ingredients.Beyond exceptional food, we offer a complete dining experience. Join us for our Live Music Nights every weekend.</p> 
        </div>
        <div className="absolute2 ">
        <a href="./Menu" target="_blank" rel="noopener noreferrer">
  <button type="button" className="btn btn-danger g-4"> Our  Menu</button>
</a>
</div>
<div className="absolute3 ">
<a href="./Table" target="_blank" rel="noopener noreferrer">
<button type="button" className="btn btn-danger g-4">Book Table</button>
</a>
  
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://www.cathaypacific.com/content/dam/focal-point/cx/inspiration/2020/10/Staycations_The-Peninsula_Gaddis-Interior_Med-res.renditionimage.900.900.jpg" className="img w-100" alt="..." />
        <div className="absolute  text-center"> <h1 className="relativeheading  text-dark ">So Tasty<span className="text-danger">  and Delicious Food </span></h1>  </div>
        <div className="absolute1"><p className="heading">we take pride in serving an array of delectable dishes, from sizzling appetizers to mouthwatering main courses and indulgent desserts. Our chefs bring years of expertise to your plate, ensuring every bite is a perfect harmony of taste and texture.</p> </div>       <div className="absolute2">
        </div>
        <div className="absolute2 ">
        <a href="./Menu" target="_blank" rel="noopener noreferrer">
  <button type="button" className="btn btn-danger g-4">Our Menu</button>
</a>
</div>
<div className="absolute3 ">
<a href="./Table" target="_blank" rel="noopener noreferrer">
  <button type="button" className="btn btn-danger g-4">Book Table</button>
</a>

        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      
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

)}

    

        

        
      
      
      

    
    


export default Home;
