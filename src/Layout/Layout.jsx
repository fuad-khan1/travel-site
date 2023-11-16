import React from "react";
import Header from "../pages/Home/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
