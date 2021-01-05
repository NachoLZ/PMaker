import {useState, useEffect} from 'react';
import Player from './components/Player/Player';
import canciones from './components/Player/canciones'
import Playlist from './components/Player/Playlist';

function App() {

  
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [Canciones, setCanciones] = useState(canciones);

  function handlerx(argument) {
    setCanciones(argument)
  }
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > Canciones.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  

  return (
    <div className="App">
      <Player 
        cambiar = {handlerx} 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={Canciones}
      />
      
    </div>
  );
}

export default App;
