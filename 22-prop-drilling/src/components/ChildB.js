import React from 'react'
import ChildC from './ChildC'

const ChildB = ({ name }) => {   {/* received props from Child A */}
    return (
        <>
            <div className='child'>
                <p>Hello,  I'm Child B component</p>
            </div>
            <ChildC name = {name} /> {/* sending props to Child C */}

        </>


    )
}

export default ChildB