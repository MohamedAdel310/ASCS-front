import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import jsonText from "../../../../assets/text.json";
import { Link } from "react-router-dom";

export default function LastEventDetected(props) {
  return (
    <div className="dashboard--last-event-detected">
      <h3>Last Event Detected</h3>
      {console.log("jsonText: ", jsonText)}

      {Array(2)
        .fill()
        .map((__, index) => (
          <div className="personal-detect">
            <FontAwesomeIcon className="bell" icon={faBell}></FontAwesomeIcon>
            <h4>{props.text && props.text[index]}</h4>
          </div>
        ))}

      <Link to="/application/daily-report">
        <button>View More...</button>
      </Link>
    </div>
  );
}
