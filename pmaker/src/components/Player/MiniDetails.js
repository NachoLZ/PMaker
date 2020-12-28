import React from 'react';
import MiniControls from './MiniControls';

function MiniDetails(props) {
    return (

        <div className="c-player--minidetails">
            <div className ="c-player--minplayer">
                <div className="minidetails-img">
                    <img src={props.song.img_src} alt="" />
                </div>
                <MiniTitleAuthor song={props.song} />
                <MiniControls isPlaying={props.isPlaying} setIsPlaying={props.setIsPlaying} SkipSong={props.SkipSong} />            
            </div>
        </div>
    )
}


function MiniTitleAuthor(props){
    return(
        <div className="c-player--minidetails">
            <h3 className="minidetails-title">{props.song.title}</h3>
            <h4 className="minidetails-artist">{props.song.artist}</h4>
        </div>
    )
}

export default MiniDetails
