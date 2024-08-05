// src/main.tsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./App";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import Recover from "./pages/recover/Recover";
import Free from "./pages/freeCourses/Free";
import MainLayout from "./mainLayout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aulas-gratuitas",
        element: <Free />,
      },
      // Adicione outras rotas que necessitam da Navbar e Footer aqui
    ],
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
