import React from 'react';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
  return (
    <nav className='MenuComponent'>
        <h1><Link to='/'>Home</Link></h1>
        <h1><Link to='/about'>About</Link></h1>
        <h1><Link to='/projects'>Projects</Link></h1>
        <h1><Link to='/contact'>Contact</Link></h1>
    </nav>
  )
}

export default MenuComponent
