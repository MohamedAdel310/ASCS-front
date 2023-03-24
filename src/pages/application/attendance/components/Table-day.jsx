import React from "react";
import { Link } from "react-router-dom";

export default function TableDay({ name, department, jobTitle, arriveTime }) {
  return (
    <tr>
      <td>
        <Link to="/application/employees/22">{name}</Link>
      </td>
      <td>{jobTitle}</td>
      <td>{department}</td>
      <td>{arriveTime}</td>
    </tr>
  );
}
