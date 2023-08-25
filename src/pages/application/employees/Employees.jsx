import React, { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import "../style/employees.css";
import "../style/popups.css";
import "../../../components/search";
import EmployeeTable from "./components/Empolyees-table";
import PopupFilter from "../../../components/PopupFilter";
import PopupAddEmployee from "./components/PopupAddEmployee";

import Search from "../../../components/search";
import Filter from "../../../components/Filter";
// import MainButton from "../../../components/button-main";

import handleDisable from "../../../Functions/handleDisable";
import getAllEmployees from "../../../api/getAllEmployees";

export default function Employees() {
  const [employeesData, setEmployeesData] = useState();
  const [openEmployeePopup, setOpenEmployeePopup] = useState(false);
  const [openFilterPopup, setOpenFilterPopup] = useState(false);
  const [searchRes, setSearchRes] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

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
  const [jobSelected, setJobSelected] = useState({});
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

  // get employee data
  const fetchEmployee = async () => {
    const data = await getAllEmployees();
    setIsLoaded(true);
    setEmployeesData(data.employees);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  const EmployeesDataTable = () => {
    return employeesData.map(
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
    );
  };

  const EmployeesTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Deparment</th>
            <th>Job Status</th>
          </tr>
        </thead>
        <tbody>{employeesData && <EmployeesDataTable />}</tbody>
      </table>
    );
  };

  const TableSkeleton = () => {
    return (
      <div style={{ marginTop: "55px" }}>
        {Array(10)
          .fill()
          .map(() => (
            <Skeleton
              animation="wave"
              width={"100%"}
              height={120}
              sx={{ mb: -5 }}
            />
          ))}
      </div>
    );
  };

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

      {isLoaded ? <EmployeesTable /> : <TableSkeleton />}

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

      <div className={openEmployeePopup ? `blur-background` : ""}></div>
      <div className={openFilterPopup ? `blur-background` : ""}></div>
    </div>
  );
}

// {
//   item ? (
//     <img
//       style={{
//         width: 210,
//         height: 118,
//       }}
//       alt={item.title}
//       src={item.src}
//     />
//   ) : (
//   );
// }
