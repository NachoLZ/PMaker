import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import MiniControls from './MiniControls';
import Details from './Details';
import MiniDetails from './MiniDetails';
import Playlist from './Playlist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function RenderMini(props){
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState();

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    

    return (

        <div className="c-player"> 
            <Playlist /> 
            <div className="min-player">       
                <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
                <MiniDetails song={props.songs[props.currentSongIndex]} isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong}/>
                
            </div>  
        </div>
    )

}

function RenderFull(props){
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState();

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    

    return (

        <div className="c-player">   
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Reproduciendo desde</h4>
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <p>Siguiente: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
        </div>
    )
}


function Player(props) {
    /*const audioEl = useRef(null);*/
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlaylist, setShowPlaylist] = useState(true);
    const [angleBtn, setButton] = useState(false)
    const HandleClick = () => {setShowPlaylist(s => !s);
                               setButton(b => !b)};


    let btn_class = angleBtn ? "c-player--angledown" : "minialbumcover-button";

    return (

        <div>
            <button className={btn_class} onClick={HandleClick}>  
                <FontAwesomeIcon icon={faAngleDown} size = '2x'/>
            </button>
            {showPlaylist ? <RenderMini             currentSongIndex={props.currentSongIndex} 
                                                    setCurrentSongIndex={props.setCurrentSongIndex} 
                                                    nextSongIndex={props.nextSongIndex} 
                                                    songs={props.songs}
                                                    isPlaying={props.isPlaying}/> 
                          : <RenderFull             currentSongIndex={props.currentSongIndex} 
                                                    setCurrentSongIndex={props.setCurrentSongIndex} 
                                                    nextSongIndex={props.nextSongIndex} 
                                                    songs={props.songs}
                                                    isPlaying={props.isPlaying}/>}
        </div>
    )
}

export default Player;
