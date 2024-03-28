import React, { useContext } from 'react'
import CompC from './CompC'
import { FirstName , LastName} from '../App';

// here data passed by useContext hook in Component B


/* ** useContext hook   ** 
The useContext hooks is a little different though. It just makes thing nicer.
    -> In case you haven't heard of React's ContextAPI. It is a way to pass the data 
    deeply throughout your app without having to manually pass props down through multiple levels.
    It can be a good alternative to tools like Redux.
*/
const CompB = () => {
  // useContext hook 
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
  return (
    <>
        <div>CompB</div>
        <CompC />
        <h3>Now In component B pass data by using useContext instead of createContext & It is the good alternative of redux </h3>
        <h5>My name is {fname} {lname}</h5>
    </>
  )
}

export default CompB