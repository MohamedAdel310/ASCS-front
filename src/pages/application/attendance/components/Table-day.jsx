import React from "react";
import { Link } from "react-router-dom";
import displayTime from "../../../../Functions/displayTime";

export default function TableDay({ employee, searchRes }) {
  const { employee_id, name, department, job, arrive_at } = employee;
  const arriveTime = displayTime(arrive_at);

  const handleDisplay = () => {
    if (!searchRes.length) return true;
    if (searchRes) return searchRes.includes(name);
  };

  return (
    <tr style={{ display: handleDisplay() || "none" }}>
      {/* <td className="teble-number">{num + 1}</td> */}
      <td>
        <Link to={`/application/employees/${employee_id}`}>{name}</Link>
      </td>
      <td>{job}</td>
      <td>{department}</td>
      <td>{arriveTime}</td>
    </tr>
  );
}
