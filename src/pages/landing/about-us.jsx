import React from "react";
import "./landing.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";

export default function About(){
    return(
        <div class="about" id="about-us">
            <div class="container">
                <div class="about-content">
                <div class="title">
                    <h1>About Us</h1>
                </div>
                <div class="content">
                    <h3>AI surveillance camera system.</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                    explicabo iusto autem perferendis odit ducimus aut accusamus,
                    voluptatibus aliquid officia dolores recusandae sequi distinctio
                    eligendi illum optio non praesentium architecto? Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Eveniet maiores hic dicta
                    quae doloremque suscipit praesentium, eos eligendi doloribus sequi
                    expedita? Quasi magni accusantium nostrum repellendus illum.
                    Dolorem, eum numquam?
                    </p>
                    <div class="button">
                    <a href="">Read More</a>
                    </div>
                </div>
                <div class="social">
                    {/* <FontAwesomeIcon icon={}/> */}
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                </div>
                </div>
                <div class="image">
                <img src="../../../public/myaz.png" alt="" />
                <h1>surveillance Camera</h1>
                </div>
            </div>
    </div>
    )
}