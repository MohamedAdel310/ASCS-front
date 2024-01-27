import todayDate from '../Functions/todayDate';
// const token = localStorage.getItem('token');
import api from './api';

export default async function fetchData(date, setData) {
  const dateVal = date ? date : todayDate();
  try {
    const { data } = await api.get(`/attendance/${dateVal}`);
    setData(data.data);
  } catch (error) {
    console.log(
      `There is an error happened in getAttendanceByDay request ${error}`
    );
    alert('There is an ERROR happened');
  } finally {
    console.log('finally');
  }
}
