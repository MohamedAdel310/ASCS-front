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
    <div className="dashboard">
      <DetectedViolations />
      <AttendanceOverview />
      <LateOverview />
      <Card header="Detected Vehicles" detectedNum="47" />
      <Card header="Unauthorized Personal" detectedNum="23" />
      <LastEventDetected />
      <HumanPresent />
      <WorkersPerformance />
    </div>
  );
}
