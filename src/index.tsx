import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import "./index.css";

import ErrorPage from "components/uikit/ErrorPage";

import App from "./App";

const router = createBrowserRouter([{ path: "/", element: <App />, errorElement: <ErrorPage /> }]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
