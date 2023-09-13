import React, { useState, useEffect } from "react";
import "../style/dashboard.css";

import AttendanceOverview from "./components/AttendanceOverview";
import DetectedViolations from "./components/DetectedViolations";
import HumanPresent from "./components/HumanPresent";
import LastEventDetected from "./components/LastEventDetected";
import LateOverview from "./components/LateOverview";
import WorkersPerformance from "./components/WorkersPerformance";
import CardContainer from "./components/CardContainer";

import eventDetails from "../../../Functions/eventDetails";
import getEventsByMonth from "../../../api/getEventsByMonth";
import getEventsByDay from "../../../api/getEventsByDay";
import jsonText from "../../../assets/text.json";

export default function MainContent() {
  const [eventTypesCount, setEventTypesCount] = useState();
  const [events, setEvents] = useState();

  const fetchDataDay = async () => {
    const res = await getEventsByDay();
    setEvents(res.data);
  };

  const fetchDataMonth = async () => {
    const res = await getEventsByMonth();
    setEventTypesCount(res.types);
  };

  useEffect(() => {
    fetchDataDay();
    fetchDataMonth();
  }, []);

  const text = events?.map((event) =>
    eventDetails(event.type, event.arriveAt, event.info.cam)
  );

  return (
    <div className="dashboard_nomain">
      <DetectedViolations />
      <AttendanceOverview />
      <HumanPresent />
      <LateOverview />
      <WorkersPerformance />
      <CardContainer
        eventTypesCount={eventTypesCount}
        LastEventDetected={LastEventDetected}
        text={text}
      />
    </div>
  );
}
