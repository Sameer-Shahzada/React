 import React from 'react'
import { FirstName , LastName} from '../App';

// -> // here data passed by Context API in Component B
/* ** Context API ** 
    -> React Context API allows you to easily access data at different levels
    of the component tree without passing prop to every level.
    Note -> It is the good alternative of prop drilling concept.
*/

const CompC = () => {
    return (
        <>
            <FirstName.Consumer>
                {/* A callback function is needed in consumer */}
                { (fname) => {
                    return (
                        <LastName.Consumer>
                            {/* A callback function is needed in consumer */}
                            {(lname) => {
                                return (
                                    <h1> My name is {fname} {lname} </h1>
                                );
                            }}
                        </LastName.Consumer>
                    );
                }}
            </FirstName.Consumer>
        </>
    ); 
}

export default CompC