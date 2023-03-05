import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import Branch from "./pages/branch/Branch";

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
]);

// return <Login />;
export default function App() {
  return <RouterProvider router={router} />;
}
