import React from "react";
import branchLogo from "../../../../../src/assets/image/branch.jpg";

export default function CardViolation(props) {
  return (
    <div className="card-violation">
      <img className="card-violation--img" src={branchLogo} alt="branch logo" />
      <div className="mistake">
        <h3 className="card-violation--text">{props.text}</h3>
        <div className="card-violation--number">{props.num}</div>
      </div>
    </div>
  );
}
