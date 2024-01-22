import React, { useState, useEffect } from 'react';
import MainButton from '../../../../components/button-main';
import postEmployee from '../../../../api/postEmployee';

function isObjValuesTrue(obj) {
  if (Object.keys(obj).length < 11) return false;
  return Object.values(obj).every((val) => val !== '');
}

export default function PopupAddEmployee({ setOpenEmployeePopup }) {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [formInputs, setFormInputs] = useState({});

  useEffect(() => {
    console.log('formInputs: ', formInputs);
    setIsFormFilled(isObjValuesTrue(formInputs));
    // setIsFormFilled(Object.values(formInputs).every((val) => val !== false));
  }, [formInputs]);

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handelClose = (e) => {
    e.preventDefault();
    setOpenEmployeePopup(false);
  };

  const handelAddEmployee = (e) => {
    e.preventDefault();
    postEmployee(formInputs, setOpenEmployeePopup);
  };

  function InputComp({ type, text, handleChange, formInputs }) {
    const name = text.toLowerCase().replaceAll(' ', '-');
    console.log('name: ', name);
    console.log('text: ', text);

    return (
      <>
        <label htmlFor={name}>{text}</label>
        <input
          id={name}
          type={type}
          name={name}
          placeholder={text}
          value={formInputs[name]}
          onChange={handleChange}
          // required
        />
      </>
    );
  }

  return (
    <>
      <h1>Add Employee</h1>
      <form action="">
        <InputComp
          key={1}
          formInputs={formInputs}
          handleChange={handleChange}
          type={'text'}
          text={'Full Name'}
        />
        {/* <label htmlFor="">'text'</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="text"
          value={formInputs[test]}
          onChange={handleChange}
          // required
        /> */}
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
            <InputComp
              key={2}
              formInputs={formInputs}
              handleChange={handleChange}
              type={'date'}
              text={'Birth Date'}
            />
          </div>
        </div>

        <div className="BOX">
          <div className="BOX1">
            <InputComp
              key={3}
              formInputs={formInputs}
              handleChange={handleChange}
              type={'email'}
              text={'Email'}
            />
          </div>
          <div className="BOX1">
            <InputComp
              key={4}
              formInputs={formInputs}
              handleChange={handleChange}
              type={'tel'}
              text={'Phone Number'}
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
            <InputComp
              key={5}
              formInputs={formInputs}
              handleChange={handleChange}
              type={'number'}
              text={'Employee ID'}
            />
          </div>

          <div className="BOX1">
            <InputComp
              key={6}
              formInputs={formInputs}
              handleChange={handleChange}
              type={'number'}
              text={'Salary'}
            />
          </div>
        </div>

        <div className="BOX last-BOX">
          <div className="BOX1">
            <InputComp
              key={7}
              formInputs={formInputs}
              handleChange={handleChange}
              type={'time'}
              text={'Shift Start At'}
            />
          </div>
          <div className="BOX1">
            <InputComp
              key={8}
              formInputs={formInputs}
              handleChange={handleChange}
              type={'time'}
              text={'Shift End At'}
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
          <MainButton text="close" onClick={handelClose} />
        </div>
      </form>
    </>
  );
}
