import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook ,faTwitter ,faInstagram ,faLinkedin } from "@fortawesome/free-brands-svg-icons";


let inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


export default function Contact() {
  return (
    <div class="contact" id="contact">
      <div class="container">
        <span class="big-circle"></span>
        <img src="img/shape.png" class="square" alt="" />
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div class="info">
              <div class="information">
                <img src="img/location.png" class="icon" alt="" />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div class="information">
                <img src="img/email.png" class="icon" alt="" />
                <p>lorem@ipsum.com</p>
              </div>
              <div class="information">
                <img src="img/phone.png" class="icon" alt="" />
                <p>123-456-789</p>
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
