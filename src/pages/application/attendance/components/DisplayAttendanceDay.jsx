import TableDay from "./Table-day";
import handleDisable from "../../../../Functions/handleDisable";

function DisplayAttendanceDay({ employees, searchRes, filter }) {
  return (
    <>
      {employees?.map(
        (emp) =>
          handleDisable(emp, filter) && (
            <TableDay employee={emp} searchRes={searchRes} />
          )
      )}
    </>
  );
}

export default DisplayAttendanceDay;
