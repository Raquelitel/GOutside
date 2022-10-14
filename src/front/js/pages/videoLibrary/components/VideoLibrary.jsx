import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";
import YoutubeAPI from "../apis/YoutubeAPI.jsx";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";

const VideoLibrary = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // useEffect(() => {first}, [selectedVideo])

  const handleSubmit = async (term) => {
    setSelectedVideo(null)
    const response = await YoutubeAPI.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="container">
      <SearchBar handleFormSubmit={(term) => handleSubmit(term)} />
      <div className="">
        <div className="">
          <div className="">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="">
            {selectedVideo === null && 
            <VideoList
              handleVideoSelect={(video) => handleVideoSelect(video)}
              videos={videos}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLibrary;
