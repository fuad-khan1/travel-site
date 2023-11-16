import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home/Home.jsx";
import About from "./pages/About/About";
import Destination from "./pages/Destination/Destination.jsx";
import Layout from './Layout/Layout';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
