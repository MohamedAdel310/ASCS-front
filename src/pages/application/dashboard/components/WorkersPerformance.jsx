import React from "react";
import { Chart } from "react-google-charts";
export const data = [
  [ "","week before", "last week"],
  ["NO.1", 55, 65],
  ["NO.2", 58, 36],
  ["NO.3", 77, 72],
  ["NO.4", 62, 77],
  ["NO.5", 45, 54],
  ["NO.6", 58, 50],
  ["NO.7", 36, 30],
  ["NO.8", 45, 20],
  ["NO.9", 30, 54],
  ["NO.10", 45, 35],
];

export const options = {
  
    
};

export default function WorkersPerformance() {
  return (
    <div className="dashboard--WorkersPerformance">
      <h4>Workers Performance overview</h4>
       <h6>in last two weeks</h6>

       <div className="worker_performance_chart">

           <Chart
                chartType="Bar"
                width="650px"
                height="250px"
                data={data}
                options={options}

      />
       </div>
    </div>
  );
}
