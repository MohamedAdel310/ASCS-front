import React from "react";
import AttendanceOverview from "./components/AttendanceOverview";
import Card from "./components/Card";
import DetectedViolations from "./components/DetectedViolations";
import HumanPresent from "./components/HumanPresent";
import LastEventDetected from "./components/LastEventDetected";
import LateOverview from "./components/LateOverview";
import WorkersPerformance from "./components/WorkersPerformance";
import "../style/dashboard.css";
export default function MainContent() {
  return (
    <div className="dashboard_nomain">
      <div className="detected_violaions">
        <DetectedViolations num="75" />
      </div>

      <div className="attendance_overview">
        <AttendanceOverview />
      </div>
      <div className="human_present">
        {/* <HumanPresent 
      text="Updated every 5 minutes"/> */}
      </div>
      <div className="late_overview">
        <LateOverview />
      </div>
      <div className="work_performane">
        <WorkersPerformance />
      </div>
      <div className="card">
        <div className="last_event">
          <LastEventDetected />
        </div>
        <div className="detected_vehicles">
          <Card header="Detected Vehicles" detectedNum="47" />
        </div>
        <div className="unauthtorized_personal">
          <Card header="Unauthtorized Personal" detectedNum="23" />
        </div>
      </div>
    </div>
  );
}
