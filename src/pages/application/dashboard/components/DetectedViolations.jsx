import React from "react";
import { Chart } from "react-google-charts";
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
  height: 400,
  width: 600,
  legend: { position: "left", maxLines: 3 },
  vAxis: { minValue: 0 },
  chart: { backgroundColor: "red" },
  colors: ["#FB7A21"],
  chartArea: {
    left: 80,
    right: 0,
    top: 20,
    bottom: 100,
  },
};

export default function DetectedViolations(prpos) {
  return (
    <div className="dashboard--detected-violations">
      <div className="violation-title">
        <div className="header">
          <h3>Detected Violations</h3>
          <div className="number">{prpos.num}</div>
          <div className="detected_total_days">In the last 29 days</div>
        </div>
        <div className="option">
          <select id="date">
            <option value="1">ALL</option>
            <option value="2">week</option>
            <option value="3">Month</option>
          </select>
        </div>
      </div>
      <div className="detected_violations_area_chart">
        <Chart
          chartType="AreaChart"
          width={"630px"}
          height={"500px"}
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}
