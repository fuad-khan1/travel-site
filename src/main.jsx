import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home/Home.jsx";
import About from "./pages/About/About";
import Destination from "./pages/Destination/Destination.jsx";
import Layout from './Layout/Layout';
import Login from './pages/Login/Login';
import Registration from './pages/Login/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
