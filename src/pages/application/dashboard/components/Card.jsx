import React from "react";

export default function Card(props) {
  return (
    <div className="dashboard--card">
      <div className="detected_vehicale_card">{props.header}{props.detectedNum}</div>
     
     
    </div>
  );
}
