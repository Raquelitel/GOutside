import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navbar } from "./navbar/navbar.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";

const ProtectedRoute = ({ children }) => {
  const { store, actions } = useContext(Context);

  /*   if (store.tokenLS === null) {
    return <Navigate to="/login" replace />;
  } */
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedRoute;
