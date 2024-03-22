import { React, useState } from 'react';

// create a functional component
const ReactForm = () => {

  // define hooks for firstname
  const [firstname, setFirstName] = useState("");

  // create a function to update the firstname 
  const inputEvent = (event) => {
    setFirstName(event.target.value);
  }

  // define hooks for lastname
  const [lastname, setLastName] = useState("");

  // create a function to update the lastname
  const inputEvent2 = (event) => {
    setLastName(event.target.value);
  }

  const [fullName, setfullName] = useState("");

  // create another function to perform onClick event
  const onSubmit = (event) => {
    event.preventDefault();
    setfullName(firstname + " " + lastname);
  }

  return (
    <>
    
    <form onSubmit={onSubmit}>
      <div>
      <h1>This is 1st form</h1>
        <h1>Hello, {fullName} </h1>

        <input type="text" 
        placeholder='First name' 
        onChange={inputEvent} value={firstname}
        />
        <br />

        <input type="text" 
        placeholder='Last name' 
        onChange={inputEvent2} value={lastname}
        />

        <button type='submit'>Click Me</button>
        
      </div>
      </form>

    </>
  )
}
export default ReactForm;