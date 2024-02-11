import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const contactStyle = {
  display: 'flex',
  gap: '3px',
  alignItems: 'center',
};

export default function Contact() {
  return (
    <div class="container">
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            We would love to hear from you! If you have any questions, feedback,
            or inquiries, please don't hesitate to get in touch with us. Our
            dedicated team is here to assist you and provide the information you
            need.
          </p>

          <div class="info">
            <div style={contactStyle}>
              <img src="/image/location.png" alt="location" />
              <p>Cairo</p>
            </div>
            <div style={contactStyle}>
              <img src="/image/email.png" alt="email" />
              <p>MohamedAdelElbeak@gmail.com</p>
            </div>
            <div style={contactStyle}>
              <img src="/image/phone.png" alt="phone" />
              <p>01553014091</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <h3 class="title">Contact us</h3>
            <div className="formInputs">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Username"
              />
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <input
                type="tel"
                name="phone"
                className="input"
                placeholder="Phone"
              />
              <textarea
                name="message"
                className="input"
                placeholder="Message"
              ></textarea>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}
