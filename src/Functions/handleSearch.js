export default function handleSearch(e, employeesData, setSearchRes) {
  let result;

  const res = employeesData?.map((emp) => {
    emp.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
      (result = emp.name);
    return result;
  });

  setSearchRes(res);
}
