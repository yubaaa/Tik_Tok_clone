import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import Video from './Video';

function App() {
  const [videos,setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await db.collection('videos').get();
      const videoData = querySnapshot.docs.map((doc) => doc.data());
      setVideos(videoData);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className='app_videos'>
        {videos.map((video, index) => (
          <Video
            key={index}
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            comments={video.comments}
            share={video.share}
          />
        ))}
    </div>
    </div>
  );
}

export default App;
