import React from 'react';
import style from './ContactUs.module.css';
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
    <div className={style.contact}>
      <div className={style.form}>
        <div className={style.contactInfo}>
          <h3 className={style.title}>Let's get in touch</h3>
          <p className={style.text}>
            We would love to hear from you! If you have any questions, feedback,
            or inquiries, please don't hesitate to get in touch with us. Our
            dedicated team is here to assist you and provide the information you
            need.
          </p>

          <div className={style.info}>
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

          <div className={style.socialMedia}>
            <p>Connect with us :</p>
            <div className={style.socialIcons}>
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

        <div className={style.contactForm}>
          <form onSubmit={(e) => e.preventDefault()}>
            <h3 className={style.title}>Contact us</h3>
            <div className={style.formInputs}>
              <input
                type="text"
                name="name"
                className={style.input}
                placeholder="Username"
              />
              <input
                type="email"
                name="email"
                className={style.input}
                placeholder="Email"
              />
              <input
                type="tel"
                name="phone"
                className={style.input}
                placeholder="Phone"
              />
              <textarea
                name="message"
                className={style.input}
                placeholder="Message"
              ></textarea>
            </div>
            <input type="submit" value="Send" className={style.btn} />
          </form>
        </div>
      </div>
    </div>
  );
}
