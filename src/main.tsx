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
import Support from "./pages/schoolSupport/Support";
import { UserProvider } from "./context/UserContext";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    // Rotas que necessitam da Navbar e Footer aqui
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aulas-gratuitas",
        element: <Free />,
      },
      {
        path: "/reforco-escolar",
        element: <Support />,
      }
      
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
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
