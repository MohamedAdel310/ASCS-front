import React from "react";
import branchLogo from "./../../assets/image/branch.jpg";

export default function Card() {
  return (
    <a href="./dashboard/Dashboard1.html">
      <div className="img">
        <div className="info">
          <img src={branchLogo} alt="branch logo" />
          <h3>New Cairo</h3>
        </div>
      </div>
    </a>
  );
}
