/** @format */

import React from "react";
import MainButton from "../../../../components/button-main";

export default function PopupAddEmployee(props) {
  return (
    <div className="popup--add-employee">
      <h1>Add Employee</h1>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Department" />
      <input type="text" placeholder="Job" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <label htmlFor="">Gender</label>
      <select name="Gender" id="" >
        <option value="">Male</option>
        <option value="">Famale</option>
      </select>
      <input type="text" placeholder="Salary" />
      <div className="close-and-add">
        <MainButton text="add" onClick={() => props.handelCallback(false)} />
        <MainButton text="close" onClick={() => props.handelCallback(false)} />
      </div>
    </div>
  );
}
