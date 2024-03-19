import React from 'react'

export const SlotMachine = (props) => {
    // define variable here and assign the props expression 
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    // object destructuring
    let { x, y, z } = props;

    if(x === y && y === z) {
        return(
            <>
                <div className="slot_inner">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h2>This is matching</h2>
                    <hr />
                </div>
            </>
        )
    }
    else 
    {
        return(
            <>
                <div className="slot_inner">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h2>This is not matching</h2>
                    <hr />
                </div>
            </>
        )
    }
 
}
export default SlotMachine;
