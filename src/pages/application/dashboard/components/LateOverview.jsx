import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
export default function LateOverview() {
  return (
    <div className="late_overview">
      <div className="dashboard--Late-overview">
        <h4>Late Overview</h4>
        <div className="container">
          <div className="months">
            <h3 id="3">Jun</h3>
            <h3 id="1">May</h3>
            <h3 id="2">Apr</h3>
          </div>
          <div className="late_overview_percent">
            <Progress
              percent={30}
              status="active"
              theme={{
                active: {
                  trailColor: "white",
                  color: "#e0a4a4",
                },
              }}
            />
            <Progress
              percent={89}
              status="active"
              theme={{
                active: {
                  trailColor: "white",
                  color: "#e0a4a4",
                },
              }}
            />
            <Progress
              percent={19}
              status="active"
              strokeWidth="20px"
              theme={{
                active: {
                  trailColor: "white",
                  color: "#e19e9e",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
