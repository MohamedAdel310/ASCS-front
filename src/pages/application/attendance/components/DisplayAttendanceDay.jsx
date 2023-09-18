import TableDay from "./Table-day";
import displayTime from "../../../../Functions/displayTime";
import handleDisable from "../../../../Functions/handleDisable";

function DisplayAttendanceDay({
  employees,
  searchRes,
  filterValJob,
  filterValDepartment,
}) {
  const filter = {
    filterJob: filterValJob,
    filterDepartment: filterValDepartment,
  };

  return (
    <>
      {employees?.map(
        (emp, index) =>
          handleDisable(emp, filter) && (
            <TableDay
              employee_id={emp.employee_id}
              num={index}
              name={emp.name}
              department={emp.department}
              jobTitle={emp.job}
              arriveTime={displayTime(emp.arrive_at)}
              searchRes={searchRes}
            />
          )
      )}
    </>
  );
}

export default DisplayAttendanceDay;
