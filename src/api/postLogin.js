import api from './api';

export default async function loginRequest(body, setUserLogin, setIsLoading) {
  try {
    setIsLoading(true);
    console.log(body);
    const response = await api.post(`/users/login`, body);
    // const res = await response.json();

    localStorage.setItem('token', response.token); // save token to local storage
    setUserLogin(true);
  } catch (error) {
    localStorage.removeItem('token');

    if (error.response.status === 401) {
      return alert('Your email or password is wrong try again');
    }

    alert('There is an error happened');
  } finally {
    setIsLoading(false);
  }
}
