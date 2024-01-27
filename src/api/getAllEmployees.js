const token = localStorage.getItem('token');
const api = import.meta.env.VITE_API;

export default async function fetchData(setEmployeesData, setIsLoaded) {
  const headers = {
    'Authorization': `Bearer ${token}`,
  };
  const response = await fetch(api + '/employees', {
    headers,
  });

  const res = await response.json();
  const data = res.data;
  setEmployeesData(data?.employees);
  setIsLoaded(true);
}
