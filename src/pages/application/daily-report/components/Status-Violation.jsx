import React from "react";

export default function StatusViolation(props) {
  return (
    <div className="status-siola">
      <h2 className="status-violation--header">Detected Vehicles</h2>
      <h3 className="status-violation--info">
        {" "}
        Detected vehicle entered the factory at{" "}
        <b className="bold">{props.num}</b> -The plate number is{" "}
        <b className="bold">{props.num2}</b> -Reported camera:{" "}
        <b className="bold">{props.num3}</b>
      </h3>

      <div className="critcal_container">
        <h4 className="critcal_header"> Critcal Level </h4>
        <div className="critcal_level1"></div>
        <div className="critcal_level2"></div>
        <div className="critcal_level3"></div>
        <div className="critcal_level4"></div>
      </div>
    </div>
  );
}
