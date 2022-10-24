import React from 'react';
import '../style/VideoStyles.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className='align-items-center justify-content-md-center text-center video-item item'>
            <div className='video-contaier'>
                <h2 className='video-title'>{video.snippet.title}</h2>
                <img className='video-img' src={video.snippet.thumbnails.url} alt={video.snippet.description}/>
            </div>
        </div>
    )
};
export default VideoItem;