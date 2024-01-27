const token = localStorage.getItem('token');
const api = import.meta.env.VITE_API;

function postEmployee(formInputs, setOpen) {
  async function postData(url = '', data = {}, token = '') {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  postData(api + '/employees', formInputs, token)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  setOpen(false);
}

export default postEmployee;
