import React, { useState, useEffect } from 'react';
import './navbar.css';
import { IoRocketSharp } from 'react-icons/io5';
import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { TiWaves } from 'react-icons/ti';

function Navbar() {
  const [ selected, setSelected ] = useState('top');

  useEffect(() => {

  }, [ selected ]);

  return (
      <div className='navbar'>
        <div className='icon-container'>
          <a href="#hero">
            <button
              className={`rocket-sharp icon ${selected === 'top' ? 'selected' : 'deselected'}`}
              onClick={() => setSelected('top')}
            >
              <IoRocketSharp className='image' size={40}/>
            </button>
          </a>
        </div>
        <div className='nav-icons'>
          <div className='icon-container'>
            <a href="#about">
              <button 
                className={`about-me icon ${selected === 'about' ? 'selected' : 'deselected'}`}
                onClick={() => setSelected('about')}
              >
                <ImProfile className='image' size={30}/>
              </button>
            </a>
          </div>
          <div className='icon-container'>
            <a href="#projects">
              <button
                className={`icon ${selected === 'projects' ? 'selected' : 'deselected'}`}
                onClick={() => setSelected('projects')}
              >
                { selected === 'projects' ?
                  <AiFillFolderOpen className='image' size={35} />
                :
                <AiFillFolder className='image'  size={35} />
                }
              </button>
            </a>
          </div>
          {/* <div className='icon-container wave-toggle'>
            <button className='icon wave-toggle-button'>
              <TiWaves size={35} />
            </button>
          </div> */}
        </div>
      </div>
  )
}

export default Navbar