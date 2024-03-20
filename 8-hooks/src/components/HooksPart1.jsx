import {React,useState} from 'react';

const HooksPart1 = () => {
// use state
 const [count, setCount] = useState(0);
 // define a function to update the count variable
 const incNum = () => {
  setCount(count + 1);
 }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={incNum}>Click Me</button>
    </>
  )
}
export default HooksPart1;