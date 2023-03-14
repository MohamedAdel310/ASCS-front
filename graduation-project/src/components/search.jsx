import React from "react";
import "../pages/application/style/Search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import "../pages/application/style/normalize.css";
export default function search() {
    return (
        <div className="search">
            <div className="container">
                <form action="" className="form">
                    <input type="text" placeholder="Search..."  className="searchBar"/>
                    <button type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </form>
            </div>
            
        </div>
    )};