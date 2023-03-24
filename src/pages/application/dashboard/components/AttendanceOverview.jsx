import React from "react";


import { Chart } from "react-google-charts";

export const data = [
  ["Months", "value"],
  ["jan", 0],
  ["jan", 10],
  ["jan", 23],
  ["jan", 17],
  ["jan", 18],
  ["jan", 9],
 
];

export const options = {
  
  series: {
    1: { curveType: "function" },
  },
};
export default function AttendanceOverview() {
  return (
    <div className="dashboard--attendance-overview">
      <h3>Attendance Overview</h3>
    
<div className="attendance_chart">
    <Chart
      chartType="LineChart"
      width="400px"
      height="300px"
      data={data}
      options={options}
    />
    </div>
    </div>
  );
}
