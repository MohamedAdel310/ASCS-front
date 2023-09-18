import React from "react";
import "./../pages/application/style/popups.css";
import PopupFilterCheckbox from "./PopupFilterCheckbox";
import handleFilter from "../Functions/handleFilter";

export default function PopupFilter({ dispatch, listFilter, filter }) {
  return (
    <>
      <h3 className="popup--header">Filter</h3>
      <div className="container">
        <form className="filter-form">
          <h3>Jobs</h3>
          <div className="checkbox-group">
            <PopupFilterCheckbox
              listCheckBoxes={listFilter?.listJob}
              onChange={(e) => handleFilter(e, "job", dispatch)}
              filter={filter.filterJob}
            />
          </div>

          <h3>Departments</h3>
          <div className="checkbox-group">
            <PopupFilterCheckbox
              listCheckBoxes={listFilter?.listDepartment}
              onChange={(e) => handleFilter(e, "department", dispatch)}
              filter={filter.filterDepartment}
            />
          </div>
        </form>
        <button onClick={() => dispatch({ type: "reset" })}>RESET</button>
      </div>
    </>
  );
}
