import React from 'react';
import './_content.scss';
import About from '../About/About';
import Module from '../Module/Module';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import HeroContainer from '../HeroContainer/HeroContainer';
import TwoColumn from '../TwoColumn/TwoColumn';

import { BsFillHexagonFill } from 'react-icons/bs';
import { GiInterceptorShip } from 'react-icons/gi';
import { IoIosColorPalette } from 'react-icons/io';
import { VscColorMode } from 'react-icons/vsc';
import { RiMessage2Line } from 'react-icons/ri';



const Content = () => {
  return (
    <div className='content'>      
      <Module content={<HeroContainer />} 
        style={{
          constrain: 'xxl',
          top_padding: 'xxl',
          bottom_padding: 'xl',
          background_color: 'transparent',
          show_background_svg_: true,
          svg_color: 'secondary-light',
          background_svg_side: 'top-right'
        }} />
      <Module content={<About />} 
          style={{
          constrain: 'xxl',
          top_padding: 'xl',
          bottom_padding: 'none',
          background_color: 'transparent',
          show_background_svg_: false,       
          svg_color: 'primary',
          background_svg_side: 'top-left'
        }} />

        <Module content={
          <div className='about__hex-grid-column'>
            <div className='about__hex-grid'>

              <div className='about__hex-column'>
                <div className='about__hex-icon'>
                  <BsFillHexagonFill size={100} className='hexagon'/>
                  <VscColorMode  size={100} className='about-icon'/>
                </div>

                <h1 className='about__hex-title'>Accessibility</h1>
                <p className="card-text">
                  I use tools like <a className="about-link" href="https://chrome.google.com/webstore/detail/access-assistant/ojiighldhdmahfdnhfdebnpmlbiemdfm" target="_blank" rel="noreferrer" alt="Chrome Accessabilty Assistant">
                    Chrome Access Assistant
                  </a> and <a className="about-link" href="https://color.a11y.com/?wc3" target="_blank" rel="noreferrer" alt="Color a11y">
                    color.a11y.com
                  </a> to ensure my projects are easy to use for everyone.
                </p>
              </div>

              <div className='about__hex-column'>
                <div className='about__hex-icon'>
                  <BsFillHexagonFill size={100} className='hexagon'/>
                  <RiMessage2Line  size={100} className='about-icon'/>
                </div>

                <h1 className='about__hex-title'>Feedback</h1>
                <p className="card-text">
                  Applying feedback to my work is an invaluable part of my process. You can't learn anything new or grow if there's no external information coming in.
                </p>
              </div>
            </div>

            <div className='about__hex-column'>
              <div className='about__hex-icon'>
                <BsFillHexagonFill size={100} className='hexagon'/>
                <IoIosColorPalette  size={100} className='about-icon'/>
              </div>

              <h1 className='about__hex-title'>Design</h1>
              <p className="card-text">Who says performant can't also be beautiful? I can turn any concept, i.e. <a className="about-link" href="https://www.figma.com/w" target="_blank" rel="noreferrer" alt="Figma">Figma</a>, into a beautiful and fully realized UI.</p>
            </div>

            <div className='about__hex-column'>
              <div className='about__hex-icon'>
                <BsFillHexagonFill size={100} className='hexagon'/>
                <GiInterceptorShip size={100} className='about-icon'/>
              </div>

              <h1 className='about__hex-title'>Dynamism</h1>
              <p className='dynamism-p card-text'>Websites don't have to be static, I love making pages come to life with <button className='interaction'>interaction</button> and <button className="animation">animation!</button></p>
            </div>
          </div>   
        }
          style={{
          constrain: 'xxl',
          top_padding: 'medium',
          bottom_padding: 'medium',
          background_color: 'transparent',
          show_background_svg_: false,       
          svg_color: 'primary',
          background_svg_side: 'top-left'
        }} />
      <Module content={<Body />} />
      <Module content={<Footer />} />
    </div>
  )
}

export default Content