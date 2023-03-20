import React from "react";

const DonutCharts = (props) => {
  const styles = {
    position: "absolute",
    width: "150px",
    height: "150px",
    left: "10px"
  };

  const strokeWidth = 25;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - props.percent);

  const circleStyles = {
    stroke: props.charColorSecond || "#bbb",
    strokeWidth: strokeWidth,
    fill: "none",
    strokeDasharray: circumference,
    strokeDashoffset: 0,
  };

  const circleStylesFilled = {
    stroke: props.charColorMain || "#ffbf00",
    strokeWidth: strokeWidth,
    fill: "none",
    strokeDasharray: circumference,
    strokeDashoffset: offset,
  };

  const textStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#0c9",
  };

  return (
    <div className="donat--container">
      <h4>{props.text}</h4>

      <div id="number">{props.num}</div>
      <div style={styles}>
        <svg width="100%" height="100%" viewBox="0 0 200 200">
          <circle style={circleStyles} cx="100" cy="100" r={radius} />
          <circle style={circleStylesFilled} cx="100" cy="100" r={radius} />
          <text style={textStyles}>{props.percent}%</text>
        </svg>
      </div>
    </div>
  );
};

export default DonutCharts;
