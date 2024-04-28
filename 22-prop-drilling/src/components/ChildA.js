import React from 'react'
import ChildB from './ChildB'

const ChildA = ({ name , value }) => {  {/* received props from App.js */}
    return (
        <>

            <div className='child'>
                <p>Hello,  I'm Child A component</p>
                <p>
                    I have userId {value}.
                </p>
            </div>
            <ChildB name={name} /> {/* sending props to Child B */}
        </>
    )
}

export default ChildA