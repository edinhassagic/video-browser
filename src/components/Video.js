import React from "react";
import "../styles/_video.css";



const Video = ({ videos, onVideoSelected }) => {


  function selectVideo(id, description, title) {
    onVideoSelected(id, description, title);
  }
  
  function getCss(imageurl) {
    const _styles = {
      backgroundImage: `url(${imageurl})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      height: "180px",
      position: "relative",
    };
    return _styles;
  }
  
  
    return (
      <div>
{videos.map(({ snippet, id }, index) => {
      return (
        <div
          className="video"
          key={index}
          onClick={() => {selectVideo(id.videoId, snippet.descrition, snippet.title)}}
        >
          <div className="title">{snippet.title}</div>
          
          <img src={snippet.thumbnails.high.url} alt={snippet.title} />
          
        </div>
      );
    })
  }
      </div>
      
)
  
};

export default Video;
