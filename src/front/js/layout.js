import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/Home/Home.jsx";
import injectContext, { Context } from "./store/appContext";
import { Navbar } from "./component/navbar/navbar.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Login from "./pages/login/Login.jsx";
import HomeUser from "./pages/homeUser/HomeUser.jsx";

import EditProfile from "./pages/editProfile/EditProfile.jsx";
import Sidebar from "./component/sidebar/Sidebar.jsx";
import AllCompetition from "./pages/allCompetition/AllCompetition.jsx";
import InfoCompetition from "./pages/infoCompetition/InfoCompetition.jsx";
import Clasification from "./pages/clasification/Clasification.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";


import VideoLibrary from "./pages/videoLibrary/components/VideoLibrary.jsx";
import CreateCompetition from "./pages/CreateCompetition/CreateCompetition.jsx";
import ProtectedRoute from "./component/protectedRoute";
import MyAllCompetition from "./pages/myAllCompetition/MyAllCompetition.jsx";

const Layout = () => {

  const basename = process.env.BASENAME || ""

  const { store, actions } = useContext(Context);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<AboutUs />} path="/aboutus" />


            <Route element={<ProtectedRoute />}>
              <Route path="/home/user" element={<HomeUser />} />
              <Route element={<VideoLibrary />} path="/VideoLibrary" />

              <Route path="edit-profile" element={<EditProfile />} />
              <Route
                path="/all-commpetition"
                element={<AllCompetition.jsx />}
              />
              <Route
                path="/competition/<int:id/>"
                element={<InfoCompetition />}
              />
              <Route
                path="/createCompetition"
                element={<CreateCompetition />}
              />
              <Route
                path="/my-all-competition"
                element={<MyAllCompetition />}
              />
              {/*               <Route
                path="/clasification/<int:id/>"
                element={<Clasification />}
              /> */}
            </Route>

            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
