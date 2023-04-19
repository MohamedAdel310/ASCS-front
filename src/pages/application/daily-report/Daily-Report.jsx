import React from "react";
import CardViolation from "./components/Card-Violation";
import StatusViolation from "./components/Status-Violation";
import "../style/daily-report.css";


import iconVehicles from "../../../../src/assets/icons/vehicles.svg";
import iconRestricted from "../../../../src/assets/icons/gloves.svg";
import iconUnauthorized from "../../../../src/assets/icons/unuothorize.svg";
import iconSmoking from "../../../../src/assets/icons/smoke.svg";
import iconSafety from "../../../../src/assets/icons/helmet.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faHelmetSafety, faSmoking, faTruck, faUserXmark } from "@fortawesome/free-solid-svg-icons";
// import { faCircleExclamation } from "@fortawesome/free-brands-svg-icons";

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
      <CardViolation num="8" text="Detected vehicles" icon={faTruck} />
      <CardViolation
        num="3"
        text="unauthorized persons"
        icon={faUserXmark}
      />
      <CardViolation num="5" text="smoking" icon={faSmoking} />
      <CardViolation num="6" text="safety violation" icon={faHelmetSafety} />
      <CardViolation num="10" text="restricted area" icon={faHand} />
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
