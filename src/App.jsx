import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/login/Login';
import Landing from './pages/landing/Landing';
import Application from './pages/application/Application';
import Dashboard from './pages/application/dashboard/Dashboard';
import Employees from './pages/application/employees/Employees';
import DailyReport from './pages/application/daily-report/Daily-Report';
import Attendance from './pages/application/attendance/Attendace';
import Stream from './pages/application/stream/Stream';
import EmployeeProfile from './pages/application/employees/components/Empolyee-profile';
import PageNotFound from './components/PageNotFound';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/application" element={<Application />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees">
            <Route index element={<Employees />} />
            <Route path=":id" element={<EmployeeProfile />} />
          </Route>
          <Route path="daily-report" element={<DailyReport />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="stream" element={<Stream />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
