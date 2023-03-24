import React from "react";

const HumanPresent = (props) => {
  const styles = {
    position: "absolute",
    width: "100",
    height: "100",
    left: "10px"
  };
  const strokeWidth = 15;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - props.percentarea);
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
 

 

  return (

    
    <div className="human--container">
  
  <div className="headers">
    <h4>Human Present</h4>
    <h3>{props.text}</h3>
    </div>
    

      <div className="area">
        <ul>
          <li id="area1"> {props.textarea1} </li>
          <li id="area2">{props.textarea2}</li>
          <li id="area3">{props.textarea3}</li>
          <li id="back">{props.textback}</li>
          <li id="warehouse">{props.textwarehouse}</li>
          <li id="office">{props.textoffice}</li>
     </ul>
      </div>
      <div style={styles}>
        <svg width="100%" height="50%" viewBox="0 0 200 200">
          <circle style={circleStyles} cx="60" cy="120" r={radius} />
          <circle style={circleStylesFilled} cx="60" cy="120" r={radius} />

        </svg>
      </div>
    
    </div>
    
  );
};
export default HumanPresent;

