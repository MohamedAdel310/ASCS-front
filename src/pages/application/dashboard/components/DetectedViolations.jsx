import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { Chart } from "react-google-charts";

export const options = {
  height: 350,
  width: 750,
  legend: { position: "right", maxLines: 5 },
  vAxis: { minValue: 10 },
  chart: { backgroundColor: "red" },
  colors: ["#de4548"],
  chartArea: {
    left: 20,
    right: 0,
    top: 20,
    bottom: 50,
  },
};

const AddCircularProgress = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "550px",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default function DetectedViolations() {
  const [events, setEvents] = useState([]);
  const [month, setMonth] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async (date) => {
    // console.log("fetchData date: ", date);
    date || (date = dateNow().replace("-", "/"));

    try {
      const response = await fetch(
        `https://myaz.cyclic.app/api/events/${date.replace("-", "/")}`
      );
      const data = await response.json();
      setEvents(data?.data);
      data && setIsLoaded(true);
      // console.log("fetch done===========", data?.data);
    } catch (error) {
      console.log("Error fetching data:", error);
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
    setIsLoaded(false);
    setMonth(e.target.value);
    fetchData(e.target.value);
  };

  const chartData = (events) => {
    const counts = {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
    };

    events.forEach((event) => {
      const eventDate = new Date(event.arriveAt);
      const day = eventDate.getDate();
      counts[`${day}`] = (counts[`${day}`] || 0) + 1;
    });

    const countsArray = Object.entries(counts);
    countsArray.unshift(["date", "value"]);

    // console.log("countsArray: ", countsArray);
    // console.log("counts: ", counts);
    // console.log("countsArray: ", countsArray);
    return countsArray;
  };

  const DetectedViolations = () => (
    <>
      <div className="violation-title">
        <div className="header">
          <h3>Detected Violations</h3>
          <div className="number">{events.length}</div>
          <div className="detected_total_days">In this month</div>
        </div>
        <div className="option">
          <input
            id="input-deteceddate"
            type="month"
            onChange={changeDate}
            value={month || dateNow().slice(0, 7)}
          />
        </div>
      </div>
      <div className="detected_violations_area_chart">
        <Chart
          chartType="AreaChart"
          width={"700px"}
          height={"400px"}
          data={chartData(events)}
          options={options}
        />
      </div>
    </>
  );

  return (
    <div className="dashboard--detected-violations">
      {isLoaded ? <DetectedViolations /> : <AddCircularProgress />}
    </div>
  );
}
