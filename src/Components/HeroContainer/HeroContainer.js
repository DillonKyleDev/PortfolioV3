import React from 'react';
import profilePicture from '../../assets/main-photo.jpg';
import './_heroContainer.scss';
import MenuButton from  '../MenuButton/MenuButton';

function HeroContainer() {
  return (
    <div id="hero" className='hero-container'>
      <div className='hero-container__photo-container'>       
        <img className='hero-container__photo' src={ profilePicture }/>       
      </div>

      <div className='hero-container__introduction'>      
        <h1>Meet <span class="hero-container__name">Dillon Kyle</span>,</h1>
        <h1>a front-end developer.</h1>    

        <MenuButton buttonText='See more' 
          href='#about'
          style={{
            buttonColor: 'primary'
          }}
          icon='arrow' />        
      </div>
    </div>
  )
}

export default HeroContainer