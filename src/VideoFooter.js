import React from "react"
import './VideoFooter.css'

import MusicNoteIcon from '@mui/icons-material/MusicNote';

import Ticker from 'react-ticker';

function VideoFooter({channel,song,description}) {
    return(
        <div className="VideoFooter">
           <div className="VideoFooter__text">
             <h3>@{channel} </h3>
             <p>{description} </p>
             <div className="VideoFooter__ticker">
             <MusicNoteIcon className="VideoFooter__icon" />
             <Ticker mode = "smooth">
            {({index})=> (
                <>
                 <p>{song}</p>
                </>
            )
            }
           </Ticker>
             </div>
              
           </div>
            <img
            className="VideoFooter__record"
            src="https://static.thenounproject.com/png/934821-200.png"
            alt=""
            ></img>
        </div>
    )
}

export default VideoFooter