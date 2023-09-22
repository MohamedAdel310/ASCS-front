export default function handleSearch(e, employeesData, setSearchRes) {
  const res = employeesData?.map((emp) => {
    const result = emp.name.toLowerCase().includes(e.target.value.toLowerCase())
      ? emp.name
      : false;
    return result;
  });

  setSearchRes(res);
}
