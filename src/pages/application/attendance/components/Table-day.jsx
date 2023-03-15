import React from "react";

export default function TableDay({
  name,
  department,
  status,
  arriveTime,
  leaveTime,
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{department}</td>
      <td>{status}</td>
      <td>{arriveTime}</td>
      <td>{leaveTime}</td>
    </tr>
  );
}
