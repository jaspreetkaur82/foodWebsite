import React from 'react'
import "./Event.css";

function Event() {
  const handleBooking = () => {
    alert("Thank you for your interest! Booking feature coming soon.");
  };

    
  return (
    <div>
  <h1 className="text-center text-danger fs-4 my-4">Upcoming Events</h1>
  <div className="event-container my-5">
    <div className="event-card ">
      <img src="https://www.treebo.com/blog/wp-content/uploads/2017/11/Webp.net-compress-image-7.jpg" alt />
      <h3>Live Music Night</h3>
      <p>Enjoy a night of amazing food and live jazz music.Join us for an exclusive Live Music Night where you can enjoy soulful melodies, delicious cuisine, and a vibrant atmosphere.

</p>
    
      <button className="book-btn"onClick={handleBooking}>Book Now</button>
    </div>
    <div className="event-card ">
      <img src="https://thumbs.dreamstime.com/z/birthday-cake-wallpaper-hd-ai-genertaed-images-birthday-cake-wallpaper-hd-ai-genertaed-images-party-dessert-birthday-treat-cake-292794519.jpg" alt="Wine Tasting" />
      <h3>Birthday Parties </h3>
      <p>Celebrate your special day with us and make it a memorable and joyful experience! Whether you're planning an intimate gathering   .</p> <button className="book-btn" onClick={handleBooking}>Book Now</button>
    </div>
    <div className="event-card fs-6">
      <img src="https://bootstrapmade.com/content/demo/Restaurantly/assets/img/events-slider/events-slider-3.jpg" alt />
      <h3>Custom Parties</h3>
      <p> anniversary celebration, corporate gathering, or a private dinner, we ensure an extraordinary experience with delicious food, stunning decor, and top-notch service.</p>
       <button className="book-btn" onClick={handleBooking}>Book Now</button>
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

export default Event