import React from 'react'

let currentTime = new Date(2023, 1, 30, 10) ;
currentTime = currentTime.getHours();
let greeting = "";          // empty variable

const cssStyle = {};
const task3 = () => {

    if (currentTime >= 1 && currentTime < 12) {
        greeting = 'Good Morning';
        cssStyle.color = "green";
    }
    else if (currentTime >= 12 && currentTime < 19) {
        greeting = 'Good Afternoon';
        cssStyle.color = "orange";
    }
    else {
        greeting = 'Good Night';
        cssStyle.color = "black";
    }

    return (
        <>
            <div style={{ padding: '0px 50px' }}>
                <h1 style={{ textAlign: 'right' }}>Task - 3</h1>
                <h2 style={{ textAlign: 'right' }}>Hello, <span style={cssStyle}>{greeting}</span></h2>
            </div>

            <hr />
        </>
    )
}
export default task3
