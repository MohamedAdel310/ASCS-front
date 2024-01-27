import todayDate from '../Functions/todayDate';
// const token = localStorage.getItem('token');
const api = import.meta.env.VITE_API;

export default async function fetchData(date, setData) {
  const dateVal = date ? date : todayDate();
  const response = await fetch(`${api}/attendance/${dateVal}`);
  const res = await response.json();
  console.log('res.data: ', res.data);
  setData(res.data);
}
