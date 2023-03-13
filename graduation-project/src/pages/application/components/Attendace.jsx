import React from "react";
import "../style/attendance.css";
import ChartDonate from "./Chart-donate";
import TableDay from "./Table-day";
export default function Attendance() {
  return (
    <div className="attendance">
      <h3>Attendance</h3>
      <TableDay/>
    </div>
  );
}
