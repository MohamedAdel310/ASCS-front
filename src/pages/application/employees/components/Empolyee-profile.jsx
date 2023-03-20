import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { faSmoking } from "@fortawesome/free-solid-svg-icons";
import { faHatCowboy } from "@fortawesome/free-solid-svg-icons";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";
import "../../style/employee-profile.css";
import imployeeImg from "../../../../../src/assets/image/man-profile-cartoon_18591-58482.png";
import ChartDonate from "../../attendance/components/Chart-donate";

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
            <div className="label-container">
            <input type="text" placeholder="01224247574" readOnly />
            <label htmlFor="">Phone Number</label>
            </div>
            <div className="label-container">
            <input type="text" placeholder="Worker" readOnly />
            <label htmlFor="">Job Title</label>
            </div>
            <div className="label-container">
            <input type="text" placeholder="WorkShop" readOnly />
            <label htmlFor="">Department</label>
            </div>
            
            <button>Edit Details</button>
          </div>
          <div className="shift">
            <div className="label-container">
            <input type="email" placeholder="Sherbiney@mail.com" readOnly />
            <label htmlFor="">Email</label>
            </div>
            <div className="label-container">
            <input type="text" placeholder="08:00 " readOnly />
            <label htmlFor="">Shift Start at</label>
            </div>
            <div className="label-container">
            <input type="text" placeholder="16:00" readOnly />
            <label htmlFor="">Shift End at</label>
            </div>
            
          </div>
          <div className="date">
            <h5>Salary:    <span>5000EGP</span></h5> 
            <div className="circle">
              <h5>Status:    <span>Active</span></h5>
              <div className="active"></div>
            </div>
            <h5>Hire Date: <span>2022/12/22</span></h5>
            <h5>Last Edit: <span>2022/12/22</span></h5>
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
              <FontAwesomeIcon className="icon" icon={faHatCowboy}></FontAwesomeIcon>
              <div className="title">
                <h4>Restricted Area</h4>
                <div className="number">3</div>
              </div>
            </div>
            <div className="content">
              <FontAwesomeIcon className="icon" icon={faSmoking}></FontAwesomeIcon>
                <div className="title">
                  <h4>Restricted Area</h4>
                  <div className="number">6</div>
                </div>
            </div>
            <div className="content">
              <FontAwesomeIcon className="icon" icon={faHelmetSafety}></FontAwesomeIcon>
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
        <table>
          <thead>
            <th>Day</th>
            <th>Status</th>
            <th>Arrival Time</th>
            <th>Leave Time</th>
            <th>Working Hour</th>
          </thead>
          <tbody>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
            <tr>
                  <td>Feb</td>
                  <td>Present</td>
                  <td>08:30</td>
                  <td>1230</td>
                  <td>1230</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
