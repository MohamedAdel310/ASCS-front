import today from '../Functions/today';

const apiURL = 'https://myaz.cyclic.app/api/';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjc3ZjUzYzZmYzhmN2IxYzUzYzc3MSIsImlhdCI6MTY4MTM5ODAyOCwiZXhwIjoxNjg5MTc0MDI4fQ.IgULvpKaicCHhdS6TL3kfSoeAulggd1iPa7M-Yzfsr4';
const headers = {
  'Authorization': `Bearer ${token}`,
};

export default async function fetchData(setData, setEvents, date) {
  const dateRes = date || today();
  console.log('dateRes: ', dateRes);

  try {
    const response = await fetch(apiURL + `events/${dateRes}`, {
      headers,
    });

    const res = await response.json();
    // res && setIsViolationsLoaded(true);

    setData(res?.types);
    setEvents(res?.data.reverse());
  } catch {
    alert('there is an error happened');
  } finally {
    console.log('finally :)');
  }
}
