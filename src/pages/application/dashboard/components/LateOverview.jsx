import { color } from "d3-color";
import React from "react";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
export default function LateOverview() {
  return (
    <div className="dashboard--Late-overview">
      <h4>Late Overview</h4>
      <h3>Jun</h3>
      <h3>May</h3>
      <h3>Apr</h3>
      <div className="late_overview_percent">
      <Progress 
      Width="20px"
      percent={25}
      status="active"
      theme={{
        active: {
          trailColor: 'white',
          color: '#e0a4a4'
        }
      }}
      />
       <Progress
      percent={31}
      status="active"
      theme={{
        active: {
          trailColor: 'white',
          color: "#e0a4a4"
        }
      }}
      />
       <Progress
      percent={19}
      status="active"
      strokeWidth="20px"
      theme={{
        active: {
          trailColor: 'white',
          color: '#e19e9e',
    
        }
      }}
      />
      </div>
    </div>
  );
}
