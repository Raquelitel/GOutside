import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../component/sidebar/Sidebar.jsx";
import EditProfile from "../editProfile/EditProfile.jsx";

const HomeUser = () => {
  return (
    <>
      <Outlet />
      <div>hola desde home user ruta privada</div>
      <Sidebar />
    </>
  );
};

export default HomeUser;
