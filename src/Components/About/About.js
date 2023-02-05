import React from 'react';
import TwoColumn from '../TwoColumn/TwoColumn';
import './_about.scss';


function About() {
  
  return (
    <div id="about" className='about'>
      <TwoColumn columns={[         
        <div className='about__text-column'>
          <div className='about__header-container'>
            <h1 className='about__header'>ABOUT</h1>
            <div className='about__underline'/>
          </div> 

          <div className='about__bio-text'>
            <p>
              My primary goal as a Web Developer is to make tools that empower people to do what they love in new and exciting ways. 
              Software engineers have the ability to bring convenience and accessibility to everyone and I strongly believe it is our responsibilty to do so.
            </p>
            <p>
              But bringing tools to everyone is a big task, and I'm always looking for ways to improve experiences. Here are some of the things I keep in mind 
              when creating user interfaces:
            </p>
          </div>
        </div>
        ,
        <div></div>
      ]} />

      {/* <div className='divider-container'>
        <div className='divider-1' />
        <div className='divider-2' />
      </div> */}
    </div>
  )
}

export default About