import React from 'react'

const name = "Md. Sameer Shahzada";
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

const task2 = () => {
    return (
        <>
            
                <h1 style={{ textAlign: 'center' }}>Task - 2</h1>

                <h2 style={{ textAlign: 'center' }}>Hello, This is {name}</h2>
                <p style={{ textAlign: 'center' }}>
                    Current date is = {currentDate} &nbsp; Current time is = {currentTime}
                </p>
            

            <hr />
        </>
    )
}
export default task2
