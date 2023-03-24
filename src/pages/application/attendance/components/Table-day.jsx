import React from "react";

export default function TableDay({ name, department, jobTitle, arriveTime }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{jobTitle}</td>
      <td>{department}</td>
      <td>{arriveTime}</td>
    </tr>
  );
}
