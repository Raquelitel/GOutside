import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./pages/Home.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar/navbar.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Login from "./pages/login/Login.jsx";
import HomeUser from "./pages/homeUser/HomeUser.jsx";
import VideoLibrary, { getServerSideProps } from "./pages/videoLibrary/videoLibrary.jsx";
import CreateCompetition from "./pages/CreateCompetition/CreateCompetition.jsx";



const Layout = () => {

  const basename = process.env.BASENAME || "";
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    getServerSideProps().then((data) => {
      setLibrary(data.props.data);
    });
  	}, []);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<VideoLibrary library={library} />} path="/VideoLibrary" />


            <Route element={<HomeUser />}>
              <Route path="/home/user" element={<Navbar />} />
              <Route element={<CreateCompetition />} path="/createCompetition" />
              
            </Route>
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
