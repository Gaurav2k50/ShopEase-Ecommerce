import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

// Functional component Layout that takes children as props
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>{" "}
      {/* Rendering children components inside a div with 'content' class */}
      <Footer />
    </div>
  );
};

export default Layout;
