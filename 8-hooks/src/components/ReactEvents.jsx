import {React, useState} from 'react';

// create a fucntional component
const ReactEvents = () => {
    //define Hooks here
    const purple = "#8e44ad";
    // use State
    const [bg, setbg] = useState(purple);
    const [btnName, setBtnName] = useState("Update");

    // create a function to update the color 
    const onChange = () => {
        let navy = "#34495e";
        // console.log("btn clicked");
        setbg(navy);
        setBtnName("Update");
    }

    const bgBack = () => {
        setbg(purple);
        setBtnName("Double update");
    }
    return (
        <>
            <div style={{background:bg}}>
                <button onClick={onChange} onDoubleClick={bgBack}> {btnName} </button>
            </div>
        </>
    )

}
export default ReactEvents