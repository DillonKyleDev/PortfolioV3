import React from 'react';
import './_content.scss';
import About from '../About/About';
import Module from '../Module/Module';
import Footer from '../Footer/Footer';
import HeroContainer from '../HeroContainer/HeroContainer';
import '../About/_about.scss';

import IdealsCardsBottom from '../IdealsCardsBottom/IdealsCardsBottom';
import IdealsCardsTop from '../IdealsCardsTop/IdealsCardsTop';
import MultiColumn from '../MultiColumn/MultiColumn';
import Project from '../Project/Project';

import { Beck } from '../ProjectImports/ProjectImports'


const Content = () => {
  return (
    <div className='content'>      
      <Module 
        content={<HeroContainer />} 
        style={{
          show_section_header_: false,
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
          show_section_header_: false,
          text_color: 'on-dark',
          constrain: 'xxl',
          top_padding: 'xxl',
          bottom_padding: 'xxxl',
          background_color: 'secondary',
          show_background_svg_: true,       
          svg_color: 'secondary-light',
          background_svg_side: 'bottom-right',
          hide_overflow_: true,
        }} 
      />

      <Module 
        content={<IdealsCardsTop />}
        sectionHeader={
          <div>
            <h2 className='display--2'>
              Tight Deadline?
            </h2>
            <p className='large'>
              I understand. Time is your most valuable resource. Save it for the things you really care about.
            </p>
          </div>
        }
        style={{
          header_alignment: 'left',
          header_width: 'half',
          show_section_header_: true,
          text_color: 'on-light',
          constrain: 'xxl',
          top_padding: 'xxl',
          bottom_padding: 'xxl',
          background_color: 'transparent',
          show_background_svg_: false,       
          svg_color: 'primary',
          background_svg_side: 'top-left',
        }} 
      />

      <Module 
        content={<IdealsCardsBottom />}
        sectionHeader={
          <div>
            <h2 className='ideal-cards-bottom__section-header display--2'>
              <span>You need a website.</span>
            </h2>
            <p className='large'>
              Let's face it. Why else would you be here? But you don't want just any website. You want <em>your</em> website.
            </p>
          </div>
        }
        style={{
          header_alignment: 'right',
          header_width: 'half',
          show_section_header_: true,
          text_color: 'on-light',          
          constrain: 'xxl',
          top_padding: 'xxl',
          bottom_padding: 'xxxl',
          background_color: 'transparent',
          show_background_svg_: false,       
          svg_color: 'secondary-light',
          background_svg_side: 'bottom-left',        
        }} 
      />

      <Module 
        sectionHeader={
          <div>
            <h2 className='display--2'>
              Convinced yet?
            </h2>
            <p className='large'>
              Well don't take my word for it. Here are a few of my favorites. Let them do the talking.
            </p>
          </div>
        }
        content={<MultiColumn 
          columns={[
            <Project 
              image={ Beck.props.image }
              title={ Beck.props.title }
              description={ Beck.props.description }
              liveSiteLink={ Beck.props.liveSiteLink }
              button_color='primary'
              button_size='medium'
              padding='small'
              overlay_strength='dark'
              info_position='between'
              card_radius='large'
            />,
            <Project 
              image={ Beck.props.image }
              title={ Beck.props.title }
              description={ Beck.props.description }
              liveSiteLink={ Beck.props.liveSiteLink }
              button_color='primary'
              button_size='medium'
              padding='small'
              overlay_strength='dark'
              info_position='between'   
              card_radius='large'           
            />,
            <Project 
              image={ Beck.props.image }
              title={ Beck.props.title }
              description={ Beck.props.description }
              liveSiteLink={ Beck.props.liveSiteLink }
              button_color='white'
              button_size='medium'
              padding='small'
              overlay_strength='dark'  
              info_position='between'  
              card_radius='large'          
            />,
            <Project 
              image={ Beck.props.image }
              title={ Beck.props.title }
              description={ Beck.props.description }
              liveSiteLink={ Beck.props.liveSiteLink }
              button_color='white'
              button_size='medium'
              padding='small'
              overlay_strength='dark' 
              info_position='between'  
              card_radius='large'           
            />
          ]}
          columnStyle='project-card'
          columnCount='four-column'
          columnGap='xxs'
          columnPadding='none'
        />}
        style={{
          header_alignment: 'left',
          header_width: 'one-third',
          show_section_header_: true,
          text_color: 'on-dark',
          constrain: 'xxl',
          top_padding: 'xxl',
          bottom_padding: 'xxl',
          background_color: 'primary',
          show_background_svg_: true,       
          svg_color: 'secondary',
          background_svg_side: 'top-left',
          hide_overflow_: true,     
        }} 
      />

      <Module 
        content={<IdealsCardsBottom />}
        sectionHeader={
          <div>
            <h2 className='ideal-cards-bottom__section-header display--2'>
              <span>You're not getting rid</span><span> of me that easily.</span>
            </h2>
            <p className='large'>
              After a launch, you may have questions. I have a dedicated post-launch support window to make sure things go smoothly and you get the help and answers you need.
            </p>
          </div>
        }
        style={{
          header_alignment: 'right',
          header_width: 'half',
          show_section_header_: true,
          text_color: 'on-light',          
          constrain: 'xxl',
          top_padding: 'xxl',
          bottom_padding: 'xxxl',
          background_color: 'transparent',
          show_background_svg_: false,       
          svg_color: 'secondary-light',
          background_svg_side: 'bottom-left',        
        }} 
      />

  
      <Module content={<Footer />} 
        style={{
          header_alignment: 'right',
          header_width: 'half',
          show_section_header_: false,
          text_color: 'on-dark',          
          constrain: 'xxl',
          top_padding: 'medium',
          bottom_padding: 'medium',
          background_color: 'secondary',
          show_background_svg_: true,       
          svg_color: 'secondary-light',
          background_svg_side: 'bottom-right',   
          hide_overflow_: true,     
        }} 
      />
    </div>
  )
}

export default Content