import React from 'react';
import logo from './images/note.png';

const Header = () => {
  return (
    <>
    <div className='header'> 
        <img src={logo} alt="logo"/>
        <h1>Google Keep</h1> 
    </div>
    </>
    
  )
}

export default Header