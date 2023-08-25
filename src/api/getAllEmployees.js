const apiURL = "https://myaz.cyclic.app/api/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZThmMGRhZDhiYzYwMDAxY2U3MzllZCIsImlhdCI6MTY5Mjk4NzcxNSwiZXhwIjoxNzAwNzYzNzE1fQ.FAAA5CW4VMS-5gwO9uvoB-_WmNqx_LQMmSLZYE65-T8";

export default async function fetchData() {
  console.log("fetch all employees done");
  const headers = {
    "Authorization": `Bearer ${token}`,
  };
  const response = await fetch(apiURL + "employees", {
    headers,
  });

  const res = await response.json();
  return res.data;
}
