import { React, useState } from 'react';


const Challenge1 = () => {

  const [backgroundColor ,  setBackgroundColor] = useState('red');

  const btnStyle = {
    backgroundColor:backgroundColor,
    color:'white',
  }
 
  const bgChange = () => {
    let newColor = 'purple';
    setBackgroundColor(newColor);
  }

  const bgChange2 = () => {
    let newColor = 'red';
    setBackgroundColor(newColor);
  }

  return (
    <>
      <div style={{ padding: '0 40px' }}>
        <h1 style={{ textAlign: 'left' }}>Task -1</h1>
        <h2>Movies</h2>
        <p>Movie list</p>
        <ul>
          <li>Movie-1</li>
          <li>Movie-2</li>
          <li>Movie-4</li>
          <li>Movie-4</li>
          <li>Movie-5</li>
        </ul>
      </div>

    <div>
      <button style={btnStyle} onClick={bgChange} onDoubleClick={bgChange2}>Click Me</button>
    </div>

      <hr />
    </>
  )
}
export default Challenge1
