import React from 'react';
import Introduction from '../Introduction/Introduction';
import MyWorkButton from '../MyWorkButton/MyWorkButton';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import Wave from '../Wave/Wave';
import './heroContainer.css';

function HeroContainer() {
  const D = "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";

  return (
    <div>
      <div id="hero" className='hero-container'>
          <Wave
          d={D} 
          width={'calc(106% + 1.3px)'} 
          newWidth={'calc(170% + 1.3px)'} 
          height={250} 
          newHeight={380} 
          fill={'#4A467C'} 
          top={'0'} 
          left={'0'}
          duration={20} 
          position={'absolute'}/>
        <div className='hero-margins'>
          <ProfilePicture />
          <Introduction />
          <MyWorkButton />
        </div>
      </div>
    </div>
  )
}

export default HeroContainer