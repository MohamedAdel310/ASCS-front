import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { curveCardinal } from "d3-shape";

const data = [
  {
    name: "JAN",
    value: 95,
   
  },
  {
    name: "Feb",
    value: 75,
    
  },
  {
    name: "Mar",
    value: 82,
 
  },
  {
    name: "Apr",
    value: 90,
  
  },
  {
    name: "May",
    value: 78,
 
  },
  {
    name: "Jun",
    value: 85,
   
  },
  
];
const cardinal = curveCardinal.tension();



export default function AttendanceOverview() {
  return (
    <div className="dashboard--attendance-overview">
      <h3>Attendance Overview</h3>
    
<div className="attendance_chart">

    <AreaChart
      width={450
      }
      height={250}
      data={data}
      margin={{
        left: 10,
   
      }}
    >
      
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        strokeWidth={2}
        fill="#8884d8"
        fillOpacity={0.5}
      />
    </AreaChart>
    </div>
    </div>
  );
}







