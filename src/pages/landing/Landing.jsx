import React from "react";
import "./landing.css";
import Contact from "./contact-us";
import About from "./about-us";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export default function Landing() {
  return (
    <div>
      <div className="landing-image">
      <div className="landing">
          <div className="box1"></div>
            <div className="box2">
              <div className="text1">
                AI surveillance
                <br />
                camera system
              </div>
            </div>
            <div className="box3">
              <div className="logo--image">
                <img src="/public/myaz.png" alt="" />
                <span>MYAZ</span>
              </div>
              <div className="container">
                <div className="menu">
                  <ul>
                    <li>
                      <a href="#contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="#about-us">About Us</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li className="login">
                      <a href="/login">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="#contact" className="go-down">
              <FontAwesomeIcon icon={faAngleDoubleDown} ></FontAwesomeIcon>
            </a>
      </div>
      </div>
      <Contact />
      <About />
    </div>
  );
}
