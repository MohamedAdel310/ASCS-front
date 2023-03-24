import React from "react";
import { Link } from "react-router-dom";

export default function TableWeak({ name, department, attendanceData }) {
  return (
    <tr>
      <td>
        <Link to="/application/employees/22">{name}</Link>
      </td>
      <td>{department}</td>
      {attendanceData.map(
        (attend, index) => index < 7 && <td>{attend ? "✅" : "❌"}</td>
      )}
    </tr>
  );
}
