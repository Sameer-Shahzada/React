import React from 'react';
import SlotMachine from './components/SlotMachine';
import './index.css';

function App() {
  return (
    <>
      <h1 className='heading_style'>
        🎰 Welcome to <span style={{fontWeight:'bold'}}>Slot machine game</span> 🎰 
      </h1>
      <div className="slotmachine">
        <SlotMachine x = "😊" y ="😊" z = "😊" />
        <hr />
        <SlotMachine x = "😊" y ="😂" z = "😊" />
        <hr />
        <SlotMachine x = "🍎" y ="🍌" z = "🍎" />
        <hr />
        <SlotMachine x = "🧑‍🤝‍🧑" y ="🧑‍🤝‍🧑" z = "🧑‍🤝‍🧑" />
        <hr />
      </div>

    </>
  );
}

export default App;
