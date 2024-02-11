import './about.css';
import style from './Landing.module.css';
import Contact from './ContactUs';
import About from './about-us';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div>
      <Main />
      <Contact />
      <About />
    </div>
  );
}

function Main() {
  return (
    <div className={style.backgroundImage}>
      <div className={style.landing}>
        <div className={style.handAnimation}></div>
        <h1 className={style.header}>
          AI surveillance
          <br />
          camera system
        </h1>

        <nav className={style.nav}>
          <div className={style.logo}>
            <img src="/public/myaz.png" alt="myaz" logo />
            <span>MYAZ</span>
          </div>

          <div className={style.login}>
            <Link to="/login">Login</Link>
          </div>
        </nav>

        <a href="#contact" className={style.goDown}>
          <FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
}
