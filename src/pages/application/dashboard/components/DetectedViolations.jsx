import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const options = {
  height: 400,
  width: 600,
  legend: { position: "left", maxLines: 3 },
  vAxis: { minValue: 0 },
  chart: { backgroundColor: "red" },
  colors: ["#FB7A21"],
  chartArea: {
    left: 80,
    right: 0,
    top: 20,
    bottom: 100,
  },
};

export default function DetectedViolations(prpos) {
  const [events, setEvents] = useState([]);
  const [month, setMonth] = useState();

  const fetchData = async (date) => {
    // console.log("fetchData date: ", date);
    date || (date = dateNow().replace("-", "/"));

    try {
      const response = await fetch(
        `https://myaz.cyclic.app/api/events/${date.replace("-", "/")}`
      );
      const data = await response.json();
      setEvents(data?.data);
      // console.log("fetch done===========", data?.data);
    } catch (error) {
      // console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(dateNow().slice(0, 7));
  }, []);

  const dateNow = () => {
    const date = new Date();

    const day = String(date.getDay()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  };

  const changeDate = (e) => {
    setMonth(e.target.value);
    fetchData(e.target.value);
  };

  const chartData = (events) => {
    const counts = {};

    events.forEach((event) => {
      const eventDate = new Date(event.arriveAt);
      const day = eventDate.getDate();
      const month = eventDate.getMonth();
      counts[`${day}/${month + 1}`] = (counts[`${day}/${month + 1}`] || 0) + 1;
    });

    const countsArray = Object.entries(counts);
    countsArray.unshift(["date", "value"]);

    // console.log("countsArray: ", countsArray);
    return countsArray;
  };

  // console.log(events);
  // console.log("month: ", month);

  return (
    <div className="dashboard--detected-violations">
      <div className="violation-title">
        <div className="header">
          <h3>Detected Violations</h3>
          <div className="number">{events.length}</div>
          <div className="detected_total_days">In the last 29 days</div>
        </div>
        <div className="option">
          <input
            type="month"
            onChange={changeDate}
            value={month || dateNow().slice(0, 7)}
          />
        </div>
      </div>
      <div className="detected_violations_area_chart">
        <Chart
          chartType="AreaChart"
          width={"630px"}
          height={"500px"}
          data={chartData(events)}
          options={options}
        />
      </div>
    </div>
  );
}
