import React, { useState } from 'react';
import { useRef } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from "./VideoSidebar";
        
function Video({ url, channel, description, song, likes, comments, share })  {
    const[playing , setPlaying] = useState(false)

    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
          videoRef.current.pause();
          setPlaying(false);
        } else {
          videoRef.current.play();
          setPlaying(true);
        }
      };

    return (
        <div className="video">
             <video 
             className='video__player'
             loop
             onClick={onVideoPress}
             ref={videoRef}
             src={url}>
             </video>
            <VideoFooter channel={channel} description={description } song={song}/> 
            <VideoSidebar likes={likes} comments={comments} share={share }/>
        </div>
    );
};
export default Video;