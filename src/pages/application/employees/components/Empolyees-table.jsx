import React from "react";
import { Link } from "react-router-dom";

export default function EmpoleeTable(props) {
  const handleName = () => {
    if (props.handleSearch) {
      // console.log("props.haddleSearch: ", props.handleSearch);
      if (!props.handleSearch.length) return true;
      return props.handleSearch.includes(props.name);
    } else return true;
  };

  const handleJob = () => {
    const job = props.jobTitle.toLowerCase().replaceAll(" ", "");
    if (props.handleFilterJob) {
      // // props.handleFilterJob?.map((el) => (count = +el));
      const allValuesAreZero = Object.values(props.handleFilterJob).every(
        (value) => value === 0
      );

      console.log("allValuesAreZero :", allValuesAreZero);
      if (allValuesAreZero) return 1;
    }
    if (job in props.handleFilterJob) {
      console.log("props.handleFilterJob[job]: ", props.handleFilterJob[job]);
      return props.handleFilterJob[job];
    }
    console.log("props.handleFilterJob: ", props.handleFilterJob);
    console.log("job: ", job);
  };

  const handleDisplay = () => {
    if (handleName() && handleJob()) return true;
    else return false;
  };

  return (
    <tr style={{ display: handleDisplay() || "none" }}>
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
