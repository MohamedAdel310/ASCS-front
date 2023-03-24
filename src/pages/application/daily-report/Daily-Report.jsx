import React from "react";
import CardViolation from "./components/Card-Violation";
import StatusViolation from "./components/Status-Violation";
import "../style/daily-report.css";

import iconVehicles from "../../../../src/assets/icons/vehicles.svg";
import iconRestricted from "../../../../src/assets/icons/gloves.svg";
import iconUnauthorized from "../../../../src/assets/icons/unuothorize.svg";
import iconSmoking from "../../../../src/assets/icons/smoke.svg";
import iconSafety from "../../../../src/assets/icons/helmet.svg";

export default function DailyReport() {
  return (
    <div className="daily-report">
      <CardViolationComp />

      <div className="daily-report--header">
        <h1>Detected events</h1>
      </div>

      <StatusViolationComp />
    </div>
  );
}

const CardViolationComp = () => {
  return (
    <div className="card-violation-container">
      <CardViolation num="8" text="Detected vehicles" icon={iconVehicles} />
      <CardViolation
        num="3"
        text="unauthorized persons"
        icon={iconUnauthorized}
      />
      <CardViolation num="5" text="smoking" icon={iconSmoking} />
      <CardViolation num="6" text="safety violation" icon={iconSafety} />
      <CardViolation num="10" text="restricted area" icon={iconRestricted} />
    </div>
  );
};

const StatusViolationComp = () => {
  return (
    <div className="status-box">
      <StatusViolation
        level="1"
        event="Detected Vehicles"
        eventMessage="Detected vehicle entered the factory at 19:50 -The plate number
      is 442 -Reported camera: A70"
      />
      <StatusViolation
        level="3"
        event="Safety Violation"
        eventMessage="Detected vehicle entered the factory at 19:50 -The plate number
      is 442 -Reported camera: A70"
      />
      <StatusViolation
        level="2"
        event="Restricted Area"
        eventMessage="Detected vehicle entered the factory at 19:50 -The plate number
      is 442 -Reported camera: A70"
      />
      <StatusViolation
        level="4"
        event="Unauthorized Person"
        eventMessage="Detected vehicle entered the factory at 19:50 -The plate number
      is 442 -Reported camera: A70"
      />
    </div>
  );
};
