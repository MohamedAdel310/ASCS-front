import React, { useState, useEffect } from "react";
import { Alert, AlertTitle, Skeleton } from "@mui/material";
import noResponse from "../../../assets/image/noResponse.jpg";

import CardViolation from "./components/Card-Violation";
import StatusViolation from "./components/Status-Violation";
import fetchData from "../../../api/getEventsByDay";
import "../style/daily-report.css";
import eventDetails from "../../../Functions/eventDetails";
import jsonText from "../../../assets/text.json";

import {
  faHand,
  faHelmetSafety,
  faSmoking,
  faTruck,
  faUserXmark,
  faUser,
  faWarning,
  faVest,
  faPhone,
  faMobileAndroid,
  faPersonCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const criticalLevelFun = (type) => {
  let num = 1;
  type === "smoke" && (num = 2);
  type === "ppe" && (num = 3);
  type === "phone" && (num = 2);
  type === "unauthorized" && (num = 4);
  type === "fight" && (num = 4);
  type === "vest" && (num = 2);
  type === "helmet" && (num = 2);
  type === ("phone" || "answer phone" || "look at phone") && (num = 2);
  return num;
};

const cricicalLevelType = (type) => {
  let str = type;
  type === "ppe" && (str = jsonText.ppe);

  return str;
};

const EmptyViolationCards = () => {
  return (
    <>
      <CardViolation
        num={0}
        text={"fight"}
        icon={handleIcon("fight")}
        key={1}
      />
      <CardViolation
        num={0}
        text={"phone"}
        icon={handleIcon("phone")}
        key={2}
      />
      <CardViolation
        num={0}
        text={"unauthorized"}
        icon={handleIcon("unauthorized")}
        key={3}
      />
      <CardViolation
        num={0}
        text={"smoke"}
        icon={handleIcon("smoke")}
        key={4}
      />
    </>
  );
};

const RealVoilationCards = ({ data }) => {
  console.log("-----------------: ");
  return Object.keys(data)?.map((el, index) => (
    <CardViolation num={data[el]} text={el} icon={handleIcon(el)} key={index} />
  ));
};

const StatusViolationCards = ({ events, isViolationsLoaded }) => {
  if (events.length) {
    return (
      isViolationsLoaded &&
      events.map((event) => (
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
      ))
    );
  } else {
    // return <h1>There is no Violations today</h1>;
    return (
      isViolationsLoaded && (
        // <Alert
        //   severity="info"
        //   variant="outlined"
        //   style={{ width: "700px" }}
        //   sx={{ fontSize: 20 }}
        // >
        //   <AlertTitle>Message</AlertTitle>
        //   There is no Violations today
        // </Alert>

        <img
          src={noResponse}
          alt="no violations in this day"
          className="no-vilations-img"
        />
      )
    );
  }
};

const StatusViolationSkeleton = () => {
  return (
    <>
      {Array(6)
        .fill()
        .map(() => (
          <Skeleton
            variant="rounded"
            animation="wave"
            width={"100%"}
            height={100}
          />
        ))}
    </>
  );
};

export default function DailyReport() {
  const [data, setData] = useState();
  const [events, setEvents] = useState();
  const [day, setDay] = useState();
  const [isViolationsLoaded, setIsViolationsLoaded] = useState(false);

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
    console.log("-----------------res: ", res.results);
    res && setIsViolationsLoaded(true);
    setData(res?.types);
    setEvents(res?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const dateChange = (event) => {
    setIsViolationsLoaded(false);
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
        <input
          id="inputdate_dailyreport"
          className="date-input--month"
          type="date"
          onChange={dateChange}
          value={day?.replaceAll("/", "-") || today().replaceAll("/", "-")}
        />
      </div>

      <StatusViolationComp
        events={events}
        isViolationsLoaded={isViolationsLoaded}
      />
    </div>
  );
}
const handleIcon = (event) => {
  let res = faWarning;
  event === "smoke" && (res = faSmoking);
  event === "unauthorized" && (res = faPersonCircleExclamation);
  event === "ppe" && (res = faHelmetSafety);
  event === "truck" && (res = faTruck);
  event === "hand" && (res = faHand);
  event === "fight" && (res = faUser);
  event === "vest" && (res = faVest);
  event === "helmet" && (res = faHelmetSafety);
  event === ("phone" || "answer phone" || "look at phone") &&
    (res = faMobileAndroid);

  return res;
};

const CardViolationComp = ({ data }) => {
  return (
    <div className="card-violation-container">
      {data && Object.keys(data).length ? (
        <RealVoilationCards data={data} />
      ) : (
        <EmptyViolationCards />
      )}
    </div>
  );
};

const StatusViolationComp = ({ events, isViolationsLoaded }) => {
  return (
    <div className="status-box">
      {events ? (
        <StatusViolationCards
          events={events}
          isViolationsLoaded={isViolationsLoaded}
        />
      ) : (
        <StatusViolationSkeleton />
      )}
      {isViolationsLoaded || <StatusViolationSkeleton />}
    </div>
  );
};
