import React from "react";
// import "./login.css";

export default function Login() {
  return (
    <div className="body-login">
      <div className="container-login" id="container-login">
        <div className="form-container-login sign-up">
          <form className="form-login" action="#">
            <h1 className="h1-login">Create an account</h1>
            <div className="social-container-login">
              <a className="a-login" href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a className="a-login" href="#">
                <i className="fab fa-google"></i>
              </a>
              <a className="a-login" href="#">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <span className="span-login">use your email for register</span>
            <input
              className="input-login"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="input-login"
              type="email"
              placeholder="ُEmail"
              required
            />
            <input
              className="input-login"
              type="password"
              placeholder="Password"
              required
            />
            <br />
            <button className="button-login">Sign Up</button>
          </form>
        </div>
        <div className="form-container-login sign-in">
          <form className="form-login" action="#">
            <h1 className="h1-login">Sign in</h1>
            <div className="social-container-login">
              <a className="a-login" href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a className="a-login" href="#">
                <i className="fab fa-google"></i>
              </a>
              <a className="a-login" href="#">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <span className="span-login">login to your account</span>
            <input
              className="input-login"
              type="email"
              placeholder="ُEmail"
              required
            />
            <input
              className="input-login"
              type="password"
              placeholder="Password"
              required
            />
            <a className="a-login" href="#">
              Forget Your Password?
            </a>
            <button className="button-login">
              <a className="a-login" href="/branch">
                Sign In
              </a>
            </button>
          </form>
        </div>
        <div className="overlay-container-login">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h1-login">Have already account?</h1>
              <p className="p-login">
                To Keep connect with us please login with your account
              </p>
              <button id="signIn" className="ghost button-login">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="h1-login">Create Account</h1>
              <p className="p-login">
                Enter your personal detail and start journey with us
              </p>
              <button id="signUp" className="ghost button-login">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
