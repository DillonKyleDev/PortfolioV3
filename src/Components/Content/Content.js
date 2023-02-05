import React from 'react';
import './_content.scss';
import About from '../About/About';
import Module from '../Module/Module';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import HeroContainer from '../HeroContainer/HeroContainer';
import '../About/_about.scss';

import IdealsCardsBottom from '../IdealsCardsBottom/IdealsCardsBottom';
import IdealsCardsTop from '../IdealsCardsTop/IdealsCardsTop';


const Content = () => {
  return (
    <div className='content'>      
      <Module 
        content={<HeroContainer />} 
        style={{
          text_color: 'on-light',
          constrain: 'xxl',
          top_padding: 'xl',
          bottom_padding: 'xxl',
          background_color: 'transparent',
          show_background_svg_: true,
          svg_color: 'secondary-light',
          background_svg_side: 'top-right'
        }} 
      />

      <Module 
        content={<About />} 
        style={{
          text_color: 'on-dark',
          constrain: 'xxl',
          top_padding: 'medium',
          bottom_padding: 'xxl',
          background_color: 'secondary-light',
          show_background_svg_: true,       
          svg_color: 'secondary',
          background_svg_side: 'bottom-right',
          hide_overflow_: true,
        }} 
      />

      <Module 
        content={<IdealsCardsTop />}
        sectionHeader={
          <div>
            <h2 className='display--2'>
              Section Header
            </h2>
            <p className='large'>
              Brief overview of what this project does great.
            </p>
          </div>
        }
        style={{
          text_color: 'on-light',
          constrain: 'xxl',
          top_padding: 'xxl',
          bottom_padding: 'small',
          background_color: 'transparent',
          show_background_svg_: false,       
          svg_color: 'primary',
          background_svg_side: 'top-left'
        }} 
      />

      <Module 
        content={<IdealsCardsBottom />}
        sectionHeader={
          <div>
            <h2 className='display--2'>
              Section Header
            </h2>
            <p className='large'>
              Brief overview of what this project does great.
            </p>
          </div>
        }
        style={{
          header_alignment: 'right',
          text_color: 'on-light',          
          constrain: 'xxl',
          top_padding: 'medium',
          bottom_padding: 'xxl',
          background_color: 'transparent',
          show_background_svg_: false,       
          svg_color: 'secondary-light',
          background_svg_side: 'bottom-left',        
        }} 
      />
      
      <Module content={<Body />} />
      <Module content={<Footer />} />
    </div>
  )
}

export default Content