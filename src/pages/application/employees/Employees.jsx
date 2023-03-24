import React from "react";
import "../style/employees.css";
import "../../../components/search";
import EmployeeTable from "./components/Empolyees-table";
import employeesData from "../../../../Data/randomEmployeesData.json";

import Search from "../../../components/search";
import Filter from "../attendance/components/Filter";

export default function Employees() {
  return (
    <div className="employee">
      <h2>Employees</h2>
      <div className="add-empolyee">
        <button className="add">Add Employee</button>
        <Search />
        <Filter />
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
          {employeesData.map((emp) => (
            <EmployeeTable
              name={emp.name}
              jobTitle={emp.job_title}
              department={emp.department}
              jobStatus={emp.status ? "Active" : "pending"}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
