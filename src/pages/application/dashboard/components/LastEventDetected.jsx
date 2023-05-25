import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import jsonText from "../../../../assets/text.json";
import { Link } from "react-router-dom";

export default function LastEventDetected({ text }) {
  return (
    <div className="dashboard--last-event-detected">
      <h3>Last Event Detected</h3>
      {console.log("jsonText: ", jsonText)}

      {text?.length ? (
        Array(3)
          .fill()
          .map(
            (__, index) =>
              text[index] && (
                <div className="personal-detect">
                  <FontAwesomeIcon
                    className="bell"
                    icon={faBell}
                  ></FontAwesomeIcon>
                  <h4>{text[index]}</h4>
                </div>
              )
          )
      ) : (
        <h4>there is no Events yet</h4>
      )}

      <Link to="/application/daily-report">
        <button>{text?.length ? "View More..." : "Events page..."}</button>
      </Link>
    </div>
  );
}
