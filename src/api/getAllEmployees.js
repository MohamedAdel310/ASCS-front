import api from './api';
const token = localStorage.getItem('token');

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default async function fetchData(setEmployeesData, setIsLoaded) {
  try {
    setIsLoaded(false);
    const response = await api.get('/employees', config);
    // the api response is funny :) need to fix it in backend :(
    const data = response.data.data;
    setEmployeesData(data?.employees);
  } catch (error) {
    alert('error happened when get employees data');
  } finally {
    setIsLoaded(true);
  }
}
