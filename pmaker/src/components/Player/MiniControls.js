import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

function MiniControls(props) {
    return (
        <div className="c-player--minicontrols">
            {/*<button className="miniskip-btn" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>*/}
            <button className="miniplay-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            {/*<button className="miniskip-btn" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>*/}
        </div>
    )
}

export default MiniControls
