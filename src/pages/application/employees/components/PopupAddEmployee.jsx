import React, { useState, useEffect } from "react";
import MainButton from "../../../../components/button-main";

const apiURL = "https://myaz.cyclic.app/api/";

export default function PopupAddEmployee(props) {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    gender: "",
    birthDate: "",
    email: "",
    phoneNumber: "",
    department: "",
    job: "",
    salary: "",
    shiftStartAt: "",
    shiftEndAt: "",
    employee_id: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  useEffect(() => {
    setIsFormFilled(Object.values(formInputs).every((val) => val !== ""));
  });

  const handelClose = (e) => {
    e.preventDefault();
    props.setOpenEmployeePopup(false);
  };

  const handelAddEmployee = (e) => {
    e.preventDefault();

    async function postData(url = "", data = {}, token = "") {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjc3ZjUzYzZmYzhmN2IxYzUzYzc3MSIsImlhdCI6MTY4MTM5ODAyOCwiZXhwIjoxNjg5MTc0MDI4fQ.IgULvpKaicCHhdS6TL3kfSoeAulggd1iPa7M-Yzfsr4";
    postData(apiURL + "/employees", formInputs, token)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    props.setOpenEmployeePopup(false);
  };

  return (
    <div
      className={`popup--add-employee popup ${
        props.value || "display-popup-false"
      }`}
    >
      <h1>Add Employee</h1>
      <form action="">
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formInputs.name}
          onChange={handleChange}
          required
        />

        <div className="BOX">
          <div className="BOX1">
            <label htmlFor="">Gender</label>
            <select
              name="gender"
              id=""
              value={formInputs.gender}
              onChange={handleChange}
            >
              <option value="">--Choose gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="BOX1">
            <label htmlFor="">Birth Date</label>
            <input
              type="date"
              name="birthDate"
              placeholder="Birth Date"
              value={formInputs.birthDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="BOX">
          <div className="BOX1">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formInputs.email}
              onChange={handleChange}
            />
          </div>
          <div className="BOX1">
            <label htmlFor="">Phone</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone"
              value={formInputs.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="BOX">
          <div className="BOX1">
            <label htmlFor="">Department</label>
            <select
              name="department"
              id=""
              value={formInputs.department}
              onChange={handleChange}
            >
              <option value="">--Choose department--</option>
              <option value="department 1">department 1</option>
              <option value="department 2">department 2</option>
              <option value="department 3">department 3</option>
              <option value="department 4">department 4</option>
              <option value="department 5">department 5</option>
            </select>
          </div>

          <div className="BOX1">
            <label htmlFor="">Job</label>
            <select
              name="job"
              id=""
              value={formInputs.job}
              onChange={handleChange}
            >
              <option value="">--Choose job--</option>
              <option value="job 1">job 1</option>
              <option value="job 2">job 2</option>
              <option value="job 3">job 3</option>
              <option value="job 4">job 4</option>
              <option value="job 5">job 5</option>
            </select>
          </div>
        </div>

        <div className="BOX">
          <div className="BOX1">
            <label htmlFor="">Employee ID</label>
            <input
              type="number"
              name="employee_id"
              placeholder="Employee Id"
              value={formInputs.employee_id}
              onChange={handleChange}
            />
          </div>

          <div className="BOX1">
            <label htmlFor="">Salary</label>
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              value={formInputs.salary}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="BOX">
          <div className="BOX1">
            <label htmlFor="">Shift Start</label>
            <input
              type="time"
              placeholder="shift start"
              name="shiftStartAt"
              value={formInputs.shiftStartAt}
              onChange={handleChange}
            />
          </div>
          <div className="BOX1">
            <label htmlFor="">Shift End</label>
            <input
              type="time"
              name="shiftEndAt"
              placeholder="shift end"
              value={formInputs.shiftEndAt}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="close-and-add">
          <MainButton
            text="add"
            onClick={handelAddEmployee}
            value="submit"
            disabled={!isFormFilled}
            className="btn--add_employee"
          />
          <MainButton text="close" className="closeBtn" onClick={handelClose} />
        </div>
      </form>
    </div>
  );
}
