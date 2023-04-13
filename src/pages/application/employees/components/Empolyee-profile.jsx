import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { faSmoking } from "@fortawesome/free-solid-svg-icons";
import { faHatCowboy } from "@fortawesome/free-solid-svg-icons";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";
import "../../style/employee-profile.css";
import imployeeImg from "../../../../../src/assets/image/man-profile-cartoon_18591-58482.png";
import ChartDonate from "../../attendance/components/Chart-donate";
import EmplyeeProfileTable from "./Emplyee-profile-table";

const currentPath = window.location.pathname;
const employee_id = currentPath.slice(-6);
console.log("---------------------", employee_id);

export default function EmpProfile() {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        console.log(employee_id);
        const response = await fetch(
          `https://myaz.cyclic.app/api/employees/${employee_id}`
        );
        if (response.ok) {
          const data = await response.json();
          setEmployee(data?.data.employee);
          console.log("+_+_+_+_+_+_+_+_+_", employee);
        } else {
          // Handle error response
          console.error(
            "Failed to fetch employee details:",
            response.statusText
          );
        }
      } catch (error) {
        // Handle fetch error
        console.error("Failed to fetch employee details:", error);
      }
    };
    fetchEmployee();
  }, []);

  return (
    <div className="emp-profile">
      <div className="contain">
        <h1>Employee Details</h1>
        <div className="info">
          <div className="image">
            <img src={imployeeImg} alt="" />
          </div>
          <div className="information">
            <h3>{employee?.name}</h3>
            <div className="label-container">
              <input
                type="text"
                placeholder={employee?.phone || "there is no phone"}
                readOnly
              />
              <label htmlFor="">Phone Number</label>
            </div>
            <div className="label-container">
              <input type="text" placeholder={employee?.job} readOnly />
              <label htmlFor="">Job Title</label>
            </div>
            <div className="label-container">
              <input type="text" placeholder={employee?.department} readOnly />
              <label htmlFor="">Department</label>
            </div>

            <button>Edit Details</button>
          </div>
          <div className="shift">
            <div className="label-container">
              <input
                type="email"
                placeholder={employee?.email || "there is no email"}
                readOnly
              />
              <label htmlFor="">Email</label>
            </div>
            <div className="label-container">
              <input
                type="text"
                placeholder={employee?.shiftStart || "00:00 "}
                readOnly
              />
              <label htmlFor="">Shift Start at</label>
            </div>
            <div className="label-container">
              <input
                type="text"
                placeholder={employee?.shiftEnd || "00:00 "}
                readOnly
              />
              <label htmlFor="">Shift End at</label>
            </div>
          </div>
          <div className="date">
            <h5>
              Salary: <span>{employee?.salary || "0000"}EGP</span>
            </h5>
            <div className="circle">
              <h5>
                Status: <span>{employee?.status || "NULL"}</span>
              </h5>
              <div className="active"></div>
            </div>
            <h5>
              Hire Date: <span>{employee?.hireData || "0000-00-00"}</span>
            </h5>
            <h5>
              Last Edit: <span>{employee?.lastEdit || "0000-00-00"}</span>
            </h5>
          </div>
        </div>
        <div className="overview">
          <div className="title">
            <h3>Overview</h3>
            <div className="ends">
              <div className="day">Feb 9</div>
              <select name="date" id="date">
                <option value="1">Day</option>
                <option value="2">Month</option>
                <option value="3">Year</option>
              </select>
            </div>
          </div>
        </div>
        <div className="donate">
          <ChartDonate num="9" text="Absense" clName="circle1" />
          <ChartDonate num="29" text="Late" clName="circle2" />
          <ChartDonate num="18" text="Undertime" clName="circle3" />
          <ChartDonate num="8" text="Overtime" clName="circle4" />
        </div>
        <div className="reports">
          <div className="container">
            <div className="content">
              <FontAwesomeIcon className="icon" icon={faHand}></FontAwesomeIcon>
              <div className="title">
                <h4>Restricted Area</h4>
                <div className="number">1</div>
              </div>
            </div>
            <div className="content">
              <FontAwesomeIcon
                className="icon"
                icon={faHatCowboy}
              ></FontAwesomeIcon>
              <div className="title">
                <h4>Restricted Area</h4>
                <div className="number">3</div>
              </div>
            </div>
            <div className="content">
              <FontAwesomeIcon
                className="icon"
                icon={faSmoking}
              ></FontAwesomeIcon>
              <div className="title">
                <h4>Restricted Area</h4>
                <div className="number">6</div>
              </div>
            </div>
            <div className="content">
              <FontAwesomeIcon
                className="icon"
                icon={faHelmetSafety}
              ></FontAwesomeIcon>
              <div className="title">
                <h4>Restricted Area</h4>
                <div className="number">4</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cont">
          <h4>Attendance</h4>
          <div className="day">February</div>
        </div>

        <EmplyeeProfileTable />
      </div>
    </div>
  );
}
