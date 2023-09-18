function isNoFilter(obj) {
  return Object.values(obj).every((value) => value === false);
}

export default function handleDisable(
  { job, department },
  { filterJob, filterDepartment }
) {
  const jobVal = job.toLowerCase().replaceAll(" ", "");
  const depVal = department.toLowerCase().replaceAll(" ", "");

  const isNoFilterJob = isNoFilter(filterJob);
  const isNoFilterDep = isNoFilter(filterDepartment);

  // if there is no filter allow all employees in table
  if (isNoFilterJob && isNoFilterDep) return true;
  if (isNoFilterDep) return filterJob[jobVal];
  if (isNoFilterJob) return filterDepartment[depVal];
  if (filterJob[jobVal] && filterDepartment[depVal]) return true;
  return false;

  //---------------------------
  // if (isNoFilterDep) {
  //   if (jobVal in filterJob) return filterJob[jobVal];
  // }
  // if (isNoFilterJob) {
  //   if (depVal in filterDepartment) return filterDepartment[depVal];
  // }

  // if (jobVal in filterJob && depVal in filterDepartment)
  //   if (filterJob[jobVal] && filterDepartment[depVal]) return true;
  // return false;

  //------------------------------------------------
  // if (filterJob && filterDepartment) {
  //   isNoFilterJob = Object.values(filterJob).every((value) => value === 0);
  //   isNoFilterDep = Object.values(filterDepartment).every(
  //     (value) => value === 0
  //   );

  //   if (isNoFilterJob && isNoFilterDep) return 1;
  // }

  // if (isNoFilterDep) {
  //   if (jobVal in filterJob) {
  //     return filterJob[jobVal];
  //   }
  // } else if (isNoFilterJob) {
  //   if (depVal in filterDepartment) {
  //     return filterDepartment[depVal];
  //   }
  // } else {
  //   if (jobVal in filterJob && depVal in filterDepartment)
  //     if (filterJob[jobVal] + filterDepartment[depVal] < 2) return false;
  //     else return true;
  // }
}
