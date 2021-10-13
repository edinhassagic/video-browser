import React from "react";

const VideoPlayer = ({ videoId, description, title }) => {
  return (
    <div className="video-player">
      <iframe
        width="560"
        height="315"
        title={videoId}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
      <div className="titl">
        {title}
      </div>
      <div className="desc">
      {description}
     
      </div>
    </div>
  );
};

export default VideoPlayer;
