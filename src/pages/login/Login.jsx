import React, { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Navigate } from 'react-router-dom';
import loginRequest from '../../api/postLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLogin, setUserLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBoxRight, setIsBoxRight] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    loginRequest({ email, password }, setUserLogin, setIsLoading);
  }

  return (
    <div className="login-home">
      <div
        className={`login-page ${isBoxRight ? '' : 'right-panel-action'}`}
        id="login-page"
      >
        <div className="form-container sign-up">
          <form action="#">
            <h1>Create an account</h1>
            <Social />
            <span>use your email for register</span>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <br />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <Social />
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
            <button type="submit" disabled={isLoading}>
              Sign In
            </button>
          </form>
        </div>
        {userLogin && <Navigate to={'/application/dashboard'} />}
        <MovingBox setIsBoxRight={setIsBoxRight} />
      </div>
    </div>
  );
}

function Social() {
  return (
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
  );
}

function MovingBox({ setIsBoxRight }) {
  return (
    <div className="login-overlay-container">
      <div className="login-overlay">
        <LeftBox setIsBoxRight={setIsBoxRight} />
        <RightBox setIsBoxRight={setIsBoxRight} />
      </div>
    </div>
  );
}

function LeftBox({ setIsBoxRight }) {
  return (
    <div className="login-overlay-panel left">
      <h1>Have already account?</h1>
      <p>To Keep connect with us please login with your account</p>
      <button
        id="signIn"
        className="ghost"
        onClick={() => setIsBoxRight((val) => !val)}
      >
        Sign In
      </button>
    </div>
  );
}
function RightBox({ setIsBoxRight }) {
  return (
    <div className="login-overlay-panel right">
      <h1>Create Account</h1>
      <p>Enter your personal detail and start journey with us</p>
      <button
        id="signUp"
        className="ghost"
        onClick={() => setIsBoxRight((val) => !val)}
      >
        Sign Up
      </button>
    </div>
  );
}
