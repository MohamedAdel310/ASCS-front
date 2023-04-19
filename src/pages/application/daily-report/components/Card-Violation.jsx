import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function CardViolation(props) {
  return (
    <div className="card-violation">
      <FontAwesomeIcon className="card-violation--img" icon={props.icon}></FontAwesomeIcon>
      <div className="mistake">
        <h3 className="card-violation--text">{props.text}</h3>
        <div className="card-violation--number">{props.num}</div>
      </div>
    </div>
  );
}
