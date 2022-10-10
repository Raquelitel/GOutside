import React, { useContext, useEffect, useState } from "react";
import VideoLibrary, {
  getServerSideProps,
} from "./videoLibrary/videoLibrary.jsx";
import "../../styles/home.css";
import EditProfile from "./editProfile/EditProfile.jsx";

const Home = () => {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    getServerSideProps().then((data) => {
      setLibrary(data.props.data);
    });
  }, []);

  return (
    <div className="text-center mt-5 videos-container">
      <EditProfile />
      {/*  <VideoLibrary library={library} /> */}
    </div>
  );
};

export default Home;
