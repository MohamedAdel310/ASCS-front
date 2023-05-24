const apiURL = "https://myaz.cyclic.app/api/";

export default async function fetchData() {
  console.log("fetch all employees done");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjc3ZjUzYzZmYzhmN2IxYzUzYzc3MSIsImlhdCI6MTY4MTM5ODAyOCwiZXhwIjoxNjg5MTc0MDI4fQ.IgULvpKaicCHhdS6TL3kfSoeAulggd1iPa7M-Yzfsr4";
  const headers = {
    "Authorization": `Bearer ${token}`,
  };
  const response = await fetch(apiURL + "employees", {
    headers,
  });
  return await response.json();
  // setData(json.data);

  // localStorage.setItem("employeesData", JSON.stringify(json.data));
  setEmployeesData(json.data?.employees);

  // console.log("employeeData: ", employeesData);
}
