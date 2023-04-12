import React from "react";
import { Link } from "react-router-dom";

export default function TableDay({
  employee_id,
  num,
  name,
  department,
  jobTitle,
  arriveTime,
}) {
  return (
    <tr>
      <td>{num + 1}</td>
      <td>
        <Link to={`/application/employees/${employee_id}`}>{name}</Link>
      </td>
      <td>{jobTitle}</td>
      <td>{department}</td>
      <td>{arriveTime}</td>
    </tr>
  );
}
