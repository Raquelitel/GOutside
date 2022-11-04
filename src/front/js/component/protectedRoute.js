import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navbar } from "./navbar/navbar.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";

const ProtectedRoute = () => {
  const { store, actions } = useContext(Context);
  const token = actions.getTokenLS();

  if (token === null) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="h-100">
      <Navbar />
      <div className="d-flex flex-nowrap row">
        <Sidebar />
        <main className="container-fluid col-10 col-md-9">
          <div className="row mt-3">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProtectedRoute;
