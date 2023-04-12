import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {bell} from "@fortawesome/free-solid-svg-icons";

export default function LastEventDetected() {
  return (
    <div className="dashboard--last-event-detected">
      <div className="last_event_card">Last Event Detected</div>
      <div className="personal-detect">
        <FontAwesomeIcon icon={bell}></FontAwesomeIcon>
      </div>
      <div className="vehicle-leaves">

      </div>
      <div className="vehicle-enters">

      </div>
    </div>
  );
}
