import React from "react";
import { Outlet } from "react-router-dom";

const HomeUser = () => {
  return (
    <>
      <Outlet />
      <div>Hello World</div>
    </>
  );
};

export default HomeUser;
