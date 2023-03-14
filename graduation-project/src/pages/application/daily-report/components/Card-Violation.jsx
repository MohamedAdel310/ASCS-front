import React from "react";
import branchLogo from "../../../../../src/assets/image/branch.jpg";

export default function CardViolation(props) {
  return (
    <div className="card-violation">
      <div className="card-violation--header">
        <img id="image" src={branchLogo} alt="branch logo" />

        <h4 id="text">{props.text}</h4>
        <div id="number">{props.num}</div>
      </div>
    </div>
  );
}
