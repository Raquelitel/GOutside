import React from "react";

const VideoDetail = ({ video }) => {
  console.log(video);
  if (!video) {
    return "";
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="container-fluid">
      <div className="embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
