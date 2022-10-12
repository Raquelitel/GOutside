import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import EditProfile from "../pages/editProfile/EditProfile.jsx";
import { Context } from "../store/appContext.js";
import { Navbar } from "./navbar/navbar.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";

const ProtectedRoute = ({ children }) => {
  const { store, actions } = useContext(Context);

  if (store.tokenLS === null) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <EditProfile />
      </div>

      <main>{children}</main>
    </div>
  );
};

export default ProtectedRoute;
