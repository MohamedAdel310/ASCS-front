import TableMonth from "./Table-month";
import employeeData from "../../../../../Data/attendanceData.json";

function AttendanceMonth() {
  return (
    <div className="attendance_month">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Deparment</th>
            {Array(30)
              .fill()
              .map((__, index) => (
                <th>{index + 1}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {employeeData.map(({ name, department, attendance }) => (
            <TableMonth
              name={name}
              department={department}
              attendanceData={attendance}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceMonth;
