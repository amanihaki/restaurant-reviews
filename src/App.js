import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      {/*****  Container  *****/}

      <div className="container">
        <div className="main-title">
          <h1 className="text-bold">Made by Restaurant & Cafe Experts </h1>
          <p>
            We know restaurants and cafe back to front, and this is why we have
            simplified our model to allow restaruantreview.io to fit into a
            cafe/restaurant manager's busy schedule{" "}
          </p>
          <button type="submit">Book a Demo</button>
        </div>
        <div className="img-title">
          <img src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        </div>

        {/*****  Clients Section  *****/}
        <div className="clients">
          <p className="my-5">YOU'ARE IN GOOD COMPANY</p>
          <div className="company-logo">
            <img src={require("./client2.png")} />
            <img src={require("./client1.png")} />
          </div>
        </div>
        {/*****  Section three *****/}
        <div className="section-three">
          <div className="section-three-content">
            <h1>Feeling left out from quality custom feedback?</h1>
            <p>
              We capture in moments feedback directly from your venues and
              combine it with other touchpoints data letting you see the entire
              customer experience.
            </p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" />
          </div>
        </div>
        <div className="section-three features">
          <div className="feature-imgs">
            <img src="https://images.pexels.com/photos/3758023/pexels-photo-3758023.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
            <img src="https://images.pexels.com/photos/3662103/pexels-photo-3662103.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <img src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
            <img src="https://images.pexels.com/photos/3662136/pexels-photo-3662136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500s" />
            <img src="https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <img src="https://images.pexels.com/photos/3651611/pexels-photo-3651611.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <img src="https://images.pexels.com/photos/4871119/pexels-photo-4871119.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <img src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <img src="https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&d" />
          </div>
          <div className="section-three-content center">
            <h1>All your feedback in one place </h1>
            <p>
              You can see all your social media reviews and location-based
              customer feedback in one place
            </p>
          </div>
        </div>

        <div className="something">
          <h1>Analyse and improve every touch point </h1>
          <p>
            Understanding bottleneck and which parts of your operation need the
            most improvement is easy to see.
          </p>
        </div>
        <div className="something-imgs">
          <div className="img-wrapper">
            <img src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <p>Social</p>
          </div>
          <div className="img-wrapper">
            <img src="https://images.pexels.com/photos/4099100/pexels-photo-4099100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <p>In house</p>
          </div>
          <div className="img-wrapper">
            <img src="https://images.pexels.com/photos/4393444/pexels-photo-4393444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <p>Pickup/Delivery</p>
          </div>
        </div>
        <div className="img-title more-feature">
          <img src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        </div>
        <div className="img-title more-feature">
          <img src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        </div>

        <div className="something">
          <h1>Learn which menu items people want </h1>
          <p>
            By diving into your data, we can see what potential food menu items
            will become your best sellers
          </p>
        </div>
        <div className="img-title">
          <img src="https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        </div>
        <div className="section-three">
          <div className="section-three-content">
            <h1>NPS scores that drive growth and performance</h1>
            <p>
              Bench mark you NPS score against the industry average, and drive
              performance and competition between different store locations.
            </p>
          </div>
          <img src="https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        </div>
      </div>
      {/*****  /Container  *****/}

      <div className="img-title">
        <img src="https://images.unsplash.com/photo-1588413336302-40123f9ef556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />{" "}
      </div>

      {/*******  Sign Up Section  *******/}
      <div className="signup-section">
        <h1>Sign Up Today! </h1>
        <form>
          <div className="wrap-input">
            <input type="text" placeholder="Name company" />
            <input type="text" placeholder="Your name" />
          </div>
          <div className="wrap-input">
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Phone number" />
          </div>
          <div class="checkbox">
            <input type="checkbox" id="checkbox" name="" value="" />
            <label for="checkbox">
              <span>
                The goal is to facilitate usability and efficiency as much as
                possible. Common elements found in interface design are action
                buttons, text fields, check boxes, radio buttons and drop-down
                menus.
              </span>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/*******  /Sign Up Section  *******/}

      <Footer />
    </div>
  );
}

export default App;
