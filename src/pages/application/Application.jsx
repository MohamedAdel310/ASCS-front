import React, { useState } from "react";
import "./style/application.css";
import { Outlet, NavLink } from "react-router-dom";
import LogOutPopup from "../../components/LogOutPopup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

import logo from "./../../../public/myaz.png";

export default function Application() {
  const [openLogOutPopup, setOpenLogOutPopup] = useState(false);

  return (
    <div className="dashboard">
      <div className="container">
        <div className="links">
          <a href="../#Home">
            <div className="application--logo">
              <img src={logo} alt="" className="application--logo--img" />
              <h1>MYAZ</h1>
            </div>
          </a>
          <ul className="navbar-list">
            <NavLink to="/application/dashboard" className="link-style">
              <li>
                <FontAwesomeIcon
                  className="users"
                  icon={faChartLine}
                ></FontAwesomeIcon>
                <p>Dashboard</p>
              </li>
            </NavLink>

            <NavLink to="/application/employees" className="link-style">
              <li>
                <FontAwesomeIcon
                  className="users"
                  icon={faUsers}
                ></FontAwesomeIcon>
                <p>Employees</p>
              </li>
            </NavLink>

            <NavLink to="/application/daily-report" className="link-style">
              <li>
                <FontAwesomeIcon
                  className="users"
                  icon={faFileArrowUp}
                ></FontAwesomeIcon>
                <p>Daily Report</p>
              </li>
            </NavLink>

            <NavLink to="/application/attendance" className="link-style">
              <li>
                <FontAwesomeIcon
                  className="users"
                  icon={faCalendarCheck}
                ></FontAwesomeIcon>
                <p>Attendance</p>
              </li>
            </NavLink>

            <NavLink to="/application/stream" className="link-style">
              <li>
                <FontAwesomeIcon
                  className="users"
                  icon={faVideo}
                ></FontAwesomeIcon>
                <p>Stream</p>
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="dasbaord_container">
          <div className="nav">
            <h3>New Cairo Branch</h3>
            <div className="log">
              <input
                type="submit"
                value="Log out"
                onClick={() => setOpenLogOutPopup(true)}
              />
              <LogOutPopup
                active={openLogOutPopup}
                setOpenLogOutPopup={setOpenLogOutPopup}
              />

              <img src="" alt="" />
            </div>
          </div>
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
