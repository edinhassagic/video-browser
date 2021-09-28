import React from "react";

const VideoPlayer = ({ videoId }) => {
  
 
  return (
    <div className="video-player">
      <iframe width="560" height="315"
        title={videoId}
        
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </div>
  );
};

export default VideoPlayer;
