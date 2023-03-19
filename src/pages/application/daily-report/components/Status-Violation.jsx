import React from "react";
import MainButton from "../../../../components/button-main";
import warningIcon from "../../../../assets/image/warning.png";

export default function StatusViolation(props) {
  const criticalLevel = (lev) => {
    return `critcal-level ${
      props.level > lev ? "critcal-level__active" : "critcal-level__inactive"
    }`;
  };

  return (
    <div className="status-siola" style={{ display: "flex" }}>
      <img src={warningIcon} alt="" style={{ paddingRight: "10px" }} />
      <div style={{ width: "100%" }}>
        <h2 className="status-violation--header">{props.event}</h2>
        <h3 className="status-violation--info">{props.eventMessage}</h3>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="critcal_container">
            <h4 className="critcal_header">Critcal Level</h4>

            <div className={criticalLevel(0)}></div>
            <div className={criticalLevel(1)}></div>
            <div className={criticalLevel(2)}></div>
            <div className={criticalLevel(3)}></div>
          </div>

          <MainButton text="watch event" />
        </div>
      </div>
    </div>
  );
}
