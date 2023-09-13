function Header({ children, value, onChange }) {
  return (
    <div className="attendance--title">
      <h3>Attendance</h3>
      <div className="ends">
        {children}
        <span className="select-container">
          <select
            className="select-date"
            name="date"
            id="select-date"
            value={value}
            onChange={onChange}
          >
            <option value="1">Day</option>
            <option value="2">week</option>
            <option value="3">Month</option>
          </select>
        </span>
      </div>
    </div>
  );
}

export default Header;
