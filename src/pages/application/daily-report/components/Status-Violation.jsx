import React from "react";
import MainButton from "../../../../components/button-main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";


export default function StatusViolation(props) {
  const criticalLevel = (lev) => {
    return `critcal-level ${
      props.level > lev ? "critcal-level__active" : "critcal-level__inactive"
    }`;
  };

  return (
    <div className="status-siola" style={{ 
      display: "flex" ,
      alignItems: "center",
    }}>
      <div className="image">
        <FontAwesomeIcon className="icon" icon={faCircleExclamation}></FontAwesomeIcon>
      </div>
      <div style={{ width: "100%" }}>
        <h2 className="status-violation--header">{props.event}</h2>
        <h3 className="status-violation--info">{props.eventMessage}</h3>
        <div>
          <div className="critcal_container">
            <h4 className="critcal_header">Critcal Level</h4>

            <div className={criticalLevel(0)}></div>
            <div className={criticalLevel(1)}></div>
            <div className={criticalLevel(2)}></div>
            <div className={criticalLevel(3)}></div>
          </div>
        </div>
      </div>
      <MainButton text="watch event" />
    </div>
  );
}
