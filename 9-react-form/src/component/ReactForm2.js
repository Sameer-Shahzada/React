import { React, useState } from 'react';

// create a functional component
const ReactForm2 = () => {

    // define hooks for firstname
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
    });

    // create a function to update the firstname 
    const inputEvent = (event) => {
        // setFirstName(event.target.value);
        console.log(event.target.value);

        const value = event.target.value;
        const name = event.target.value;

        setFullName((preValue) => {
            if (name === "fName") {
                return {
                    fname: value,
                    lname: preValue.lname,
                };
            }else if (name === "lName") {
                return {
                    fname: preValue.fname,
                    lname: value,
                };
            } 

        })
    }

    // create another function to perform onClick event
    const onSubmit = (event) => {
        event.preventDefault();
        // setfullName(firstname + " " + lastname);
        // alert("form submitted");
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h1>This is form 2</h1>

                    <h1>Hello, {fullName.fname} {fullName.lname} </h1>

                    <input type="text"
                        placeholder='First name'
                        name='fName'
                        onChange={inputEvent} 
                        // value={fullName.fname}
                    />
                    <br />

                    <input type="text"
                        placeholder='Last name'
                        name='lName'
                        onChange={inputEvent} 
                        // value={fullName.lname}
                    />

                    <button type='submit'>Click Me</button>

                </div>
            </form>

            
        </>
    )
}
export default ReactForm2;