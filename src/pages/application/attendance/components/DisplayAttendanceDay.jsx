import TableDay from "./Table-day";
import displayTime from "../../../../Functions/displayTime";
import handleDisable from "../../../../Functions/handleDisable";

function DisplayAttendanceDay({
  employees,
  searchRes,
  filterValJob,
  filterValDepartment,
}) {
  return (
    <>
      {employees?.map(
        ({ employee_id, name, department, job, arrive_at }, index) =>
          (handleDisable(job, department, filterValJob, filterValDepartment) ||
            "") && (
            <TableDay
              employee_id={employee_id}
              num={index}
              name={name}
              department={department}
              jobTitle={job}
              arriveTime={displayTime(arrive_at)}
              searchRes={searchRes}
            />
          )
      )}
      {console.log("done")}
    </>
  );
}

export default DisplayAttendanceDay;
