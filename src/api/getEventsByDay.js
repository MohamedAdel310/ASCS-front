import today from '../Functions/today';

export default async function fetchData(
  setData,
  setEvents,
  date,
  setIsLoading
) {
  const dateRes = date || today();

  try {
    setIsLoading(true);
    const response = await fetch(
      import.meta.env.VITE_API + `/events/${dateRes}`
    );
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
