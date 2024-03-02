import React, { useState } from 'react';
import styles from './login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Navigate } from 'react-router-dom';
import loginRequest from '../../api/postLogin';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function Login() {
  const [userLogin, setUserLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBoxRight, setIsBoxRight] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData);
    loginRequest(payload, setUserLogin, setIsLoading);
  }

  return (
    <div className={styles.page}>
      <div
        className={`${styles.container} ${isBoxRight ? '' : styles.rightPanel}`}
        id="login-page"
      >
        <div className={`${styles.form} ${styles.signUp} signUp`}>
          <form onSubmit={(e) => e.preventDefault()}>
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
        <div className={`${styles.form} ${styles.signIn} signIn`}>
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <Social />
            <span>login to your account</span>
            <input name="email" type="email" placeholder="Email" required />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <a href="/forget">Forget Your Password?</a>
            <button type="submit" disabled={isLoading}>
              {isLoading ? <LoadingSpinner /> : 'Sign In'}
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
    <div className={styles.social}>
      <a href="/facebook">
        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
      </a>
      <a href="/instagram">
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
      </a>
      <a href="/twitter">
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
      </a>
    </div>
  );
}

function MovingBox({ setIsBoxRight }) {
  return (
    <div className={styles.loginOverlayContainer}>
      <div className={styles.loginOverlay}>
        <LeftBox setIsBoxRight={setIsBoxRight} />
        <RightBox setIsBoxRight={setIsBoxRight} />
      </div>
    </div>
  );
}

function LeftBox({ setIsBoxRight }) {
  return (
    <div className={`${styles.panel} left`}>
      <h1>Have already account?</h1>
      <p>To Keep connect with us please login with your account</p>
      <button
        id="signIn"
        className={styles.ghost}
        onClick={() => setIsBoxRight((val) => !val)}
      >
        Sign In
      </button>
    </div>
  );
}
function RightBox({ setIsBoxRight }) {
  return (
    <div className={`${styles.panel} right`}>
      <h1>Create Account</h1>
      <p>Enter your personal detail and start journey with us</p>
      <button
        id="signUp"
        className={styles.ghost}
        onClick={() => setIsBoxRight((val) => !val)}
      >
        Sign Up
      </button>
    </div>
  );
}
