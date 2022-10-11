import React from "react";
import { Navbar } from "./navbar/navbar.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";

const ProtectedRoute = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default ProtectedRoute;
