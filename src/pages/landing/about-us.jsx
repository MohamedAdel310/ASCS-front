import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <div className="about-image">
      <div className="about">
        <div className="about-content">
          <h1 className="title">About Us</h1>
          <div className="content">
            <h2 className="contentTitle">AI surveillance camera system.</h2>
            <p className="contentText">
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
              address any prevented behaviors. By addressing these crucial
              aspects through video surveillance systems, we strive to create a
              safer environment for everyone in public places, fostering a sense
              of security and peace of mind.
            </p>
            <button className="button">Read More</button>
          </div>
          <div className="socialList">
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
