import todayDate from '../Functions/todayDate';

export default async function fetchData(date, setData) {
  const dateVal = date ? date : todayDate();
  const response = await fetch(
    `${import.meta.env.VITE_API}/attendance/${dateVal}`
  );
  const res = await response.json();
  console.log('res.data: ', res.data);
  setData(res.data);
}
