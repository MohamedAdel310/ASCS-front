import todayDate from "../Functions/todayDate";

export default async function fetchData(date, setData) {
  const response = await fetch(
    `https://myaz.cyclic.app/api/attendance/${date ? date : todayDate()}`
  );
  const res = await response.json();
  // setData(json.data);
  console.log("res.data: ", res.data);
  setData(res.data);
}
