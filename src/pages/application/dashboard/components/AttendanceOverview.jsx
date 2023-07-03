import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";

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
        height: "500px",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default function AttendanceOverview() {
  const [events, setEvents] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [month, setMonth] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

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

  const fetchData = async (date) => {
    date || (date = dateNow().slice(0, 7).replace("-", "/"));

    try {
      const response = await fetch(
        `https://myaz.cyclic.app/api/attendance/dashboard/${date.replace(
          "-",
          "/"
        )}`
      );
      const data = await response.json();
      data &&
        setTimeout(() => {
          setIsLoaded(true);
        }, 2000);

      setEvents(data?.data);
      console.log("fetch done===========", data?.data);
      setChartData(
        data?.data.map((data) => {
          return {
            name: data.date.slice(8, 10) * 1,
            value: data.employees,
          };
        })
      );

      // console.log("test: ", test);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const labels = [];

  const counts = {
    "0": 0,
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
    const res = chartData.map((x) => {
      return (counts[`${x.name}`] = x.value);
    });

    console.log("test: ", res);
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Attend",
        data: counts,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
        max: 40,
      },
      x: {
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
        tension: 0, // Set tension to 0 for straight lines
        borderWidth: 2,
        borderCapStyle: "round", // Change the shape of line endings
      },
    },
  };

  const AttendanceOverviewComponent = () => {
    return (
      <>
        <div className="header">
          <h3>Attendance Overview</h3>
          <div className="inputdate">
            <input
              className="date-input--month"
              type="month"
              onChange={changeDate}
              value={month || dateNow().slice(0, 7)}
            />
          </div>
        </div>

        <div className="attendance_overview_chart">
          <div
            className="attendance-overview--chart--container"
            style={{ width: "800px", height: "360px" }}
          >
            <Line options={options} data={data} />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="dashboard--attendance-overview">
      {test()}
      {console.log("counts: ", counts)}
      {isLoaded ? <AttendanceOverviewComponent /> : <AddCircularProgress />}
    </div>
  );
}
