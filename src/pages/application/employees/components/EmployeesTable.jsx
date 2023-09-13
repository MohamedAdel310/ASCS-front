function EmployeesTable({ children, employeesData }) {
  console.log("employeesData:", employeesData);
  console.log("children: ", children);
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
      <tbody>{employeesData && children}</tbody>
    </table>
  );
}

export default EmployeesTable;
