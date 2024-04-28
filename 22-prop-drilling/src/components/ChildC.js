import React from 'react'

const ChildC = ({ name }) => {  {/* received props form Child B */ }
    
    return (
        <>
            <div className='child'>
                <p>Hello,  I'm Child C component</p>
                <p>
                    {name}  is here in C component.
                </p>
            </div>


        </>
    )
}

export default ChildC