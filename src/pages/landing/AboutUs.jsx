import style from './AboutUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <div className={style.aboutImage}>
      <div className={style.about}>
        <div className={style.aboutContent}>
          <h1 className={style.title}>About Us</h1>
          <div className={style.content}>
            <h2 className={style.contentTitle}>
              AI surveillance camera system.
            </h2>
            <p className={style.contentText}>
              surveillance cameras have become ubiquitous, capturing a multitude
              of events throughout the day. Their widespread presence has
              significantly contributed to ensuring the safety of various public
              spaces, such as streets, city squares, hospitals, banks, and
              courts. As a result, the demand for video surveillance systems in
              these areas has been steadily rising, primarily driven by the
              objective of enhancing security. Given the paramount importance of
              safety and security, our focus has centered around three key tasks
              in this realm. Firstly, we prioritize the detection of personal
              protective equipment, ensuring that individuals adhere to safety
              guidelines by wearing appropriate gear. Secondly, we aim to detect
              any intrusions or unauthorized access, promptly alerting relevant
              authorities to prevent potential threats. Lastly, we emphasize the
              detection of unwanted activities, enabling timely intervention to
              address any prevented behaviors.
            </p>
            <button className={style.button}>Read More</button>
          </div>
          <div className={style.socialList}>
            <a href="/facebook">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
            <a href="/twitter">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            <a href="/instagram">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
