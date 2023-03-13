import React from "react";
import ChartDonate from "./components/Chart-donate";
import TableDay from "./components/Table-day";
import "../style/attendance.css";
export default function Attendance() {
  return (
    <div className="attendance">
      <h3>Attendance</h3>
      <div className="donate">
        <ChartDonate num="20" name="mohamed" age="23" />
        <ChartDonate num="30" />
        <ChartDonate num="18" />
        <ChartDonate num="15" />
      </div>
      <TableDay />
    </div>
  );
}
