import React, { useState } from 'react';
import './IncrdecrState.css';

const IncrdecrState = () => {
  // define hooks 
  const [num,setNum] = useState(0);

  // to increment the state variable number 
  const IncNum = () => {
    setNum(num + 1);
  }

  // to decrement the state variable number
  const DecNum = () => {
    num > 0 ? setNum(num -1):alert('zero limit reached');
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>{num}</h1>
        <div className="btn_div">
          <button onClick={IncNum}>
            Increment
          </button>
          <button onClick={DecNum}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}

export default IncrdecrState