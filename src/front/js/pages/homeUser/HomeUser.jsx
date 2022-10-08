import React from "react";
import { Outlet } from "react-router-dom";
import EditProfile from "../editProfile/EditProfile.jsx";

const HomeUser = () => {
  return (
    <>
      <Outlet />
      <div>
        <EditProfile />
      </div>
    </>
  );
};

export default HomeUser;
