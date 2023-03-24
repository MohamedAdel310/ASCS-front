import React, { useState, useEffect } from "react";
// import ChartDonate from "./components/Chart-donate";
import DonutChart from "./components/ChartDonat";
import TableDay from "./components/Table-day";
import "../style/attendance.css";
import "../../../components/search";
// import employeeDataday from "./__delete__employeedata.json";
// import attendanceData from "../../../../Data/randomAttendanceData.json";
import Search from "../../../components/search";
import Filter from "../../../components/Filter";
import TableWeak from "./components/Table-weak";
import employeeData from "../../../../Data/attendanceData.json";
import TableMonth from "./components/Table-month";

const displayTime = (dateString) => {
  const date = new Date(dateString);
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  return date.toLocaleTimeString("en-US", options);
};

const AttendanceWeak = () => {
  return (
    <div className="attendance_week">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Deparment</th>
            {Array(7)
              .fill()
              .map((__, index) => (
                <th>{index + 1}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {employeeData.map(({ name, department, attendance }) => (
            <TableWeak
              name={name}
              department={department}
              attendanceData={attendance}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AttendanceMonth = () => {
  return (
    <div className="attendance_month">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Deparment</th>
            {Array(30)
              .fill()
              .map((__, index) => (
                <th>{index + 1}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {employeeData.map(({ name, department, attendance }) => (
            <TableMonth
              name={name}
              department={department}
              attendanceData={attendance}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Attendance() {
  const [data, setData] = useState();
  const [selectedOption, setSelectedOption] = useState("1");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  const storedData = JSON.parse(localStorage.getItem("attendanceData"));

  useEffect(() => {
    if (storedData) {
      setData(storedData);
    } else {
      const fetchData = async () => {
        const response = await fetch(
          "https://myaz.cyclic.app/api/attendance/24-03-2023"
        );
        const json = await response.json();
        setData(json.data);
        localStorage.setItem("attendanceData", JSON.stringify(json.data));
      };
      fetchData();
    }
  }, []);
  const AttendanceDay = () => {
    return (
      <div className="attendance_day">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job Title</th>
              <th>Deparment</th>
              <th>Arrival Time</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(({ name, department, job, arrive_at }, index) => (
              <TableDay
                num={index}
                name={name}
                department={department}
                jobTitle={job}
                arriveTime={displayTime(arrive_at)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="attendance">
      <div className="attendance--title">
        <h3>Attendance</h3>
        <div className="ends">
          <div className="day"> 9</div>
          <select
            name="date"
            id="date"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="1">Day</option>
            <option value="2">week</option>
            <option value="3">Month</option>
          </select>
        </div>
      </div>
      <div className="chartDonate">
        <DonutChart
          percent=".25"
          num="10"
          text="Absense"
          charColorMain="#d92c8a"
          charColorSecond="#ffa8d7"
        />
        <DonutChart
          percent=".75"
          num="9"
          text="Late"
          charColorMain="#540375"
          charColorSecond="#d3a6e5"
        />
        <DonutChart
          percent=".5"
          num="25"
          text="Undertime"
          charColorMain="#ff7000"
          charColorSecond="#ffcaa0"
        />
        <DonutChart
          percent=".9"
          num="7"
          text="Overtime"
          charColorMain="#ffbf00"
          charColorSecond="#ffeebc"
        />
        {/* <ChartDonate num="9" text="Absense" clName="circle1" />
        <ChartDonate num="29" text="Late" clName="circle2" />
        <ChartDonate num="18" text="Undertime" clName="circle3" />
        <ChartDonate num="8" text="Overtime" clName="circle4" /> */}
      </div>
      <div className="search-box">
        <Search />
        <Filter />
      </div>

      {selectedOption === "1" && <AttendanceDay />}
      {selectedOption === "2" && <AttendanceWeak />}
      {selectedOption === "3" && <AttendanceMonth />}
    </div>
  );
}
