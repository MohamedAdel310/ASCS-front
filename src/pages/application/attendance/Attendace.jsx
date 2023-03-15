import React from "react";
import ChartDonate from "./components/Chart-donate";
import TableDay from "./components/Table-day";
import "../style/attendance.css";
import "../../../components/search";
import employeeData from "./__delete__employeedata.json";
import Search from "../../../components/search";
import Filter from "./components/Filter";

export default function Attendance() {
  return (
    <div className="attendance">
      <div className="title">
        <h3>Attendance</h3>
        <div className="ends">
          <div className="day">Feb 9</div>
          <select name="date" id="date">
            <option value="1">Day</option>
            <option value="2">Month</option>
            <option value="3">Year</option>
          </select>
        </div>
      </div>
      <div className="donate">
        <ChartDonate num="9" text="Absense" clName="circle1" />
        <ChartDonate num="29" text="Late" clName="circle2" />
        <ChartDonate num="18" text="Undertime" clName="circle3" />
        <ChartDonate num="8" text="Overtime" clName="circle4" />
      </div>
      <div className="search-box">
        <Search />
        <Filter />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Deparment</th>
            <th>status</th>
            <th>Arrival time</th>
            <th>Leave Time</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map(
            ({ name, department, status, arriveTime, leaveTime }) => (
              <TableDay
                name={name}
                department={department}
                status={status}
                arriveTime={arriveTime}
                leaveTime={leaveTime}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
