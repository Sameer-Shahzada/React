import React, { useState } from 'react';

const DigitalClock = () => {
    // assign current-time into time 
    let time = new Date().toLocaleTimeString();
    //use State
    const [ctime, setTime] = useState(time);

    // create a function to update the current time
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(updateTime,1000);

    return (
        <>
            <h1>{ctime}</h1>
            
        </>

    )
}
export default DigitalClock;
