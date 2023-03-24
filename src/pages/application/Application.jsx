import React from "react";
import "./style/application.css";
import { Outlet } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

import logo from "./../../../public/myaz.png";

const linkStyle = { width: "100%", textAlign: "start" };

export default function Application() {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="links">
          <div className="application--logo">
            <img src={logo} alt="" className="application--logo--img" />
            <h1>MYAZ</h1>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon
                className="users"
                icon={faChartLine}
              ></FontAwesomeIcon>
              <a href="/application/dashboard" style={linkStyle}>
                Dashboard
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                className="users"
                icon={faUsers}
              ></FontAwesomeIcon>
              <a href="/application/employees" style={linkStyle}>
                Employees
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                className="users"
                icon={faFileArrowUp}
              ></FontAwesomeIcon>
              <a href="/application/daily-report" style={linkStyle}>
                Daily Report
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                className="users"
                icon={faCalendarCheck}
              ></FontAwesomeIcon>
              <a href="/application/attendance" style={linkStyle}>
                Attendance
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                className="users"
                icon={faVideo}
              ></FontAwesomeIcon>
              <a href="/application/stream" style={linkStyle}>
                Stream
              </a>
            </li>
          </ul>
        </div>

        <div className="dasbaord_container">
          <div className="nav">
            <h3>New Cairo Branch</h3>
            <div className="log">
              <input type="submit" value="Log out" />
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
