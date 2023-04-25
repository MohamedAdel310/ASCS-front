/** @format */

import React from "react";
import MainButton from "../../../../components/button-main";

export default function PopupAddEmployee(props) {
  const handelAddEmployee = () => {
    props.setOpenEmployeePopup(false);
  };

  return (
    <div
      className={`popup--add-employee popup ${
        props.value || "display-popup-false"
      }`}
    >
      <h1>Add Employee</h1>
      <label htmlFor="">Full Name</label>
      <input type="text" placeholder="Full Name" />

      <label htmlFor="">Gender</label>
      <select name="Gender" id="">
        <option value="">Male</option>
        <option value="">Famale</option>
      </select>

      <label htmlFor="">Birth Date</label>
      <input type="date" placeholder="Birth Date" value="2000-08-24" />

      <label htmlFor="">Email</label>
      <input type="email" placeholder="Email" />

      <label htmlFor="">Phone</label>
      <input type="tel" placeholder="Phone" />

      <label htmlFor="">Department</label>
      <select name="Department" id="">
        <option value="">department 1</option>
        <option value="">department 2</option>
        <option value="">department 3</option>
        <option value="">department 4</option>
        <option value="">department 5</option>
      </select>

      <label htmlFor="">Job</label>
      <select name="Job" id="">
        <option value="">job 1</option>
        <option value="">job 2</option>
        <option value="">job 3</option>
        <option value="">job 4</option>
        <option value="">job 5</option>
      </select>

      <label htmlFor="">Salary</label>
      <input type="number" placeholder="Salary" />

      <label htmlFor="">Shift Start</label>
      <input type="time" placeholder="shift start" />

      <label htmlFor="">Shift End</label>
      <input type="time" placeholder="shift end" />

      <div className="close-and-add">
        <MainButton text="add" onClick={handelAddEmployee} />
        <MainButton text="close" onClick={handelAddEmployee} />
      </div>
    </div>
  );
}
