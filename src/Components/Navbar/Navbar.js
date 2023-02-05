import React, { useState } from 'react';
import './_navbar.scss';
import MenuButton from '../MenuButton/MenuButton';
import { IoRocketSharp } from 'react-icons/io5';


function Navbar() {
  const [ selected, setSelected ] = useState('top');

  return (
      <div className='navbar'>
        <a className='navbar__logo' href="#hero" onClick={() => setSelected('top')}>
          <IoRocketSharp size={45}/>
        </a>
        <div className='navbar__menu-items'>
          <MenuButton buttonText='About' 
            href='#about' 
            style={{
              buttonColor: 'light'
            }}
            onClick={() => setSelected('about')}></MenuButton> 

          <MenuButton buttonText='Projects' 
            href='#projects' 
            style={{
              buttonColor: 'light'
            }}
            onClick={() => setSelected('project')}></MenuButton> 
        </div>
      </div>
  )
}

export default Navbar