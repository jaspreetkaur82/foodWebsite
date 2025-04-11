import React from "react";
import "./Special.css";

function Special(){
  


  return (
    <div>
      <header className="header text-center">
  <h1 className="fs-3 text-danger my-3 ">Today's Specials</h1>
  <p className="fs-5 text-dark">Enjoy our exclusive limited-time dishes, freshly prepared for you!</p>
</header>

  <div className="parent1 ">
    <div className="image4 ">
      <img src="https://themewagon.github.io/dingo/img/food_menu/single_food_4.png" alt className="image1  my-3" />  </div>
    <div className="card w-65 mb-3 my-3 shadow   bg-body rounded">
      <div className="card-body">
        <h5 className="card-title">Easter Delight </h5>
        <p className="card-text">Fresh mixed greens, cherry tomatoes, feta cheese nd a tangy balsamic . <span style={{color: 'red', fontSize: 16}}>Price:300</span></p>
      
          
      </div>
    </div>
    <div className="image4   ">
      <img src="https://themewagon.github.io/dingo/img/food_menu/single_food_1.png" alt className="image1  my-3" />  </div>
    <div className="card w-65 mb-3 my-3  shadow   bg-body rounded">
      <div className="card-body">
        <h5 className="card-title">Pork Sandwich </h5>
        <p className="card-text">Uttery and golden brown, providing the perfect base.<br /> <span style={{color: 'red', fontSize: 16}}>Price:200</span></p>
      </div>
    </div>
  </div>
  <div className="parent1 ">
    <div className="image4 ">
      <img src="https://themewagon.github.io/dingo/img/food_menu/single_food_2.png" alt className="image1  my-3" />  </div>
    <div className="card w-65 mb-3 my-3 shadow   bg-body rounded">
      <div className="card-body">
        <h5 className="card-title">Roasted Marrow </h5>
        <p className="card-text"> Infused with fresh rosemary, thyme, and roasted garlic and garlic.<br /> <span style={{color: 'red', fontSize: 16}}>Price:250</span></p>
      </div>
    </div>
    <div className="image4   ">
      <img src="https://littlespicejar.com/wp-content/uploads/2019/06/Marinated-Feta-Greek-Salad-9.jpg" alt className="image1  my-3" />  </div>
    <div className="card w-65 mb-3 my-3  shadow   bg-body rounded">
      <div className="card-body">
        <h5 className="card-title">Greek Feta Salad </h5>
        <p className="card-text">A refreshing mix of crisp lettuce, olives, cherry tomatoes, cucumbers.<br /> <span style={{color: 'red', fontSize: 16}}>Price:200</span></p>
      </div>
    </div>
  </div>
  <div className="parent1 ">
    <div className="image4 ">
      <img src="https://www.foodnetwork.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg" alt className="image1  my-3" />  </div>
    <div className="card w-65 mb-3 my-3 shadow   bg-body rounded">
      <div className="card-body">
        <h5 className="card-title">Chocolate Lava Cake</h5>
        <p className="card-text">A rich and decadent chocolate cake with a molten lava center.<br></br> <span style={{color: 'red', fontSize: 16}}>Price:250</span></p>
      </div>
    </div>
    <div className="image4   ">
      <img src="https://th.bing.com/th/id/OIP.b-2SONuuzjZpTOL6CYyQdgHaE7?w=800&h=533&rs=1&pid=ImgDetMain" alt className="image1  my-3" />  </div>
    <div className="card w-65 mb-3 my-3  shadow   bg-body rounded">
      <div className="card-body">
        <h5 className="card-title">Truffle Risotto</h5>
        <p className="card-text">Creamy arborio rice risotto infused with black truffle oil.<br /> <span style={{color: 'red', fontSize: 16}}>Price:200</span></p>
      </div>
    </div>
  </div>
    {/* Footer Section */}
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

export default Special;
