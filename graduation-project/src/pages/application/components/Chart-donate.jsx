import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 18],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};

export default function ChartDonate() {
  return (
    <div>
      <h1>hello</h1>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}
