import React, { useState } from 'react';
// create a functional omponent
const HooksDate = () => {

  // use state
  const [date , setDate] = useState(Date());
  // define a function to update date on click
  const updateDate = () => {
    setDate(Date());
  }
  return (
    <>
      <h1>{date}</h1>
      <button onClick={updateDate}> Update Date </button>
    </>
  )
}
export default HooksDate;