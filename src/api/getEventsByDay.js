import today from '../Functions/today';
// const token = localStorage.getItem('token');
const api = import.meta.env.VITE_API;

export default async function fetchData(
  setData,
  setEvents,
  date,
  setIsLoading
) {
  const dateRes = date || today();

  try {
    setIsLoading(true);
    const response = await fetch(`${api}/events/${dateRes}`);
    const res = await response.json();

    setData(res?.types);
    setEvents(res?.data.reverse());
  } catch {
    setData([]);
    setEvents([]);
    alert('there is an error happened');
  } finally {
    setIsLoading(false);
  }
}
