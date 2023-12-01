import React from "react";
import Nav from "../Components/navbar/Nav";

function Layout({ children }) {
  return (
    <>
      <Nav />

      <div className="content">{children}</div>
    </>
  );
}

export default Layout;
