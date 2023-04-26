import React, { useState, useEffect } from "react";
import "../style/employees.css";
import "../style/popups.css";
import "../../../components/search";
import EmployeeTable from "./components/Empolyees-table";
// import employeesData from "../../../../Data/randomEmployeesData.json";
import PopupFilter from "./components/PopupFilter";
import PopupAddEmployee from "./components/PopupAddEmployee";

import Search from "../../../components/search";
import Filter from "../../../components/Filter";
import MainButton from "../../../components/button-main";

const apiURL = "https://myaz.cyclic.app/api/";

export default function Employees() {
  const [data, setData] = useState();
  const [employeesData, setEmployeesData] = useState();
  const [openEmployeePopup, setOpenEmployeePopup] = useState(false);
  const [openFilterPopup, setOpenFilterPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch done");
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjc3ZjUzYzZmYzhmN2IxYzUzYzc3MSIsImlhdCI6MTY4MTM5ODAyOCwiZXhwIjoxNjg5MTc0MDI4fQ.IgULvpKaicCHhdS6TL3kfSoeAulggd1iPa7M-Yzfsr4";
      const headers = {
        "Authorization": `Bearer ${token}`,
      };
      const response = await fetch(apiURL + "employees", {
        headers,
      });
      const json = await response.json();
      setData(json.data);

      localStorage.setItem("employeesData", JSON.stringify(json.data));
      setEmployeesData(json.data?.employees);
    };
    fetchData();
  }, []);

  return (
    <div className="employee">
      <h2>Employees</h2>
      <div className="add-empolyee">
        <button
          className="add"
          onClick={() => {
            setOpenEmployeePopup(true);
            setOpenFilterPopup(false);
          }}
        >
          Add Employee
        </button>
        <Search />
        <Filter
          onClick={() => {
            setOpenFilterPopup(true);
            setOpenEmployeePopup(false);
          }}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Deparment</th>
            <th>Job Status</th>
          </tr>
        </thead>
        <tbody>
          {employeesData?.map((emp) => (
            <EmployeeTable
              key={emp.employee_id}
              employee_id={emp.employee_id}
              name={emp.name}
              jobTitle={emp.job}
              department={emp.department}
              jobStatus={emp.status ? "Active" : "pending"}
            />
          ))}
        </tbody>
      </table>

      {/* {(openEmployeePopup || openFilterPopup) && (
        <div className="popup-container popup">
          {openEmployeePopup ? (
            <PopupAddEmployee setOpenEmployeePopup={setOpenEmployeePopup} />
          ) : (
            <PopupFilter />
          )}
        </div>
      )} */}

      <PopupAddEmployee
        value={openEmployeePopup}
        setOpenEmployeePopup={setOpenEmployeePopup}
      />

      <PopupFilter
        value={openFilterPopup}
        setOpenFilterPopup={setOpenFilterPopup}
      />
    </div>
  );
}
