import Search from "./components/Search";
import "./styles.css";
import { useState } from "react";
import youtubeApi from "./api/youtube"
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

function App() {

 const [videosMetaInfo, setVideosMetaInfo] = useState([])
 const [selectedVideoId, setSelectedVideoId] = useState(null)

 const onVideoSelected = videoId => {
   setSelectedVideoId(videoId)
 }

 const onSearch = async keyword => {
  
 
   const response = await youtubeApi.get("/search" , {
     params: {
       q: keyword
     }
   })
   setVideosMetaInfo(response.data.items)
  setSelectedVideoId(response.data.items[0].id.videoId)
  console.log(videosMetaInfo, selectedVideoId)
 }

 
 
  return (
    <div className="App">
      < Search onSearch={onSearch} />
      < VideoList  onVideoSelected= {onVideoSelected}
       data = {videosMetaInfo}
      />

      <VideoPlayer videoId={selectedVideoId}/>
    </div>
  );
}

export default App;
