import React from "react";
import NavBarB from "../NavbarB/NavbarB";
import Footer from "../Footer/Footer";

const Layout = ({ children, navbar, footer }) => {
  console.log("props", children, navbar, footer);
  return (
    <div className="d-flex flex-column min-vh-100">
      {(navbar === true || navbar === undefined) && <NavBarB />}
      <main className="flex-grow-1">{children}</main>
      {(footer === true || footer === undefined) && <Footer />}
    </div>
  );
};

export default Layout;
