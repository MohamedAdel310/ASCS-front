import today from '../Functions/today';
import api from './api';
const token = localStorage.getItem('token');

// get year/month only from today() (it return year/month/day)
let Today = today().split('/');
Today = Today[0] + '/' + Today[1];

export default async function fetchData(date) {
  console.log('fetch done');
  const headers = {
    'Authorization': `Bearer ${token}`,
  };

  try {
    const response = await api.get(`/events/${date || Today}`, {
      headers,
    });
    console.log('res: ', response);
  } catch (error) {
    console.log('an error happened' + error);
  } finally {
    console.log('finally');
  }
}
