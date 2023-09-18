import React, { useState, useEffect, useReducer } from "react";
import "../style/employees.css";
import "../style/popups.css";
import "../../../components/search";
import EmployeeTable from "./components/Empolyees-table";
import PopupFilter from "../../../components/PopupFilter";
import Popup from "../../../components/Popup";
import PopupAddEmployee from "./components/PopupAddEmployee";
import TableSkeleton from "./components/TableSkeleton";
import EmployeesTable from "./components/EmployeesTable";
import EmployeeControl from "./components/EmployeeControl";
import Search from "../../../components/search";
import Filter from "../../../components/Filter";

import handleDisable from "../../../Functions/handleDisable";
import getAllEmployees from "../../../api/getAllEmployees";
import listFilter from "../../../Functions/listFilter";
import handleSearch from "../../../Functions/handleSearch";
import handleFilter from "../../../Functions/handleFilter";
import reducer from "../../../Functions/reducerFilter";

const initialState = {
  filterJob: {},
  filterDepartment: {},
};

export default function Employees() {
  const [employeesData, setEmployeesData] = useState();
  const [openEmployeePopup, setOpenEmployeePopup] = useState(false);
  const [openFilterPopup, setOpenFilterPopup] = useState(false);
  const [searchRes, setSearchRes] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const [filter, dispatch] = useReducer(reducer, initialState);

  // get employee data
  useEffect(() => {
    getAllEmployees(setEmployeesData, setIsLoaded);
  }, []);

  const EmployeesDataTable = () => {
    return employeesData.map(
      (emp) =>
        handleDisable(emp, filter) && (
          <EmployeeTable
            key={emp.employee_id}
            employee={emp}
            handleSearch={searchRes}
            handleFilterJob={filter.filterJob}
          />
        )
    );
  };

  return (
    <div className="employee">
      <EmployeeControl>
        <button
          className="add"
          onClick={() => {
            setOpenEmployeePopup(true);
            setOpenFilterPopup(false);
          }}
        >
          Add Employee
        </button>
        <Search
          onChange={(e) => handleSearch(e, employeesData, setSearchRes)}
        />
        <Filter
          onClick={() => {
            setOpenFilterPopup(true);
            setOpenEmployeePopup(false);
          }}
        />
      </EmployeeControl>

      {!isLoaded && <TableSkeleton />}
      {isLoaded && (
        <EmployeesTable employeesData={employeesData}>
          <EmployeesDataTable />
        </EmployeesTable>
      )}

      <PopupAddEmployee
        value={openEmployeePopup}
        setOpenEmployeePopup={setOpenEmployeePopup}
      />

      <Popup
        isOpen={openFilterPopup}
        setIsOpen={setOpenFilterPopup}
        className={"popup--filter"}
      >
        <PopupFilter
          handleClickJob={(e) => handleFilter(e, "job", dispatch)}
          handleClickDepartment={(e) => handleFilter(e, "department", dispatch)}
          listFilter={listFilter(employeesData)}
        />
      </Popup>
    </div>
  );
}
