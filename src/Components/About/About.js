import React from 'react';
import TwoColumn from '../TwoColumn/TwoColumn';
import MultiColumn from '../MultiColumn/MultiColumn';
import { IconCard } from '../MultiColumn/MultiColumn';
import './_about.scss';


function About() {
  
  return (
    <div id="about" className='about'>
      <TwoColumn columns={[         
        <div className='about__text-column'>
          <div className='about__header-container'>
            <h1 className='about__header'>Who is he?</h1>
            <div className='about__underline'/>
          </div> 

          <div className='about__bio-text'>
            <p className='about__bio-text--top large'>
              A React and Hubspot developer with a wide range skills and experience.  Dillon has been a <u>one-stop shop</u> for individuals - working as designer, developer and implementor - as well as worked on smaller <u>teams</u> as a developer alongside other devs, designers and implementers.
            </p>
            <p className='about__bio-text--bottom large'>
              Dillon is currently enjoying mastering the <a class='hubspot' target='_blank' href='https://www.hubspot.com/'>Hubspot</a> ecosystem but is always sharpening his skills, ready for whatever might come his way.
            </p>
          </div>
        </div>
        ,
        <MultiColumn 
          columns={[
            <IconCard 
              title='Hubspot'
              text='A world-class Content Management System.'
            />,
            <IconCard 
              title='React'
              text='Efficiently rendering your content.'
            />,
            <IconCard 
              title='Front-end'
              text='Your first impression wizard.'
            />,
            <IconCard 
              title='Communicator'
              text="Let's talk! We'll figure it out together."
            />
          ]}
          columnStyle='icon-card'
          columnCount='two-column'
          columnGap='xxs'
          columnPadding='xxs'
        />
      ]}
      column_gap='xxl'
      vertical_align='stretch'
      show_first_bg_card_={false}
      first_bg_card_color
      show_second_bg_card_={false}
      second_bg_card_color      
      />
    </div>
  )
}

export default About