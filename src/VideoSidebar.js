import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';


function VideoSidebar({likes,comments,share}) {
    const [liked , setLiked] = useState(false);
  return (
    <div className='videoSidebar'>
      <div className="videoSidebar__button">
        { liked ?(
              <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)}/>
        )    
            : (<FavoriteBorder fontSize="large" onClick={(e) => setLiked(true)}/>
            )
        }
        <p>{liked ? likes + 1 : likes }</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{comments}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{share}</p>
      </div>

    </div>
  )
}

export default VideoSidebar ;
