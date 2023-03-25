import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ['areas', "Hours per Day"],
  ["Area 1",3],
  ["Area 2", 11],
  ["Area 3", 2],
  ["Back", 2],
  ["Warehouse", 2],
  ["Office", 7], 
];

export const options = {
  
  pieHole: 0.6,
  is3D: false,
};

 
export default function HumanPresent (props) {
  return (

    
<div className="dashboard--human--container">
  
  <div className="human_present_headers">
    <h4>Human Present</h4>
    <h3>{props.text}</h3>
    </div>
    

  <div className="human_area">
      <Chart
      chartType="PieChart"
      width="400px"
      height="200px"
      data={data}
      options={options}
    />
      </div>
    
    </div>
    
  );
}


