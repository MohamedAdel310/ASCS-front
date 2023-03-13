import React from "react";
import CardViolation from "./components/Card-Violation";
import StatusViolation from "./components/Status-Violation";
import "../style/daily-report.css";

export default function DailyReport() {
  return (
    <div className="daily-report">
      <h1 className="daily-report--header">hello from Daily-Report page</h1>
      <CardViolation />
      <StatusViolation />
    </div>
  );
}
