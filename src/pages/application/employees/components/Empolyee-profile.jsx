import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHand,
  faUserXmark,
  faSmoking,
  faHelmetSafety,
} from '@fortawesome/free-solid-svg-icons';
import '../../style/employee-profile.css';
import ChartDonate from '../../attendance/components/Chart-donate';
import EmplyeeProfileTable from './Emplyee-profile-table';
import PopupEditDetails from './PopupEditDetails';
import { useParams } from 'react-router-dom';

export default function EmpProfile() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [employeeAnother, setEmployeeAnother] = useState(null);
  const [inputField, setInputField] = useState({});
  // const [openEditDetailsPopup, setOpenEditDetailsPopup] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [btnHidden, setBtnHidden] = useState(true);

  const handleChangeInput = (e, type) => {
    setInputField({ ...inputField, [type]: e.target.value });
    console.log(inputField);
  };

  const handleClickEdit = () => {
    setCanEdit(true);
    setBtnHidden(false);
  };

  const handleClickSave = () => {
    setCanEdit(false);
    setBtnHidden(true);
    setEmployeeAnother(employee);
    setInputField(null);
  };

  const handleClickCancel = () => {
    setCanEdit(false);
    setBtnHidden(true);
    setEmployeeAnother(employee);
    setInputField(null);
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(
          `https://myaz.cyclic.app/api/employees/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setEmployee(data?.data.employee);
          console.log('API RESPONSE for employee data', data?.data.employee);
        } else {
          // Handle error response
          console.error(
            'Failed to fetch employee details:',
            response.statusText
          );
        }
      } catch (error) {
        // Handle fetch error
        console.error('Failed to fetch employee details:', error);
      }
    };
    fetchEmployee();
  }, []);

  return (
    <div className="emp-profile">
      <div className="contain">
        <h1>Employee Details</h1>
        <div className="info">
          <div className="image">
            <img src="/image/man-profile-cartoon_18591-58482.png" alt="" />
          </div>
          <div className="information">
            {/* <h3>{employee?.name}</h3> */}
            <div className="label-container">
              <input
                type="text"
                value={
                  // if user delete all name condition add name so I do this so if there is no name it will apear no name
                  inputField?.name === ''
                    ? ''
                    : inputField?.name || employee?.name || 'there is no Name'
                  // if (name) is false and no empty, type employee name
                }
                readOnly={!canEdit}
                onChange={(e) => handleChangeInput(e, 'name')}
              />
              <label htmlFor="">Name</label>
            </div>
            <div className="label-container">
              <input
                type="text"
                value={
                  inputField?.phoneNumber === ''
                    ? ''
                    : inputField?.phoneNumber ||
                      employee?.phoneNumber ||
                      'there is no phone'
                }
                readOnly={!canEdit}
                onChange={(e) => handleChangeInput(e, 'phoneNumber')}
              />
              <label htmlFor="">Phone Number</label>
            </div>
            <div className="label-container">
              <input
                type="text"
                value={
                  inputField?.job === '' ? '' : inputField?.job || employee?.job
                }
                readOnly={!canEdit}
                onChange={(e) => handleChangeInput(e, 'job')}
              />
              <label htmlFor="">Job Title</label>
            </div>
            <div className="label-container">
              <input
                type="text"
                value={
                  inputField?.department === ''
                    ? ''
                    : inputField?.department || employee?.department
                }
                readOnly={!canEdit}
                onChange={(e) => handleChangeInput(e, 'department')}
              />
              <label htmlFor="">Department</label>
            </div>
          </div>
          <div className="shift">
            <div className="label-container">
              <input
                type="email"
                value={
                  inputField?.email === ''
                    ? ''
                    : inputField?.email ||
                      employee?.email ||
                      'there is no email'
                }
                readOnly={!canEdit}
                onChange={(e) => handleChangeInput(e, 'email')}
              />
              <label htmlFor="">Email</label>
            </div>
            <div className="label-container">
              <input
                type="text"
                value={
                  inputField?.shiftStartAt === ''
                    ? ''
                    : inputField?.shiftStartAt ||
                      employee?.shiftStartAt ||
                      '00:00 '
                }
                readOnly={!canEdit}
                onChange={(e) => handleChangeInput(e, 'shiftStartAt')}
              />
              <label htmlFor="">Shift Start at</label>
            </div>
            <div className="label-container">
              <input
                type="text"
                value={
                  inputField?.shiftEndAt === ''
                    ? ''
                    : inputField?.shiftEndAt || employee?.shiftEndAt || '00:00 '
                }
                readOnly={!canEdit}
                onChange={(e) => handleChangeInput(e, 'shiftEndAt')}
              />
              <label htmlFor="">Shift End at</label>
            </div>
            <div className="label-container">
              <input
                type="number"
                value={
                  inputField?.salary === ''
                    ? ''
                    : inputField?.salary || employee?.salary || '00:00 '
                }
                readOnly={!canEdit}
                onChange={(e) => handleChangeInput(e, 'salary')}
              />
              <label htmlFor="">Salary</label>
            </div>
          </div>
          <div className="date">
            {/* <h5>
              Salary: <span>{employee?.salary || "0000"}EGP</span>
            </h5> */}
            <div className="circle">
              <h5>
                Status: <span>{employee?.status || 'NULL'}</span>
              </h5>
              <div className="active"></div>
            </div>
            <h5>
              Hire Date:{' '}
              <span>{employee?.hireDate.slice(0, 10) || '0000-00-00'}</span>
            </h5>
            <h5>
              Last Edit:{' '}
              <span>{employee?.lastEdit.slice(0, 10) || '0000-00-00'}</span>
            </h5>
          </div>
        </div>
        <div className="btn--edit-details--">
          <button
            className="btn--edit-details"
            onClick={handleClickEdit}
            style={{ fontSize: '14px' }}
            hidden={!btnHidden}
          >
            Edit Details
          </button>
          <button
            className="btn--edit-details"
            onClick={handleClickSave}
            hidden={btnHidden}
          >
            Save
          </button>
          <button
            className="btn--edit-details"
            onClick={handleClickCancel}
            hidden={btnHidden}
            style={{ background: 'red' }}
          >
            Cancel
          </button>
        </div>
        {/* <PopupEditDetails
          active={canEdit}
          setCanEdit={setCanEdit}
        /> */}
        <div className="overview">
          <div className="title">
            <h3>Overview</h3>
            <div className="ends">
              <div className="day">Feb 9</div>
              <select name="date" id="date">
                <option value="1">Day</option>
                <option value="2">Month</option>
                <option value="3">Year</option>
              </select>
            </div>
          </div>
        </div>
        <div className="donate">
          <ChartDonate num="9" text="Absense" clName="circle1" />
          <ChartDonate num="29" text="Late" clName="circle2" />
          <ChartDonate num="18" text="Undertime" clName="circle3" />
          <ChartDonate num="8" text="Overtime" clName="circle4" />
        </div>
        <div className="reports">
          <div className="container">
            <div className="content">
              <FontAwesomeIcon className="icon" icon={faHand}></FontAwesomeIcon>
              <div className="title">
                <h4>Restricted Area</h4>
                <div className="number">1</div>
              </div>
            </div>
            <div className="content">
              <FontAwesomeIcon
                className="icon"
                icon={faUserXmark}
              ></FontAwesomeIcon>
              <div className="title">
                <h4>Unauthorized Person</h4>
                <div className="number">3</div>
              </div>
            </div>
            <div className="content">
              <FontAwesomeIcon
                className="icon"
                icon={faSmoking}
              ></FontAwesomeIcon>
              <div className="title">
                <h4>Smooking</h4>
                <div className="number">6</div>
              </div>
            </div>
            <div className="content">
              <FontAwesomeIcon
                className="icon"
                icon={faHelmetSafety}
              ></FontAwesomeIcon>
              <div className="title">
                <h4>Sefety Violation</h4>
                <div className="number">4</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cont">
          <h4>Attendance</h4>
          <div className="day">February</div>
        </div>

        <EmplyeeProfileTable />
      </div>
    </div>
  );
}
