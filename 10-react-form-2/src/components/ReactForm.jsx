import { React, useState } from 'react';

// create a functional component
const ReactForm = () => {

    // define hooks for firstname
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });

    // create a function to update the firstname 
    const inputEvent = (event) => {
        // setFirstName(event.target.value);
        console.log(event.target.value);

        // const value = event.target.value;
        // const name = event.target.name;

        //-> destructuring
        const {value, name} = event.target;

        setFullName((preValue) => {
            // by using spread operator
            return {
                ...preValue,
                [name]:value,
            };
            // if (name === "fName") {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     };
            // } else if (name === "lName") {
            //     return {
                    
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     };
            // }else if (name === "email") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phone: preValue.phone,
            //     };
            // }else if (name === "phone") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: value,
            //     };
            // }

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

                    <h1>Hello, {fullName.fname} {fullName.lname} {fullName.email} {fullName.phone} </h1>

                    <input type="text"
                        placeholder='First name'
                        name='fname'
                        onChange={inputEvent}
                    // value={fullName.fname}
                    />
                    <br />

                    <input type="text"
                        placeholder='Last name'
                        name='lname'
                        onChange={inputEvent}
                    // value={fullName.lname}
                    />

                    <br />

                    <input type="email"
                        placeholder='Email'
                        name='email'
                        onChange={inputEvent}
                    // value={fullName.email}
                    />
                    <br />

                    <input type="number"
                        placeholder='Number'
                        name='phone'
                        onChange={inputEvent}
                    // value={fullName.phone}
                    />


                    <button type='submit'>Click Me</button>

                </div>
            </form>


        </>
    )
}
export default ReactForm;