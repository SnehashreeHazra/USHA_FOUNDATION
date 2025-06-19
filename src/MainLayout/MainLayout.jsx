import React from "react";
import Header from "../Layout/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Layout/Footer";

const MainLayout = () => {
  const location = useLocation();

  // const hideFooter =
  //   location.pathname === "/sign-up" ||
  //   location.pathname === "/login" ||
  //   location.pathname === "/market-place" ||
  //   location.pathname === "/market-place2" ||
  //   location.pathname === "/social-feed" ||
  //   location.pathname === "/messaging-section" ||
  //   location.pathname === "/blog-section";

  return (
    <>
      <Header />
      <Outlet />
      {/* {!hideFooter && <Footer />} */}
    </>
  );
};

export default MainLayout;
