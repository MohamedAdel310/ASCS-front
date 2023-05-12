import React from "react";
import { Link } from "react-router-dom";
export default function EmpoleeTable(props) {
  const handleName = () => {
    if (props.handleSearch) {
      console.log("props.haddleSearch: ", props.handleSearch);
      if (!props.handleSearch.length) return true;
      return props.handleSearch.includes(props.name);
    } else return true;
  };

  return (
    <tr style={{ display: handleName() || "none" }}>
      <td>
        <Link to={`/application/employees/${props.employee_id}`}>
          {props.name}
        </Link>
      </td>
      <td>{props.jobTitle}</td>
      <td>{props.department}</td>
      <td>{props.jobStatus}</td>
    </tr>
  );
}
