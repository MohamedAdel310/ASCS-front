import React from "react";

export default function TableMonth({ name, department, attendanceData }) {
  // console.log(attendanceData);
  return (
    <tr>
      <td>{name}</td>
      <td>{department}</td>
      {attendanceData.map((attend) => (
        <td>{attend ? "✅" : "❌"}</td>
      ))}
    </tr>
  );
}
