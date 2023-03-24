import React from "react";
import {Chart} from "react-google-charts"
export const data = [
  ["date", "value"],
  ["1/1", 18],
  ["5/1", 45],
  ["9/1", 30],
  ["13/1", 65],
  ["17/1", 48],
  ["21/1", 62],
  ["25/1", 65],
  ["29/1", 62],
];


export const options = {
  height: 300,
  legend: { position: "left", maxLines: 3 },
  vAxis: { minValue: 0},
};


export default function DetectedViolations(prpos) {
  return (
    
    <div className="dashboard--detected-violations">
    <h3>DetectedViolations</h3>
    <div className="number">
      {prpos.num}
    </div>
  
    <div className="total_days">In the last 29 days</div>
 <div className="option">
 <select id="date">
          <option value="1">ALL</option>
            <option value="2">week</option>
            <option value="3">Month</option>
          </select>
 </div>
 <div className="area_chart">
    <Chart
    chartType="AreaChart"
      width={"500px"}
      height={"600px"}
      data={data}
      options={options}
      />
      </div>
     </div>

     
  );
}
