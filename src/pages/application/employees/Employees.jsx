import React, { useState, useEffect } from "react";
import "../style/employees.css";
import "../style/popups.css";
import "../../../components/search";
import PopupFilter from "../../../components/PopupFilter";
import Popup from "../../../components/Popup";
import PopupAddEmployee from "./components/PopupAddEmployee";
import TableSkeleton from "./components/TableSkeleton";
import EmployeesTable from "./components/EmployeesTable";
import EmployeeControl from "./components/EmployeeControl";
import Search from "../../../components/search";
import Filter from "../../../components/Filter";
import EmployeesRows from "./components/EmployeesRows";

import handleDisable from "../../../Functions/handleDisable";
import getAllEmployees from "../../../api/getAllEmployees";
import listFilter from "../../../Functions/listFilter";
import handleSearch from "../../../Functions/handleSearch";

import useReducerFilter from "../../../Hooks/useReducerFilter";

export default function Employees() {
  const [employeesData, setEmployeesData] = useState();
  const [openEmployeePopup, setOpenEmployeePopup] = useState(false);
  const [openFilterPopup, setOpenFilterPopup] = useState(false);
  const [searchRes, setSearchRes] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const [filter, dispatch] = useReducerFilter();

  // get employee data
  useEffect(() => {
    getAllEmployees(setEmployeesData, setIsLoaded);
  }, []);

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
          <EmployeesRows
            employeesData={employeesData}
            searchRes={searchRes}
            handleDisable={handleDisable}
            filter={filter}
          />
        </EmployeesTable>
      )}

      <Popup
        isOpen={openEmployeePopup}
        setIsOpen={setOpenEmployeePopup}
        className={"popup--add-employee"}
      >
        <PopupAddEmployee setOpenEmployeePopup={setOpenEmployeePopup} />
      </Popup>

      <Popup
        isOpen={openFilterPopup}
        setIsOpen={setOpenFilterPopup}
        className={"popup--filter"}
      >
        <PopupFilter
          dispatch={dispatch}
          listFilter={listFilter(employeesData)}
          filter={filter}
        />
      </Popup>
    </div>
  );
}
