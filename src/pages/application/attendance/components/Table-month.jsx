import React from "react";
import { Link } from "react-router-dom";

export default function TableMonth({ name, department, attendanceData }) {
  // console.log(attendanceData);
  return (
    <tr>
      <td>
        <Link to="/application/employees/22">{name}</Link>
      </td>
      <td>{department}</td>
      {attendanceData.map((attend) => (
        <td>{attend ? "✅" : "❌"}</td>
      ))}
    </tr>
  );
}
