import DisplayAttendanceDay from "./DisplayAttendanceDay";
import noResponse from "../../../../assets/image/noResponse.jpg";

function AttendanceDay({ data, searchRes, filterValJob, filterValDepartment }) {
  return data && Object.keys(data).length ? (
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
        <tbody>
          <DisplayAttendanceDay
            employees={data?.employees}
            searchRes={searchRes}
            filterValJob={filterValJob}
            filterValDepartment={filterValDepartment}
          />
        </tbody>
      </table>
    </div>
  ) : (
    <img
      src={noResponse}
      alt="no violations in this day"
      className="no-vilations-img"
      style={{ display: "block" }}
    />
  );
}

export default AttendanceDay;
