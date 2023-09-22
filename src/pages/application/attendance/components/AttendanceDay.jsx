import DisplayAttendanceDay from "./DisplayAttendanceDay";
import NoResponseImg from "../../../../components/NoResponseImg";

function AttendanceDay({ data, searchRes, filter }) {
  if (data && Object.keys(data).length)
    return (
      <AttendanceDayComp>
        <DisplayAttendanceDay
          employees={data?.employees}
          searchRes={searchRes}
          filter={filter}
        />
      </AttendanceDayComp>
    );
  return <NoResponseImg />;
}

function AttendanceDayComp({ children }) {
  return (
    <div className="attendance_day">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Deparment</th>
            <th>Arrival Time</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default AttendanceDay;
