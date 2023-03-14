import React from "react";
import ChartDonate from "./components/Chart-donate";
import TableDay from "./components/Table-day";
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
