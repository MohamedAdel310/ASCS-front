import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import getEventsByMonth from "../../../../api/getEventsByMonth";

export const data = [
  ["areas", "Hours per Day"],
  ["Area 1", 15],
  ["Area 2", 9],
  ["Area 3", 5],
  ["Back", 7],
  ["Warehouse", 4],
  ["Office", 7],
];

export const options = {
  pieHole: 0.7,
  is3D: false,
  pieSliceText: "none",
  legend: {
    position: "",
    textStyle: { color: "black", fontSize: 15 },
    alignment: "start",
  },
  slices: {
    0: { color: "#6b5b95" },
    1: { color: "#80ced6" },
    2: { color: "#ff7b25" },
    3: { color: "#82b74b" },
    4: { color: "#ffcc5c" },
    5: { color: "#c83349" },
  },
  chartArea: {
    left: 0,
    right: 20,
    top: 20,
    bottom: 0,
  },
};

export default function HumanPresent() {
  const [eventTypes, setEventTypes] = useState([]);

  const fetchEvents = async () => {
    const res = await getEventsByMonth();
    // console.log("res---------------> ", res);
    const resArray = Object.entries(res.types);
    resArray.unshift(["areas", "Hours per Day"]);
    setEventTypes(resArray);

    return res;
  };

  useEffect(() => {
    // const res = fetchEvents();

    fetchEvents();
  }, []);

  // console.log("eventTypes(): ", eventTypes);

  return (
    <div className="dashboard--human--container">
      <div className="human_present_headers">
        <h4>Events Persent</h4>
        <h3>for this month</h3>
      </div>

      <div className="human_area">
        <Chart
          chartType="PieChart"
          width="470px"
          height="250px"
          data={eventTypes}
          options={options}
        />
      </div>
    </div>
  );
}
