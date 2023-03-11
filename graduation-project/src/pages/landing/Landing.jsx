import React from "react";
// import "./landing.css";

export default function Landing() {
  return (
    <div className="main">
      <div className="box1"></div>
      <div className="box2">
        <div className="text1">
          AI surveillance
          <br />
          camera system
        </div>
      </div>
      <div className="box3">
        <div className="container">
          <div className="menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li className="login">
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a href="#contact" className="go-down">
        <i className="fas fa-angle-double-down fa-2x"></i>
      </a>
      <script src="../app.js"></script>
    </div>
  );
}
