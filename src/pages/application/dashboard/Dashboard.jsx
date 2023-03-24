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
      <DetectedViolations />
      <AttendanceOverview />
      <LateOverview />
      <Card header="Detected Vehicles" detectedNum="47" />
      <Card header="Unauthtorized Personal" detectedNum="23" />
      <LastEventDetected />
      <div className="human_present">
      <HumanPresent 
      text="Updated every 5 minutes"
      percentarea=".60"
      textarea1="Area 1"
      textarea2="Area 2"
      textarea3="Area 2"
      textback="Back"
      textwarehouse="Warehouse"
      textoffice="Office"
      charColorMain="#d92c8a"
      charColorSecond="#ffa8d7"/>
      </div>
      <WorkersPerformance
       />
    </div>
  );
}
