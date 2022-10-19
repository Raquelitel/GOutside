import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";
import { Navbar } from "../../../component/navbar/navbar.jsx";
import Sidebar from "../../../component/sidebar/Sidebar.jsx";

const VideoLibrary = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // useEffect(() => {first}, [selectedVideo])

  const handleSubmit = async (term) => {
    console.log(term);

    setSelectedVideo(null);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCtcQ6TPwXAYgZ1Mcl3M1vng&${new URLSearchParams(
        { q: term }
      )}&key=AIzaSyC3ZDzQQjb44PyzPhQ60yPkXwW7OKB_j5c`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
      });
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="container-library align-items-center justify-content-md-center text-center ">
      <div className="row">
        <Navbar />
      </div>

      <div className="card justify-content-start mt-5 p-5">
        <div className="row">
          <SearchBar handleFormSubmit={(term) => handleSubmit(term)} />
        </div>

        <div className="row">
          <div className="video-container">
            <div className="video-title">
              <VideoDetail video={selectedVideo} />
            </div>

            <div className="col-4 video-screen">
              {selectedVideo === null && (
                <VideoList
                  handleVideoSelect={(video) => handleVideoSelect(video)}
                  videos={videos}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLibrary;
