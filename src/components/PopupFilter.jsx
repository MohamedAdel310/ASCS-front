import React, { useState } from "react";
import MainButton from "./button-main";
import "./../pages/application/style/popups.css";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PopupFilter(props) {
  const handelPopupFilter = () => {
    props.setOpenFilterPopup(false);
    props.handleClickSubmit();
  };

  const handelPopupFilterClose = () => {
    props.setOpenFilterPopup(false);
  };

  return (
    <div
      className={`popup--filter popup ${props.value || "display-popup-false"}`}
    >
      <div className="container">
        <form className="filter-form">
          <div className="checkbox-group">
            <h3>Jobs:</h3>
            <label>
              <input
                type="checkbox"
                name="engineer"
                value="engineer"
                onClick={props.handleClickJob}
                // onChange={props.setFilterValJob()}
              />
              Engineer
            </label>
            <label>
              <input
                type="checkbox"
                name="job2"
                value="job2"
                onClick={props.handleClickJob}
                // onChange={props.setFilterValJob()}
              />
              Job 2
            </label>
            <label>
              <input
                type="checkbox"
                name="job3"
                value="job3"
                onClick={props.handleClickJob}
                // onChange={props.setFilterValJob()}
              />
              Job 3
            </label>
            <label>
              <input
                type="checkbox"
                name="job4"
                value="job4"
                onClick={props.handleClickJob}
                // onChange={props.setFilterValJob()}
              />
              Job 4
            </label>
          </div>

          <div className="checkbox-group">
            <h3>Departments:</h3>
            <label>
              <input
                type="checkbox"
                name="dept1"
                value="dept1"
                onClick={props.handleClickDepartment}
              />
              Department 1
            </label>
            <label>
              <input
                type="checkbox"
                name="dept2"
                value="dept2"
                onClick={props.handleClickDepartment}
              />
              Department 2
            </label>
            <label>
              <input
                type="checkbox"
                name="dept3"
                value="dept3"
                onClick={props.handleClickDepartment}
              />
              Department 3
            </label>
            <label>
              <input
                type="checkbox"
                name="dept4"
                value="dept4"
                onClick={props.handleClickDepartment}
              />
              Department 4
            </label>
          </div>
        </form>
      </div>
      {/* <MainButton
        className="addBtn"
        text="Apply Filters"
        onClick={handelPopupFilter}
      /> */}
      <div
        className="closeBtn"
        onClick={handelPopupFilterClose}
        style={{ backgroundColor: "#d32f2f" }}
      >
        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
      </div>
    </div>
    // </div>
  );
}

{
  /* <MainButton text="" onClick={handelPopupFilter} /> */
}
