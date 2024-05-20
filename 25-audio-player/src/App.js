import { React } from 'react';

import audioFile from './audio/audio1.wav';

//-> There are various way to play an audio file 

const App = () => {
// 1- import audio file & create Audio object with new keyword then pass audioFile as an args in object
  const audio = new Audio(audioFile);

// 2- pass url in Audio object 
  // const audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

// 3- Without importing or pass url in Audio object 
  // const track = require("url:./audio/audio1.wav");  // something went wrong with this
  // const audio = new Audio(track);

  const playAudio = () => {
    audio.play();
  };

  const pauseAudio = () => {
    audio.pause();
  };

  return (
    <div>
      <h1>Welcome to Audio Player</h1>
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
    </div>
  );
}


export default App