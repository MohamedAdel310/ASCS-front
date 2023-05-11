import React, { useState, useEffect } from "react";
import CardViolation from "./components/Card-Violation";
import StatusViolation from "./components/Status-Violation";
import "../style/daily-report.css";

// import iconVehicles from "../../../../src/assets/icons/vehicles.svg";
// import iconRestricted from "../../../../src/assets/icons/gloves.svg";
// import iconUnauthorized from "../../../../src/assets/icons/unuothorize.svg";
// import iconSmoking from "../../../../src/assets/icons/smoke.svg";
// import iconSafety from "../../../../src/assets/icons/helmet.svg";

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

const criticalLevelFun = (type) => {
  let num = 1;
  type === "smoke" && (num = 2);
  type === "ppe" && (num = 3);
  type === "phone" && (num = 2);
  type === "unauthourize" && (num = 4);
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
  const [day, setDay] = useState();

  const today = () => {
    const today = new Date();
    const date = today.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const [day, month, year] = date.split("/");

    return `${year}/${month}/${day}`;
  };

  const fetchData = async (date) => {
    console.log("fetch done");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjc3ZjUzYzZmYzhmN2IxYzUzYzc3MSIsImlhdCI6MTY4MTM5ODAyOCwiZXhwIjoxNjg5MTc0MDI4fQ.IgULvpKaicCHhdS6TL3kfSoeAulggd1iPa7M-Yzfsr4";
    const headers = {
      "Authorization": `Bearer ${token}`,
    };

    const response = await fetch(apiURL + `events/${date || today()}`, {
      headers,
    });
    const json = await response.json();
    setData(json.types);
    console.log(json.types);

    setEvents(json.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dateChange = (event) => {
    const date = event.target.value.replaceAll("-", "/");
    setDay(date);

    console.log("hello ======= date change to: ", date);
    fetchData(date);
  };

  return (
    <div className="daily-report">
      <CardViolationComp data={data} />

      <div className="daily-report--header">
        <h1>Detected events</h1>
        <input
          type="date"
          onChange={dateChange}
          value={day?.replaceAll("/", "-") || today().replaceAll("/", "-")}
        />
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
        key="1"
      />
      <CardViolation
        num={data?.unauthorized || 0}
        text="unauthorized persons"
        icon={faUserXmark}
        key="2"
      />
      <CardViolation num={data?.smoke || 0} text="smoking" icon={faSmoking} />
      <CardViolation
        num={data?.ppe || 0}
        text="safety violation"
        icon={faHelmetSafety}
        key="3"
      />
      <CardViolation
        num={data?.phone || 0}
        text="restricted area"
        icon={faHand}
        key="4"
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
            key={event._id}
          />
        );
      })}
    </div>
  );
};
