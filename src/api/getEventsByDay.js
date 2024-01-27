import today from '../Functions/today';
// const token = localStorage.getItem('token');
import api from './api';

export default async function fetchData(
  setData,
  setEvents,
  date,
  setIsLoading
) {
  const dateRes = date || today();

  try {
    setIsLoading(true);
    const { data } = await api.get(`/events/${dateRes}`);
    setData(data.types);
    setEvents(data.data.reverse());
  } catch (error) {
    console.log(error);
    setData([]);
    setEvents([]);
    alert('there is an error happened');
  } finally {
    setIsLoading(false);
  }
}
