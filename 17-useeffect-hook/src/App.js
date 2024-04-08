import React from 'react'
import { useEffect , useState } from 'react';
const App = () => {
  const [num , setNum] = useState(0);
  const [num1 , setNum1] = useState(0);
  useEffect(() => {
    // alert('button clicked');
    document.title = `You click me ${num1} times.`;
  })  // if you want to run useEffect at once after component render then use [] empty array
  return (
    <>
      <h1>useEffect</h1>

     <button onClick={() => setNum(num + 1)}>Click Me</button>    {/* using inline arrow function to prevent write a function separately */}
      <h3>{num}</h3>

      <button onClick={() => setNum1(num1 + 1)}>Click Me</button>
      <h3>{num1}</h3>

    </>



  )
}

export default App