import React from "react";
import "../../style/chart-donate.css"
export default function ChartDonate(props) {
  return (
    <div className="donat--container">
      {console.log(props.num)}
      <h4>{props.text}</h4>
      <div className="skills">
        <div className="outer">
          <div className="inner">
            <div id="number">{props.num}</div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            className={props.clName}
            cx="70"
            cy="70"
            r="60"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
