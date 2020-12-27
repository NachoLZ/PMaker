import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Details from './Details';
import Playlist from './Playlist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlaylist, setShowPlaylist] = useState(false)
    const HandleClick = () => setShowPlaylist(true)


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
            <button className="min-player" onClick={HandleClick}>
                {showPlaylist ? <Playlist /> : null}
                <FontAwesomeIcon icon={faAngleDown} size = '2x'/>
            </button>    
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Reproduciendo desde</h4>
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <p>Siguiente: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
        </div>
    )
}

export default Player;
