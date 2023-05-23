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
import MainButton from "../../../components/button-main";
import PopupFilter from "../../../components/PopupFilter";

import handleDisable from "../../../components/handleDisable.js";

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
  const [fetchDataTrigger, setFetchDataTrigger] = useState();
  const [selectedOption, setSelectedOption] = useState("1");
  const [searchRes, setSearchRes] = useState("");
  const [openFilterPopup, setOpenFilterPopup] = useState(false);
  const [filterValJob, setFilterValJob] = useState({});
  const [filterValDepartment, setFilterValDepartment] = useState({});
  // const [listJob, setListJob] = useState([]);
  // const [listDepartment, setListDepartment] = useState([]);

  // useEffect(() => {
  const listFilter = () => {
    let listJob = [];
    let listDepartment = [];

    data?.map(({ job, department }) => {
      listJob.includes(job) ? "" : listJob.push(job);
      listDepartment.includes(department)
        ? ""
        : listDepartment.push(department);
    });

    console.log("listJob: ", listJob);
    console.log("listDepartment: ", listDepartment);

    return { listJob, listDepartment };
  };
  //   listFilter();
  // });

  console.log("data: ", data);

  const handleSearch = (e) => {
    setSearchRes(
      data?.map((emp) => {
        let result;
        emp?.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
          (result = emp.name);
        return result;
      })
    );
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  const storedData = JSON.parse(localStorage.getItem("attendanceData"));

  const handleClickJob = (e) => {
    const inputName = e.target.value;
    const inputStatus = e.target.checked;

    inputStatus
      ? setFilterValJob({ ...filterValJob, [inputName]: 1 })
      : setFilterValJob({ ...filterValJob, [inputName]: 0 });
    // setFilterValJob(...filterValJob,)

    console.log("inputName: ", inputName);
    console.log("inputStatus: ", inputStatus);
    console.log("filterValJob: ", filterValJob);
  };

  const handleClickDepartment = (e) => {
    const inputName = e.target.value;
    const inputStatus = e.target.checked;

    inputStatus
      ? setFilterValDepartment({ ...filterValDepartment, [inputName]: 1 })
      : setFilterValDepartment({ ...filterValDepartment, [inputName]: 0 });
    // setFilterValJob(...filterValJob,)
  };

  const handleClickSubmitAtend = (e) => {
    console.log("click submit");
    console.log("e.target: ", e);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch done");
      const response = await fetch(
        "https://myaz.cyclic.app/api/attendance/24-03-2023"
      );
      const json = await response.json();
      setData(json.data);
      localStorage.setItem("attendanceData", JSON.stringify(json.data));
    };

    if (storedData) {
      setData(storedData);
    } else {
      fetchData();
    }

    if (fetchDataTrigger) {
      fetchData();
      setFetchDataTrigger(false);
    }
  }, [fetchDataTrigger]);

  const FetchAttendanceDay = () => {
    return (
      <>
        {data?.map(
          ({ employee_id, name, department, job, arrive_at }, index) =>
            (handleDisable(
              job,
              department,
              filterValJob,
              filterValDepartment
            ) ||
              "") && (
              <TableDay
                employee_id={employee_id}
                num={index}
                name={name}
                department={department}
                jobTitle={job}
                arriveTime={displayTime(arrive_at)}
                searchRes={searchRes}
              />
            )
        )}
        {console.log("done")}
      </>
    );
  };

  const AttendanceDay = () => {
    return (
      <div className="attendance_day">
        <MainButton
          className="add"
          text="refresh"
          onClick={handleFetchDataClick}
        />
        <table>
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Name</th>
              <th>Job Title</th>
              <th>Deparment</th>
              <th>Arrival Time</th>
            </tr>
          </thead>
          <tbody>
            <FetchAttendanceDay />
          </tbody>
        </table>
      </div>
    );
  };

  const handleFetchDataClick = () => {
    console.log("fethch done mmmm");
    setFetchDataTrigger(true);
  };

  const today = () => {
    const today = new Date();
    const date = today.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const [day, month, year] = date.split("/");

    return `${year}-${month}-${day}`;
  };

  return (
    <div className="attendance">
      <div className="attendance--title">
        <h3>Attendance</h3>
        <div className="ends">
          {/* {console.log("today(): ", today())} */}
          {/* <div className="day"> 9</div> */}
          <input type="date" value={today()} />
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
        <Search onChange={handleSearch} />
        <Filter
          onClick={() => {
            setOpenFilterPopup(true);
          }}
        />
      </div>

      {selectedOption === "1" && <AttendanceDay />}
      {selectedOption === "2" && <AttendanceWeak />}
      {selectedOption === "3" && <AttendanceMonth />}

      <PopupFilter
        value={openFilterPopup}
        setOpenFilterPopup={setOpenFilterPopup}
        handleClickJob={handleClickJob}
        handleClickDepartment={handleClickDepartment}
        handleClickSubmit={handleClickSubmitAtend}
        setFilterValJob={setFilterValJob}
        listFilter={listFilter()}
      />
    </div>
  );
}
