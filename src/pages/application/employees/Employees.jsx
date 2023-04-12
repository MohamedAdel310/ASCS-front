import React, { useState, useEffect } from "react";
import "../style/employees.css";
import "../../../components/search";
import EmployeeTable from "./components/Empolyees-table";
// import employeesData from "../../../../Data/randomEmployeesData.json";

import Search from "../../../components/search";
import Filter from "../../../components/Filter";

const apiURL = "https://myaz.cyclic.app/api/";

export default function Employees() {
  const [data, setData] = useState();
  const [employeesData, setEmployeesData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch done");
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjc3ZjUzYzZmYzhmN2IxYzUzYzc3MSIsImlhdCI6MTY3OTc1NDU0OCwiZXhwIjoxNjg3NTMwNTQ4fQ.pblQyXpHTH6QdITy1fASGmOtmjCDtVptFnRBNsDs9EM";
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
          {employeesData?.map((emp) => (
            <EmployeeTable
              key={emp.employee_id}
              name={emp.name}
              jobTitle={emp.job}
              department={emp.department}
              jobStatus={emp.status ? "Active" : "pending"}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
