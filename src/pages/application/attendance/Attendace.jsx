import React, { useState, useEffect } from "react";
import "../style/attendance.css";
import "../../../components/search";

import Header from "./components/Header";
import Filter from "../../../components/Filter";
import Search from "../../../components/search";
import DonutChartComp from "./components/DonutChartComp";
import AttendanceDay from "./components/AttendanceDay";
import AttendanceWeek from "./components/AttendanceWeek";
import AttendanceMonth from "./components/AttendanceMonth";
import AttendanceTableSkeleton from "./components/AttendanceTableSkeleton";
import PopupFilter from "../../../components/PopupFilter";

import listFilter from "../../../Functions/listFilter";
import handleSearch from "../../../Functions/handleSearch";
import today from "../../../Functions/today";
import getAttendanceByDay from "../../../api/getAttendanceByDay";
import SearchFilterBox from "./components/SearchFilterBox";

export default function Attendance() {
  const [data, setData] = useState();
  const [selectedOption, setSelectedOption] = useState("1");
  const [searchRes, setSearchRes] = useState("");
  const [openFilterPopup, setOpenFilterPopup] = useState(false);
  const [filterValJob, setFilterValJob] = useState({});
  const [filterValDepartment, setFilterValDepartment] = useState({});
  const [selectDate, setSelectDate] = useState(today().replaceAll("/", "-"));
  const [isAttendanceLoaded, setIsAttendanceLoaded] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  const handleClickJob = (e) => {
    const inputName = e.target.value;
    const inputStatus = e.target.checked;

    inputStatus
      ? setFilterValJob({ ...filterValJob, [inputName]: 1 })
      : setFilterValJob({ ...filterValJob, [inputName]: 0 });

    // console.log("inputName: ", inputName);
    // console.log("inputStatus: ", inputStatus);
    // console.log("filterValJob: ", filterValJob);
  };

  const handleClickDepartment = (e) => {
    const inputName = e.target.value;
    const inputStatus = e.target.checked;

    inputStatus
      ? setFilterValDepartment({ ...filterValDepartment, [inputName]: 1 })
      : setFilterValDepartment({ ...filterValDepartment, [inputName]: 0 });
  };

  const handleClickSubmitAtend = (e) => {
    console.log("click submit");
    console.log("e.target: ", e);
  };

  useEffect(() => {
    const date = selectDate?.replaceAll("-", "/");

    getAttendanceByDay(date, setData);
    setIsAttendanceLoaded(true);
  }, [selectDate]);

  const handleChangeDate = (e) => {
    setIsAttendanceLoaded(false);
    setSelectDate(e.target.value);
  };

  return (
    <div className="attendance">
      <Header value={selectedOption} onChange={handleOptionChange}>
        <input
          id="input-datepopup"
          type="date"
          onChange={handleChangeDate}
          value={selectDate}
        />
      </Header>
      <DonutChartComp />
      <SearchFilterBox>
        <Search
          onChange={(e) => handleSearch(e, data?.employees, setSearchRes)}
        />
        <Filter
          onClick={() => {
            setOpenFilterPopup(true);
          }}
        />
      </SearchFilterBox>

      {selectedOption === "1" && isAttendanceLoaded ? (
        <AttendanceDay
          data={data}
          searchRes={searchRes}
          filterValJob={filterValJob}
          filterValDepartment={filterValDepartment}
        />
      ) : (
        <AttendanceTableSkeleton />
      )}
      {selectedOption === "2" && <AttendanceWeek />}
      {selectedOption === "3" && <AttendanceMonth />}

      <PopupFilter
        value={openFilterPopup}
        setOpenFilterPopup={setOpenFilterPopup}
        handleClickJob={handleClickJob}
        handleClickDepartment={handleClickDepartment}
        handleClickSubmit={handleClickSubmitAtend}
        setFilterValJob={setFilterValJob}
        listFilter={listFilter(data?.employees)}
      />

      <div className={openFilterPopup ? `blur-background` : ""}></div>
    </div>
  );
}
