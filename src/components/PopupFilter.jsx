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
        <h3>Filter</h3>
      <div className="container">
        <form className="filter-form">
            <h3>Jobs</h3>
          <div className="checkbox-group">
            {props.listFilter?.listJob?.map((el) => (
              <label>
                <input
                  type="checkbox"
                  name={el.toLowerCase().replaceAll(" ", "")}
                  value={el.toLowerCase().replaceAll(" ", "")}
                  onChange={props.handleClickJob}
                  // onChange={props.setFilterValJob()}
                />
                {el}
              </label>
            ))}
          </div>

            <h3>Departments</h3>
          <div className="checkbox-group">
            {props.listFilter?.listDepartment?.map((el) => (
              <label>
                <input
                  type="checkbox"
                  name={el.toLowerCase().replaceAll(" ", "")}
                  value={el.toLowerCase().replaceAll(" ", "")}
                  onChange={props.handleClickDepartment}
                />
                {el}
              </label>
            ))}
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
