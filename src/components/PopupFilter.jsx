import React from "react";
import "./../pages/application/style/popups.css";
import PopupFilterCheckbox from "./PopupFilterCheckbox";

export default function PopupFilter({
  handleClickJob,
  handleClickDepartment,
  listFilter,
}) {
  return (
    <>
      <h3 className="popup--header">Filter</h3>
      <div className="container">
        <form className="filter-form">
          <h3>Jobs</h3>
          <div className="checkbox-group">
            <PopupFilterCheckbox
              filter={listFilter?.listJob}
              onChange={handleClickJob}
            />
          </div>

          <h3>Departments</h3>
          <div className="checkbox-group">
            <PopupFilterCheckbox
              filter={listFilter?.listDepartment}
              onChange={handleClickDepartment}
            />
          </div>
        </form>
      </div>
    </>
  );
}

{
}
