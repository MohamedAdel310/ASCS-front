import React from "react";
import CardViolation from "./components/Card-Violation";
import StatusViolation from "./components/Status-Violation";
import MainButton from "../../../components/button-main";
import "../style/daily-report.css";

export default function DailyReport() {
  return (
    <div className="daily-report">
      <div className="card-violation-container">
        <CardViolation num="8" text="Detected vehicles" />
        <CardViolation num="3" text="unauthorized persons" />
        <CardViolation num="5" text="smoking" />
        <CardViolation num="6" text="safety violation" />
        <CardViolation num="10" text="restricted area" />
      </div>

      <div className="daily-report--header">
        <h1>Detected events</h1>
      </div>

      <div className="status-box">
        <StatusViolation
          level="1"
          text="Detected vehicles"
          event="Detected Vehicles"
          eventMessage="Detected vehicle entered the factory at 19:50 -The plate number
          is 442 -Reported camera: A70"
        />
        <StatusViolation
          level="3"
          text="Detected vehicles"
          event="Detected Vehicles"
          eventMessage="Detected vehicle entered the factory at 19:50 -The plate number
          is 442 -Reported camera: A70"
        />
        <StatusViolation
          level="2"
          text="Detected vehicles"
          event="Detected Vehicles"
          eventMessage="Detected vehicle entered the factory at 19:50 -The plate number
          is 442 -Reported camera: A70"
        />
        <StatusViolation
          level="4"
          text="Detected vehicles"
          event="Detected Vehicles"
          eventMessage="Detected vehicle entered the factory at 19:50 -The plate number
          is 442 -Reported camera: A70"
        />
      </div>
    </div>
  );
}
