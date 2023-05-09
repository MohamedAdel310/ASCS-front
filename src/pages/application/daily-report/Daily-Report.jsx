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

const today = () => {
  const today = new Date();
  const date = today
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");
  return date;
};

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

export default function DailyReport() {
  const [data, setData] = useState();
  const [events, setEvents] = useState();

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch done");
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjc3ZjUzYzZmYzhmN2IxYzUzYzc3MSIsImlhdCI6MTY4MTM5ODAyOCwiZXhwIjoxNjg5MTc0MDI4fQ.IgULvpKaicCHhdS6TL3kfSoeAulggd1iPa7M-Yzfsr4";
      const headers = {
        "Authorization": `Bearer ${token}`,
      };
      {
        today();
      }
      const response = await fetch(apiURL + `events/${today()}`, {
        headers,
      });
      const json = await response.json();
      setData(json.types);
      console.log(json.types);

      localStorage.setItem("employeesData", JSON.stringify(json.data));
      setEvents(json.data);
    };
    fetchData();
  }, []);

  return (
    <div className="daily-report">
      {console.log(events)}
      <CardViolationComp data={data} />

      <div className="daily-report--header">
        <h1>Detected events</h1>
      </div>

      <StatusViolationComp events={events} />
    </div>
  );
}

const CardViolationComp = ({ data }) => {
  return (
    <div className="card-violation-container">
      <CardViolation
        num={data?.vehicles || 0}
        text="Detected vehicles"
        icon={faTruck}
      />
      <CardViolation
        num={data?.unauthorized || 0}
        text="unauthorized persons"
        icon={faUserXmark}
      />
      <CardViolation num={data?.smoke || 0} text="smoking" icon={faSmoking} />
      <CardViolation
        num={data?.ppe || 0}
        text="safety violation"
        icon={faHelmetSafety}
      />
      <CardViolation
        num={data?.phone || 0}
        text="restricted area"
        icon={faHand}
      />
    </div>
  );
};

const StatusViolationComp = ({ events }) => {
  return (
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
  );
};
