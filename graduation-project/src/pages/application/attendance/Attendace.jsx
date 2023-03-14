import React from "react";
import ChartDonate from "./components/Chart-donate";
import TableDay from "./components/Table-day";
import Search from "../../../components/Search";
import "../style/attendance.css";
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
        <ChartDonate num="20" name="mohamed" age="23" />
        <ChartDonate num="30" />
        <ChartDonate num="18" />
        <ChartDonate num="15" />
      </div>
      <Search/>
      <TableDay />
    </div>
  );
}
