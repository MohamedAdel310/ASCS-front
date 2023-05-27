import React, { useState, useEffect } from "react";
import CardViolation from "./components/Card-Violation";
import StatusViolation from "./components/Status-Violation";
import fetchData from "../../../api/getEventsByDay";
import "../style/daily-report.css";
import eventDetails from "../../../Functions/eventDetails";
import jsonText from "../../../assets/text.json";

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
  faUser,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";

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
  type === "ppe" && (str = jsonText.ppe);

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

  const getData = async (date) => {
    const res = date ? await fetchData(date) : await fetchData();
    setData(res?.types);
    setEvents(res?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const dateChange = (event) => {
    const date = event.target.value.replaceAll("-", "/");
    setDay(date);

    console.log("hello ======= date change to: ", date);
    getData(date);
  };

  return (
    <div className="daily-report">
      <CardViolationComp data={data} />

      <div className="daily-report--header">
        <h1>Detected events</h1>
        <input id="inputdate_dailyreport"
          type="date"
          onChange={dateChange}
          value={day?.replaceAll("/", "-") || today().replaceAll("/", "-")}
        />
      </div>

      <StatusViolationComp events={events} />
    </div>
  );
}
const handleIcon = (event) => {
  let res = faWarning;
  event === "smoke" && (res = faSmoking);
  event === "unauthorize" && (res = faUserXmark);
  event === "ppe" && (res = faHelmetSafety);
  event === "truck" && (res = faTruck);
  event === "hand" && (res = faHand);
  event === "fight" && (res = faUser);

  return res;
};

const CardViolationComp = ({ data }) => {
  return (
    <div className="card-violation-container">
      {data &&
        Object.keys(data)?.map((el, index) => (
          <CardViolation
            num={data[el]}
            text={el}
            icon={handleIcon(el)}
            key={index}
          />
        ))}
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
            eventMessage={eventDetails(
              event.type,
              event.arriveAt,
              event.info.cam
            )}
            key={event._id}
          />
        );
      })}
    </div>
  );
};
