import React from "react";
export default function EmpoleeTable(props) {
  return (
    <tr>
      <td>
        <a href="/application/employees/profile">{props.name}</a>
      </td>
      <td>{props.jobTitle}</td>
      <td>{props.department}</td>
      <td>{props.jobStatus}</td>
    </tr>
  );
}

{
  /* 
<tr>
  <td>
    <a href="/application/employees/profile">
      خالد الشربيني احمد حسن
    </a>
  </td>
  <td>Worker</td>
  <td>WorkShop</td>
  <td>Active</td>
</tr> 
*/
}
