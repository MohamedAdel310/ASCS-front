import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";

// import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

// return <Login />;
export default function App() {
  return <RouterProvider router={router} />;
}
