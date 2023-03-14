import React from "react";
import CardViolation from "./components/Card-Violation";
import StatusViolation from "./components/Status-Violation";
import "../style/daily-report.css";

export default function DailyReport() {
  return (
    <div className="daily-report">
      <div className="card-voilation">

      <CardViolation num="8" text="Detected vehicles" img=""/>
      <CardViolation num="3" text="unauthorized persons" />
      <CardViolation num="5" text="smoking" />
      <CardViolation num="6" text="safety violation" />
      <CardViolation num="10" text="restricted area" />
      </div>
      <div className="daily-report--header">
      <h3>Detected events</h3>
      </div>

      <div className="status-box">
      <div className="status-container1">
      <StatusViolation num="19:50" num2="442" num3="A70" level="1"/>
      </div>
      <StatusViolation text="Detected Vehicles" />
      <StatusViolation text="Detected Vehicles" />
      </div>
      
    </div>
  );
}
