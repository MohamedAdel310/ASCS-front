function EmployeeControl({ children }) {
  return (
    <>
      <h2>Employees</h2>
      <div className="add-empolyee">{children}</div>
    </>
  );
}

export default EmployeeControl;
