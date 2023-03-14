import React from "react";
import ChartDonate from "./components/Chart-donate";
import TableDay from "./components/Table-day";
import Search from "../../../components/Search";
import "../style/attendance.css";

import employeeData from "./__delete__employeedata.json";

export default function Attendance() {
  return (
    <div className="attendance">
      <h3>Attendance</h3>
      <div className="donate">
        <ChartDonate num="30" text="Absense" />
        <ChartDonate num="20" text="Late" />
        <ChartDonate num="18" text="Undertime" />
        <ChartDonate num="15" text="Overtime" />
      </div>
      <TableDay />
    </div>
  );
}
