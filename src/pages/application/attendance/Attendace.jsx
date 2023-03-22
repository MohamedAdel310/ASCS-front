import React, { useState } from "react";
// import ChartDonate from "./components/Chart-donate";
import DonutChart from "./components/ChartDonat";
import TableDay from "./components/Table-day";
import "../style/attendance.css";
import "../../../components/search";
import employeeDataday from "./__delete__employeedata.json";
import Search from "../../../components/search";
import Filter from "./components/Filter";
import TableWeak from "./components/Table-weak";
import employeeData from "./attendanceData.json";
import TableMonth from "./components/Table-month";

const AttendanceDay = () => {
  return (
    <div className="attendance_day">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Deparment</th>
            <th>Status</th>
            <th>Arrival Time</th>
            <th>Leave Time</th>
          </tr>
        </thead>
        <tbody>
          {employeeDataday.map(
            ({ name, department, status, arriveTime, leaveTime }) => (
              <TableDay
                name={name}
                department={department}
                status={status}
                arriveTime={arriveTime}
                leaveTime={leaveTime}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
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
  const [selectedOption, setSelectedOption] = useState("1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
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
