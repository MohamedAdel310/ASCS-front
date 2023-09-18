export default function listFilter(employeesData) {
  let listJob = [];
  let listDepartment = [];

  employeesData?.map(({ job, department }) => {
    listJob.includes(job) ? "" : listJob.push(job);
    listDepartment.includes(department) ? "" : listDepartment.push(department);
  });

  // console.log("listJob: ", listJob);
  // console.log("listDepartment: ", listDepartment);

  return { listJob, listDepartment };
}
