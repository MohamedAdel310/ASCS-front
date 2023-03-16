import React from "react";
import "../../style/employee-profile.css";
import imployeeImg from "../../../../../src/assets/image/man-profile-cartoon_18591-58482.png";

export default function EmpProfile() {
  return (
    <div className="emp-profile">
      <div className="contain">
        <h1>Employee Details</h1>
        <div className="info">
          <div className="image">
            <img src={imployeeImg} alt="" />
          </div>
          <div className="information">
            <h3>خالد الشربيني احمد حسن</h3>
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Job Title" />
            <input type="text" placeholder="deparment" />
            <button>Edit Details</button>
          </div>
          <div className="mail"></div>
          <div className="salary"></div>
        </div>
      </div>
    </div>
  );
}
