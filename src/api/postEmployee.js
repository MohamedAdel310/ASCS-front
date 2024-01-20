const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZThmMGRhZDhiYzYwMDAxY2U3MzllZCIsImlhdCI6MTY5Mjk4NzcxNSwiZXhwIjoxNzAwNzYzNzE1fQ.FAAA5CW4VMS-5gwO9uvoB-_WmNqx_LQMmSLZYE65-T8";
const apiURL = "https://myaz.cyclic.app/api/";

function postEmployee(formInputs, setOpen) {
  async function postData(url = "", data = {}, token = "") {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  postData(apiURL + "/employees", formInputs, token)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  setOpen(false);
  // return (
  //   <div>

  //   </div>
  // )
}

export default postEmployee;
