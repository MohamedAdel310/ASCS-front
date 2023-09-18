import DisplayAttendanceDay from "./DisplayAttendanceDay";
import noResponse from "../../../../assets/image/noResponse.jpg";

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
  return <NoResponseComp />;
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

function NoResponseComp() {
  return (
    <img
      src={noResponse}
      alt="no violations in this day"
      className="no-vilations-img"
      style={{ display: "block" }}
    />
  );
}

export default AttendanceDay;
