import React from "react";
import "./landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from"@fortawesome/free-brands-svg-icons";

export default function About(){
    return(
        <div className="about-image">
            <div class="about" id="about-us">
                <div class="container">
                    <div class="about-content">
                    <div class="title">
                        <h1>About Us</h1>
                    </div>
                    <div class="content">
                        <h3>AI surveillance camera system.</h3>
                        <p>
                        surveillance cameras have become ubiquitous, capturing a multitude of events throughout the day. Their widespread presence has significantly contributed to ensuring the safety of various public spaces, such as streets, city squares, hospitals, banks, and courts. As a result, the demand for video surveillance systems in these areas has been steadily rising, primarily driven by the objective of enhancing security. Given the paramount importance of safety and security, our focus has centered around three key tasks in this realm. Firstly, we prioritize the detection of personal protective equipment, ensuring that individuals adhere to safety guidelines by wearing appropriate gear. Secondly, we aim to detect any intrusions or unauthorized access, promptly alerting relevant authorities to prevent potential threats. Lastly, we emphasize the detection of unwanted activities, enabling timely intervention to address any prevented behaviors. By addressing these crucial aspects through video surveillance systems, we strive to create a safer environment for everyone in public places, fostering a sense of security and peace of mind.
                        </p>
                        <div class="button">
                        <a href="">Read More</a>
                        </div>
                    </div>
                    <div class="social">
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            </a>
                    </div>
                    </div>
                    <div class="image">
                    <img src="../../../public/myaz.png" alt="" />
                    <h1>surveillance <hr /> Camera</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}