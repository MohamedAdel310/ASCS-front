import React from "react";
import { Link } from "react-router-dom";

export default function EmpoleeTable({
  employee,
  handleFilterJob,
  handleSearch,
}) {
  const handleName = () => {
    if (handleSearch) {
      if (!handleSearch.length) return true;
      return handleSearch.includes(employee.name);
    } else return true;
  };

  return (
    <tr style={{ display: handleName() || "none" }}>
      <td>
        <Link to={`/application/employees/${employee.employee_id}`}>
          {employee.name}
        </Link>
      </td>
      <td>{employee.job}</td>
      <td>{employee.department}</td>
      <td>{employee.jobStatus}</td>
    </tr>
  );
}
