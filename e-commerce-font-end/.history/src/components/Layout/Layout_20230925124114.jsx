import React from "react";
import { useLocation } from "react-router-dom";
import Routers from "../../routers/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../../pages/AddProduct";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith("/M") ? (
        <AddProduct />
      ) : (
        <Header />
      )}
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
