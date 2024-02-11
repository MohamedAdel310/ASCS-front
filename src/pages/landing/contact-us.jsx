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
    <div class="contact" id="contact">
      <div class="container">
        <span class="big-circle"></span>
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>
            <p class="text">
              We would love to hear from you! If you have any questions,
              feedback, or inquiries, please don't hesitate to get in touch with
              us. Our dedicated team is here to assist you and provide the
              information you need.
            </p>

            <div class="info">
              <div class="information" style={contactStyle}>
                <img src="/image/location.png" class="icon" alt="" />
                <p>Cairo</p>
              </div>
              <div class="information" style={contactStyle}>
                <img src="/image/email.png" class="icon" alt="" />
                <p>MohamedAdelElbeak@gmail.com</p>
              </div>
              <div class="information" style={contactStyle}>
                <img src="/image/phone.png" class="icon" alt="" />
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
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form action="index.html" autocomplete="off">
              <h3 class="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label for="">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label for="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label for="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label for="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
