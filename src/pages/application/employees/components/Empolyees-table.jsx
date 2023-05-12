import React from "react";
import { Link } from "react-router-dom";
export default function EmpoleeTable(props) {
  const handleName = () =>
    props.handleSearch && props.handleSearch.includes(props.name);

  return (
    <tr>
      <td>
        <Link to={`/application/employees/${props.employee_id}`}>
          <span style={{ background: handleName() && "yellow" }}>
            {props.name}
          </span>
        </Link>
      </td>
      <td>{props.jobTitle}</td>
      <td>{props.department}</td>
      <td>{props.jobStatus}</td>
    </tr>
  );
}
