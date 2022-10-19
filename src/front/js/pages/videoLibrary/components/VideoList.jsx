import React from 'react'
import VideoItem from './VideoItem.jsx';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className='relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;