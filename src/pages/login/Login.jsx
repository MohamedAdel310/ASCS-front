import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [containerClass, setContainerClass] = useState("login-page");

  const handleAddClass = () => {
    setContainerClass("login-page right-panel-action");
  };

  const handleRemoveClass = () => {
    setContainerClass("login-page");
  };

  return (
    <div className="login-home">
      <div class={containerClass} id="login-page">
        <div class="form-container sign-up">
          <form action="#">
            <h1>Create an account</h1>
            <div class="social-container">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-google"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
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
        <div class="form-container sign-in">
          <form action="#">
            <h1>Sign in</h1>
            <div class="social-container">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-google"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
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
        <div class="login-overlay-container">
          <div class="login-overlay">
            <div class="login-overlay-panel login-overlay-left">
              <h1>Have already account?</h1>
              <p>To Keep connect with us please login with your account</p>
              <button id="signIn" class="ghost" onClick={handleRemoveClass}>
                Sign In
              </button>
            </div>
            <div class="login-overlay-panel login-overlay-right">
              <h1>Create Account</h1>
              <p>Enter your personal detail and start journey with us</p>
              <button id="signUp" class="ghost" onClick={handleAddClass}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
