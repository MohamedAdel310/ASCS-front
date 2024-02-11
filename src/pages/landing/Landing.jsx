import React from 'react';
import './landing.css';
import './about.css';
import Contact from './contact-us';
import About from './about-us';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div>
      <div className="background-image">
        <div className="landing">
          <div className="hand-animation"></div>
          <h1 className="header">
            AI surveillance
            <br />
            camera system
          </h1>

          <nav className="nav">
            <div className="logo">
              <img src="/public/myaz.png" alt="myaz logo" />
              <span>MYAZ</span>
            </div>

            <div className="login">
              <Link to="/login">Login</Link>
            </div>
          </nav>

          <a href="#contact" className="go-down">
            <FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <Contact />
      <About />
    </div>
  );
}
