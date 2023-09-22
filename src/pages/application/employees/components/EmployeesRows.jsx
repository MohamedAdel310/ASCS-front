import { Link } from "react-router-dom";

export default function EmployeesRows({
  employeesData,
  searchRes,
  handleDisable,
  filter,
}) {
  return employeesData.map((emp) => {
    function handleSearch() {
      // if there is no search so add all employees
      if (!searchRes) return true;
      return searchRes.includes(emp.name);
    }
    const res = handleSearch();

    if (handleDisable(emp, filter))
      return (
        <EmployeesRowsVal
          key={emp.employee_id}
          employee={emp}
          displayName={res}
        />
      );
  });
}

function EmployeesRowsVal({ employee, displayName }) {
  return (
    <tr style={{ display: displayName || "none" }}>
      <td>
        <Link to={`/application/employees/${employee.employee_id}`}>
          {employee.name}
        </Link>
      </td>
      <td>{employee.job}</td>
      <td>{employee.department}</td>
      <td>{employee.jobStatus}</td>
    </tr>
  );
}
