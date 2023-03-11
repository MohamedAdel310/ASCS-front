import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import Branch from "./pages/branch/Branch";
import Application from "./pages/application/Application";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/branch",
    element: <Branch />,
  },
  {
    path: "/application",
    element: <Application page="dashboard" />,
  },
  {
    path: "/application/dashboard",
    element: <Application page="dashboard" />,
  },
  {
    path: "/application/employees",
    element: <Application page="employees" />,
  },
  {
    path: "/application/attendance",
    element: <Application page="attendance" />,
  },
  {
    path: "/application/stream",
    element: <Application page="stream" />,
  },
  {
    path: "/application/daily-report",
    element: <Application page="daily-report" />,
  },
]);

// return <Login />;
export default function App() {
  return <RouterProvider router={router} />;
}
