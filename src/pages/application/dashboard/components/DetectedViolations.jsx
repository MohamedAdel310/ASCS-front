import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { Chart } from "react-google-charts";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Filler,
  Legend
);

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
const labels = [];

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
      data &&
        setTimeout(() => {
          setIsLoaded(true);
        }, 2000);
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

  const test = () => {
    const res = events.map((event) => {
      const eventDate = new Date(event.arriveAt);
      const day = eventDate.getDate();

      // counts[`${day}`] = (counts[`${day}`] || 0) + 1;
      return (counts[`${day}`] = (counts[`${day}`] || 0) + 1);
    });

    console.log("test: ", res);
    console.log("events: ", events);
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "violation",
        data: counts,
        borderColor: "rgb(255, 0, 0)",
        backgroundColor: "rgba(255, 0, 0,.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "none",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      y: {
        min: 0,
        max: 80,
      },

      x: {
        grid: {
          display: false, // Hide the horizontal grid lines
        },
        min: 0,
        max: 31,
        ticks: {
          callback: function (value, index, values) {
            if (value % 2 === 0) {
              return "";
            }
            return value;
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.1, // Adjust the line tension to change the shape
        borderWidth: 1, // Adjust the line width as needed
      },
      point: {
        radius: 3, // Adjust the point radius to change the shape
        borderWidth: 1, // Adjust the point border width as needed
      },
    },
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
      <div className="detected-violations--chart--container">
        <div
          className="attendance-overview--chart--container"
          style={{ width: "800px", height: "360px" }}
        >
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );

  return (
    <div className="dashboard--detected-violations">
      {test()}
      {console.log("counts: ", counts)}
      {isLoaded ? <DetectedViolations /> : <AddCircularProgress />}
    </div>
  );
}
