import React, { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

export default function AttendanceOverview() {
  const [events, setEvents] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [month, setMonth] = useState();

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
      setEvents(data?.data);
      console.log("fetch done===========", data?.data);
      setChartData(
        data?.data.map((data) => {
          return {
            name: data.date.slice(8, 10),
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

  return (
    <div className="dashboard--attendance-overview">
      <div className="header">
        <h3 >Attendance Overview</h3>
        <div className="inputdate">
          <input id="input-date-Attendance"
            type="month"
            onChange={changeDate}
            value={month || dateNow().slice(0, 7)}
          />
        </div>
      </div>
    

      <div className="attendance_overview_chart">
        <AreaChart
          width={720}
          height={350}
          data={chartData}
          margin={{
            left: 10,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
            fill="#8884d8"
            fillOpacity={0.5}
          />
        </AreaChart>
      </div>
    </div>
  );
}
