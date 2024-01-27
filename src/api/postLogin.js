export default async function loginRequest(body, setUserLogin, setIsLoading) {
  try {
    setIsLoading(true);
    const response = await fetch(`${import.meta.env.VITE_API}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const res = await response.json();

    if (res.status === 'fail') {
      localStorage.removeItem('token');
      return alert(res.message);
    }

    localStorage.setItem('token', res.token); // save token to local storage
    setUserLogin(true);
  } catch {
    localStorage.removeItem('token');
    alert('There is an error happened');
  } finally {
    setIsLoading(false);
  }
}
