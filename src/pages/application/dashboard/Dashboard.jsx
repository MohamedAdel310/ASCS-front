import React from "react";
import "../style/dashboard.css";

export default function MainContent() {
  return (
    <div className="board">
      <div className="container">
        <div className="violation"></div>
        <div className="vehicle"></div>
        <div className="personal"></div>
        <div className="events"></div>
        <div className="att-overview"></div>
        <div className="human"></div>
        <div className="late-overview"></div>
        <div className="performance"></div>
      </div>
    </div>
  );
}
