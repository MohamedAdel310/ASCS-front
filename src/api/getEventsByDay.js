import today from "../pages/application/daily-report/components/today";
const apiURL = "https://myaz.cyclic.app/api/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjc3ZjUzYzZmYzhmN2IxYzUzYzc3MSIsImlhdCI6MTY4MTM5ODAyOCwiZXhwIjoxNjg5MTc0MDI4fQ.IgULvpKaicCHhdS6TL3kfSoeAulggd1iPa7M-Yzfsr4";

export default async function fetchData(setData, setEvents, date) {
  const headers = {
    "Authorization": `Bearer ${token}`,
  };

  const response = await fetch(apiURL + `events/${date || today()}`, {
    headers,
  });

  const res = await response.json();
  // res && setIsViolationsLoaded(true);

  setData(res?.types);
  setEvents(res?.data.reverse());
}
