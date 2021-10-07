import Search from "./components/Search";
import "./styles.css";
import { useState, useEffect } from "react";
import youtubeApi from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription]= useState ("");
  const [keyword, setKeyword] = useState("");

  const onVideoSelected = (videoId, description, title) => {
    setSelectedVideoId(videoId);
    
    setTitle(title);
    setDescription(description);
  };

  const submitHandler =(event)=>{
    event.preventDefault();
    onSearch(keyword);
  }

  const onSearch = async (keyword) => {
    if (keyword === undefined || keyword === '') {
      keyword = 'ReactJS';
  }
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
      },
    });
    setVideos(response.data.items);
    setSelectedVideoId(response.data.items[0].id.videoId);
    setTitle(response.data.items[0].snippet.title);
    setDescription(response.data.items[0].snippet.description);
  };

  useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <div className="App">
      <Search submitHandler={submitHandler} setKeyword={setKeyword}/>

      <VideoList onVideoSelected={onVideoSelected} videos={videos} />

      <VideoPlayer videoId={selectedVideoId} videos={videos} title={title} description={description} />
    </div>
  );
}

export default App;
