import React, { useState, useEffect } from "react";
import CardViolation from "./components/Card-Violation";
import StatusViolation from "./components/Status-Violation";
import "../style/daily-report.css";

import iconVehicles from "../../../../src/assets/icons/vehicles.svg";
import iconRestricted from "../../../../src/assets/icons/gloves.svg";
import iconUnauthorized from "../../../../src/assets/icons/unuothorize.svg";
import iconSmoking from "../../../../src/assets/icons/smoke.svg";
import iconSafety from "../../../../src/assets/icons/helmet.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faHelmetSafety,
  faSmoking,
  faTruck,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";
// import { faCircleExclamation } from "@fortawesome/free-brands-svg-icons";

const apiURL = "https://myaz.cyclic.app/api/";

export default function DailyReport() {
  const [data, setData] = useState();
  const [events, setEvents] = useState();

  const criticalLevelFun = (type) => {
    let num = 1;
    type === "smoke" && (num = 2);
    type === "ppe" && (num = 3);
    type === "phone" && (num = 2);
    type === "unuthourize" && (num = 4);
    type === "fight" && (num = 4);
    return num;
  };

  const cricicalLevelType = (type) => {
    let str = type;
    type === "ppe" && (str = "personal protective equipment");

    return str;
  };

  const cricicalLevelMessage = (type, arriveAt, info) => {
    let str = `A violation (${
      type === "ppe" ? "personal protective equipment" : type
    }) detected at ${arriveAt.slice(0, 10)} -Reported camera: ${info.cam}`;

    type === "smoke" &&
      (str = `Detected employee somke at the factory at ${arriveAt.slice(
        0,
        10
      )} -The employee id is ${info.detected} -Reported camera: ${info.cam}`);
    type === "phone" &&
      (str = `Detected employee use phone at the factory at ${arriveAt.slice(
        0,
        10
      )} -The employee id is ${info.detected} -Reported camera: ${info.cam}`);
    type === "unuthourize" &&
      (str = `Detected unouthorized person at the factory at ${arriveAt.slice(
        0,
        10
      )} -Reported camera: ${info.cam}`);

    return str;
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch done");
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjc3ZjUzYzZmYzhmN2IxYzUzYzc3MSIsImlhdCI6MTY4MTM5ODAyOCwiZXhwIjoxNjg5MTc0MDI4fQ.IgULvpKaicCHhdS6TL3kfSoeAulggd1iPa7M-Yzfsr4";
      const headers = {
        "Authorization": `Bearer ${token}`,
      };
      const response = await fetch(apiURL + "events/05-05-2023", {
        headers,
      });
      const json = await response.json();
      setData(json.data);

      localStorage.setItem("employeesData", JSON.stringify(json.data));
      setEvents(json.data);
    };
    fetchData();
  }, []);

  return (
    <div className="daily-report">
      {console.log(events)}
      <CardViolationComp />

      <div className="daily-report--header">
        <h1>Detected events</h1>
      </div>

      {/* <StatusViolationComp /> */}

      <div className="status-box">
        {events?.map((event) => {
          return (
            <StatusViolation
              level={criticalLevelFun(event.type)}
              event={cricicalLevelType(event.type)}
              eventMessage={cricicalLevelMessage(
                event.type,
                event.arriveAt,
                event.info
              )}
            />
          );
        })}
      </div>
    </div>
  );
}

const CardViolationComp = () => {
  return (
    <div className="card-violation-container">
      <CardViolation num="8" text="Detected vehicles" icon={faTruck} />
      <CardViolation num="3" text="unauthorized persons" icon={faUserXmark} />
      <CardViolation num="5" text="smoking" icon={faSmoking} />
      <CardViolation num="6" text="safety violation" icon={faHelmetSafety} />
      <CardViolation num="10" text="restricted area" icon={faHand} />
    </div>
  );
};

const StatusViolationComp = () => {
  return (
    <div className="status-box">
      {events?.map((event) => {
        return (
          <StatusViolation
            level="1"
            event={event.type}
            eventMessage="Detected vehicle entered the factory at 19:50 -The plate number
      is 442 -Reported camera: A70"
          />
        );
      })}
      {/* <StatusViolation
        level="3"
        event={events.type}
        eventMessage={`Detected vehicle entered the factory at 19:50 -The plate number
      is 442 -Reported camera: A70`}
      />
      <StatusViolation
        level="2"
        event="Restricted Area"
        eventMessage="Detected vehicle entered the factory at 19:50 -The plate number
      is 442 -Reported camera: A70"
      />
      <StatusViolation
        level="4"
        event="Unauthorized Person"
        eventMessage="Detected vehicle entered the factory at 19:50 -The plate number
      is 442 -Reported camera: A70"
      /> */}
    </div>
  );
};
