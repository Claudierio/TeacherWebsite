// src/main.tsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./App";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import Recover from "./pages/recover/Recover";
import Free from "./pages/freeCourses/Free";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/recover", 
    element: <Recover />,
  },
  {
    path: "/aulas-gratuitas",
    element: <Free />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
