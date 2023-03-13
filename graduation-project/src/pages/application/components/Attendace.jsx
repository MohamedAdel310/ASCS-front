import React from "react";
import ChartDonate from "./Chart-donate";
import TableDay from "./Table-day";
import "../style/attendance.css";
export default function Attendance() {
      return (
        <div className="attendane">
          <h3>Attendance</h3>
          <ChartDonate/>
          <TableDay/>
        </div>
      )
      }