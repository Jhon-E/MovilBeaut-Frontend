import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { IniciarSesion } from "./components/IniciarSesion.jsx";
import { Registrarse } from "./components/Registrarse.jsx"
const router = createBrowserRouter([
  {
    path: "/inicio",
    element: <App />,
  },
  {
    path: "/",
    element: <IniciarSesion />,
  },
  {
    path: "/registrarse",
    element: <Registrarse />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
