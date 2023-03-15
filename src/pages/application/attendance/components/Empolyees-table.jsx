import React from "react";

export default function EmployeeTable({
    name,
    JobStatus,
    department,
    JobTitle,
}) {
return (
    <tr>
        <td>{name}</td>
        <td>{JobTitle}</td>
        <td>{department}</td>
        <td>{JobStatus}</td>
    </tr>
);
}
