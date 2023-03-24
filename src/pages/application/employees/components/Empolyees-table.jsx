import React from "react";
import { Link } from "react-router-dom";
export default function EmpoleeTable(props) {
  return (
    <tr>
      <td>
        <Link to="/application/employees/22">{props.name}</Link>
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
