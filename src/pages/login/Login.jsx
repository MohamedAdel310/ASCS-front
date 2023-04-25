import React, { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  const [containerclass, setContainerclass] = useState("login-page");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleAddclass = () => {
    setContainerclass("login-page right-panel-action");
  };

  const handleRemoveclass = () => {
    setContainerclass("login-page");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://myaz.cyclic.app/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Login successful!");
          return response.json();
          // redirect to the user's dashboard or home page
        } else {
          console.error("Login failed.");
        }
      })
      .then((res) => {
        setToken(res.token);
        localStorage.setItem("token", res.token); // save token to local storage
        console.log(token);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="login-home">
      <div className={containerclass} id="login-page">
        <div className="form-container sign-up">
          <form action="#">
            <h1>Create an account</h1>
            <div className="social-container">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </a>
            </div>
            <span>use your email for register</span>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="ُEmail" required />
            <input type="password" placeholder="Password" required />
            <br />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </a>
            </div>
            <span>login to your account</span>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <a href="#">Forget Your Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="login-overlay-container">
          <div className="login-overlay">
            <div className="login-overlay-panel login-overlay-left">
              <h1>Have already account?</h1>
              <p>To Keep connect with us please login with your account</p>
              <button id="signIn" className="ghost" onClick={handleRemoveclass}>
                Sign In
              </button>
            </div>
            <div className="login-overlay-panel login-overlay-right">
              <h1>Create Account</h1>
              <p>Enter your personal detail and start journey with us</p>
              <button id="signUp" className="ghost" onClick={handleAddclass}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {token && (window.location.href = "/application")}
    </div>
  );
}
