import React from "react";

const VideoPlayer = ({ videoId }) => {
  
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
    );
  }
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
