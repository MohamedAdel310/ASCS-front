import React from "react";

export default function TableWeak({
  
    name,
    department,
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
    day7,
  }) 
 {
    return (
      <tr>
        <td>{name}</td>
        <td>{department}</td>
        <td>{day1}</td>
        <td>{day2}</td>
        <td>{day3}</td>
        <td>{day4}</td>
        <td>{day5}</td>
        <td>{day6}</td>
        <td>{day7}</td>
        
      </tr>
    );
}
