const token = localStorage.getItem('token');
const api = import.meta.env.VITE_API;

const today = () => {
  const today = new Date();
  const date = today.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const [day, month, year] = date.split('/');

  return `${year}/${month}`;
};

export default async function fetchData(date) {
  console.log('fetch done');
  const headers = {
    'Authorization': `Bearer ${token}`,
  };

  const response = await fetch(`${api}/events/${date || today()}`, {
    headers,
  });

  return await response.json();
}
