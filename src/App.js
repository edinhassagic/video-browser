import Search from "./components/Search";
import "./styles.css";
import { useState, useEffect } from "react";
import youtubeApi from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [videosMetaInfo, setVideosMetaInfo] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const onVideoSelected = (videoId) => {
    setSelectedVideoId(videoId);
  };

  const onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
      },
    });
    setVideosMetaInfo(response.data.items);
    setSelectedVideoId(response.data.items[0].id.videoId);
    setTitle(response.data.items[0].snippet.title);
    setDescription(response.data.items[0].snippet.description);
    console.log(videosMetaInfo, selectedVideoId,title,description);
  };

  useEffect(() => {
    onSearch("ReactJS");
  }, []);

  return (
    <div className="App">
      <Search onSearch={onSearch} />

      <VideoList onVideoSelected={onVideoSelected} data={videosMetaInfo} />

      <VideoPlayer videoId={selectedVideoId} title={title} description={description} />
    </div>
  );
}

export default App;
