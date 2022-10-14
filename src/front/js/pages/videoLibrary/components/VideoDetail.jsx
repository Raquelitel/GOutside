import React from 'react'

const VideoDetail = ({ video }) => {
  console.log(video);
    if (!video) {
      return <div>
         <h1>Enter search keyword to load...</h1>       
      </div>;
    }
  
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div>
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

export default VideoDetail