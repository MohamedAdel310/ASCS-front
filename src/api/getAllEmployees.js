const token = localStorage.getItem('token');
const api = import.meta.env.VITE_API;

const headers = {
  'Authorization': `Bearer ${token}`,
};

export default async function fetchData(setEmployeesData, setIsLoaded) {
  try {
    setIsLoaded(false);
    const response = await fetch(api + '/employees', {
      headers,
    });
    console.log(response);

    if (!response.ok) {
      throw new Error('');
    }

    const res = await response.json();
    const data = res.data;
    setEmployeesData(data?.employees);
  } catch {
    alert('error happened when get employees data');
  } finally {
    setIsLoaded(true);
  }
}
