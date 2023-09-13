function DateInput({ onChange, value }) {
  return (
    <input
      id="inputdate_dailyreport"
      className="date-input--month"
      type="date"
      onChange={onChange}
      value={value}
    />
  );
}

export default DateInput;
