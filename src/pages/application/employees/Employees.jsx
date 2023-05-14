import React, { useState, useEffect } from "react";
import "../style/employees.css";
import "../style/popups.css";
import "../../../components/search";
import EmployeeTable from "./components/Empolyees-table";
import PopupFilter from "../../../components/PopupFilter";
import PopupAddEmployee from "./components/PopupAddEmployee";

import Search from "../../../components/search";
import Filter from "../../../components/Filter";
// import MainButton from "../../../components/button-main";

import handleDisable from "../../../components/handleDisable";

const apiURL = "https://myaz.cyclic.app/api/";

export default function Employees() {
  const [data, setData] = useState();
  const [employeesData, setEmployeesData] = useState();
  const [openEmployeePopup, setOpenEmployeePopup] = useState(false);
  const [openFilterPopup, setOpenFilterPopup] = useState(false);
  const [searchRes, setSearchRes] = useState("");

  const listFilter = () => {
    let listJob = [];
    let listDepartment = [];

    employeesData?.map(({ job, department }) => {
      listJob.includes(job) ? "" : listJob.push(job);
      listDepartment.includes(department)
        ? ""
        : listDepartment.push(department);
    });

    console.log("listJob: ", listJob);
    console.log("listDepartment: ", listDepartment);

    return { listJob, listDepartment };
  };

  const handleSearch = (e) => {
    setSearchRes(
      employeesData?.map((emp) => {
        let result;
        emp.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
          (result = emp.name);
        return result;
      })
    );
  };

  //* filter functiolity
  const [jobSelected, setJobSelected] = useState({
    engineer: 0,
    job2: 0,
    job3: 0,
    job4: 0,
  });

  const [departmentSelected, setDepartmentSelected] = useState({});

  const handleClickJob = (e) => {
    const inputName = e.target.value;
    const inputStatus = e.target.checked;

    inputStatus
      ? setJobSelected({ ...jobSelected, [inputName]: 1 })
      : setJobSelected({ ...jobSelected, [inputName]: 0 });
  };

  const handleClickDepartment = (e) => {
    const inputName = e.target.value;
    const inputStatus = e.target.checked;

    inputStatus
      ? setDepartmentSelected({ ...departmentSelected, [inputName]: 1 })
      : setDepartmentSelected({ ...departmentSelected, [inputName]: 0 });
  };

  const handleClickSubmit = () => {
    console.log("click submit");
  };
  //---------------------------------------------------

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

      console.log("employeeData: ", employeesData);
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
        <Search onChange={handleSearch} />
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
          {employeesData?.map(
            (emp) =>
              (handleDisable(
                emp.job,
                emp.department,
                jobSelected,
                departmentSelected
              ) ||
                "") && (
                <EmployeeTable
                  key={emp.employee_id}
                  employee_id={emp.employee_id}
                  name={emp.name}
                  jobTitle={emp.job}
                  department={emp.department}
                  jobStatus={emp.status ? "Active" : "pending"}
                  handleSearch={searchRes}
                  handleFilterJob={jobSelected}
                  // handleFilterDepartment={}
                />
              )
          )}
        </tbody>
      </table>

      <PopupAddEmployee
        value={openEmployeePopup}
        setOpenEmployeePopup={setOpenEmployeePopup}
      />

      <PopupFilter
        value={openFilterPopup}
        setOpenFilterPopup={setOpenFilterPopup}
        handleClickJob={handleClickJob}
        handleClickDepartment={handleClickDepartment}
        handleClickSubmit={handleClickSubmit}
        listFilter={listFilter()}
      />
    </div>
  );
}
