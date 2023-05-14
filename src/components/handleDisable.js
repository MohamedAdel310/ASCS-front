export default function handleDisable(
  jobs,
  departments,
  filterValJob,
  filterValDepartment
) {
  const job = jobs.toLowerCase().replaceAll(" ", "");
  console.log("filterValJob: ", filterValJob);
  const department = departments.toLowerCase().replaceAll(" ", "");

  let allValuesAreZero;
  let allValuesAreZeroDepartment;

  if (filterValJob && filterValDepartment) {
    allValuesAreZero = Object.values(filterValJob).every(
      (value) => value === 0
    );
    allValuesAreZeroDepartment = Object.values(filterValDepartment).every(
      (value) => value === 0
    );

    if (allValuesAreZero && allValuesAreZeroDepartment) return 1;
  }

  if (allValuesAreZeroDepartment) {
    if (job in filterValJob) {
      return filterValJob[job];
    }
  } else if (allValuesAreZero) {
    if (department in filterValDepartment) {
      return filterValDepartment[department];
    }
  } else {
    if (job in filterValJob && department in filterValDepartment)
      if (filterValJob[job] + filterValDepartment[department] < 2) return false;
      else return true;
  }
}
