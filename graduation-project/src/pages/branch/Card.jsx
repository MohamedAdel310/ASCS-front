import React from "react";
import branchLogo from "./../../assets/image/branch.jpg";

export default function Card(props) {
  return (
    <a href="./dashboard/Dashboard1.html">
      <div className="img">
        <div className="info">
          <img src={branchLogo} alt="branch logo" />
          <h3>{props.name}</h3>
        </div>
      </div>
    </a>
  );
}
