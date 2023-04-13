import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ['areas', "Hours per Day"],
  ["Area 1",15],
  ["Area 2", 9],
  ["Area 3", 5],
  ["Back", 7],
  ["Warehouse", 4],
  ["Office", 7], 
];

export const options = {
  
  pieHole: 0.7,
  is3D: false,
  pieSliceText: 'none',
  legend :{ position: '',textStyle: {color: 'black', fontSize: 15},alignment: 'start',},
  slices: {0: {color: '#6b5b95'}, 
  1:{color: '#80ced6'}, 
  2:{color: '#ff7b25'}, 
  3:{color: '#82b74b'}, 
  4:{color: '#ffcc5c'},
  5:{color: '#c83349'}},
  chartArea: {
    left: 0,
    right: 20,
    top: 20,
    bottom: 0,
  }

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
      width="470px"
      height="250px"
      
      data={data}
      options={options}
    />
      </div>
    
    </div>
    
  );
}


