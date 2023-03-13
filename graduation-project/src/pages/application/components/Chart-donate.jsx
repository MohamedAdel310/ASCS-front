import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 18],
  ["Eat", 2] // CSS-style declaration
];

const options = {
  title: "My Daily Activities",
  pieHole: 0.6,
  is3D: false,
};

export default function ChartDonate() {
  return (
    <div>
      <Chart
        chartType="PieChart"
        width="20%"
        height="100px"
        data={data}
        options={options}
      />
    </div>
  );
}
