import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "../MenuBar";
import Footer from "../Footer";
import { PageContainer } from "./Layout.styles";

const Layout = () => {
  return (
    <>
      <MenuBar />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  );
};

export default Layout;
