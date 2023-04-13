import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";

export default function LastEventDetected() {
  return (
    <div className="dashboard--last-event-detected">
      <h3>Last Event Detected</h3>
      <div className="personal-detect">
        <FontAwesomeIcon className="bell" icon={faBell}></FontAwesomeIcon>
        <h4>Unauthorized Personal was detected at ar..</h4>
        <p>17:40</p>
      </div>
      <div className="personal-detect">
        <FontAwesomeIcon className="bell" icon={faBell}></FontAwesomeIcon>
        <h4>A Vehicle leaves the factory</h4>
        <p>16:22</p>
      </div>
      <div className="personal-detect">
        <FontAwesomeIcon className="bell" icon={faBell}></FontAwesomeIcon>
        <h4>A vehicle enters the factory</h4>
        <p>16:03</p>
      </div>
      <button>View More...</button>
    </div>
  );
}
