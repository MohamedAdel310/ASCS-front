import React, { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const [containerclass, setContainerclass] = useState('login-page');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLogin, setUserLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [overlayPosition, setOverlayPosition] = useState('left');

  const handleAddclass = () => {
    setContainerclass('login-page right-panel-action');
  };

  const handleRemoveclass = () => {
    setContainerclass('login-page');
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch('https://myaz.cyclic.app/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const res = await response.json();

      if (res.status === 'fail') {
        return alert(res.message);
      }
      console.log(res);

      localStorage.setItem('token', res.token); // save token to local storage
      setUserLogin(true);
    } catch {
      alert('There is an error happened');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="login-home">
      <div className={containerclass} id="login-page">
        <div className="form-container sign-up">
          <form action="#">
            <h1>Create an account</h1>
            <Social />
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
        <OverLayContainer
          handleAddclass={handleAddclass}
          handleRemoveclass={handleRemoveclass}
        />
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

function OverLayContainer({ handleAddclass, handleRemoveclass }) {
  return (
    <div className="login-overlay-container">
      <div className="login-overlay">
        <div className="login-overlay-panel left">
          <h1>Have already account?</h1>
          <p>To Keep connect with us please login with your account</p>
          <button id="signIn" className="ghost" onClick={handleRemoveclass}>
            Sign In
          </button>
        </div>

        <div className="login-overlay-panel right">
          <h1>Create Account</h1>
          <p>Enter your personal detail and start journey with us</p>
          <button id="signUp" className="ghost" onClick={handleAddclass}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
