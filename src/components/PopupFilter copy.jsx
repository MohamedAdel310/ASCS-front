import React, { useState } from "react";
import "./../pages/application/style/popups.css";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PopupFilter({
  value,
  setOpenFilterPopup,
  handleClickJob,
  handleClickDepartment,
  listFilter,
}) {
  const handelPopupFilterClose = () => {
    setOpenFilterPopup(false);
  };

  return (
    <div className={`popup--filter popup ${value || "display-popup-false"}`}>
      <h3 className="popup--header">Filter</h3>
      <div className="container">
        <form className="filter-form">
          <h3>Jobs</h3>
          <div className="checkbox-group">
            {listFilter?.listJob?.map((el) => (
              <label>
                <input
                  type="checkbox"
                  name={el.toLowerCase().replaceAll(" ", "")}
                  value={el.toLowerCase().replaceAll(" ", "")}
                  onChange={handleClickJob}
                  // onChange={setFilterValJob()}
                />
                {el}
              </label>
            ))}
          </div>

          <h3>Departments</h3>
          <div className="checkbox-group">
            {listFilter?.listDepartment?.map((el) => (
              <label>
                <input
                  type="checkbox"
                  name={el.toLowerCase().replaceAll(" ", "")}
                  value={el.toLowerCase().replaceAll(" ", "")}
                  onChange={handleClickDepartment}
                />
                {el}
              </label>
            ))}
          </div>
        </form>
      </div>

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
