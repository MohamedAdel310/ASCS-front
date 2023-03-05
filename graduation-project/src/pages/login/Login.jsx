import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form action="#">
          <h1>Create an account</h1>
          <div className="social-container">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
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
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <span>login to your account</span>
          <input type="email" placeholder="ُEmail" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forget Your Password?</a>
          <button>
            <a href="./brance.html">Sign In</a>
          </button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Have already account?</h1>
            <p>To Keep connect with us please login with your account</p>
            <button id="signIn" className="ghost">
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Create Account</h1>
            <p>Enter your personal detail and start journey with us</p>
            <button id="signUp" className="ghost">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
