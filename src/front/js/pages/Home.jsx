import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import VideoLibrary, { getServerSideProps } from "./videoLibrary.jsx";
import "../../styles/home.css";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    getServerSideProps().then((data) => {
      setLibrary(data.props.data);
    });
  }, []);
  return (
    <div className="text-center mt-5 videos-container">
      <VideoLibrary library={library} />
    </div>
  );
};

export default Home;
