import NoResponseImg from "../../../../components/NoResponseImg";

function EmployeesTable({ children, employeesData }) {
  console.log("employeesData:", employeesData);
  console.log("children: ", children);
  if (!employeesData) return <NoResponseImg />;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job Title</th>
          <th>Deparment</th>
          <th>Job Status</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default EmployeesTable;
