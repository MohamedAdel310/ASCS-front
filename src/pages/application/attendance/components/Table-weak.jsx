import React from "react";

export default function TableWeak({ name, department, attendanceData }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{department}</td>
      {attendanceData.map(
        (attend, index) => index < 7 && <td>{attend ? "✅" : "❌"}</td>
      )}
    </tr>
  );
}
