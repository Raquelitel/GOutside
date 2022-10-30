import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navbar } from "./navbar/navbar.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";

const ProtectedRoute = ({ children }) => {
  const { store, actions } = useContext(Context);
  const token = actions.getTokenLS()
   
  if (token === null) {
   return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <Navbar />
      <div className="row">
        <Sidebar />
        <main className="container col-10 mx-auto">
          <div className="row">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProtectedRoute;
