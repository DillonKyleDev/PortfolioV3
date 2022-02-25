import React from 'react';
import About from '../About/About';
import Background from '../Background/Background';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import HeroContainer from '../HeroContainer/HeroContainer';
import './content.css';

function Content() {
  return (
    <div className='content'>
      <Background />
      <HeroContainer />
      <About />
      <Body />
      <Footer />
    </div>
  )
}

export default Content