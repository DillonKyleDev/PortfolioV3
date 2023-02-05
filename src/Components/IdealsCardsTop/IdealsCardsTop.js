import React from 'react';
import './_ideals-cards-top.scss';
import MultiColumn, { IconCard } from '../MultiColumn/MultiColumn';
import { ColorCard } from '../TwoColumn/TwoColumn';
import TwoColumn from '../TwoColumn/TwoColumn';

import { VscColorMode } from 'react-icons/vsc';
import { RiMessage2Line } from 'react-icons/ri';


function IdealsCardsTop() {
  
  return (
    <div className='ideals-cards'>
      <TwoColumn columns={[         
        <MultiColumn 
          columns={[
            <IconCard 
              icon={<VscColorMode  size={52} fill='#19192a'/>}
              title='Accessibility'
              text='I use tools like Chrome Access Assistant and color.a11y.com to ensure my projects are easy to use for everyone.'
            />,
            <IconCard 
              icon={<RiMessage2Line  size={52} fill='#19192a'/>}
              title='Feedback'
              text="Applying feedback to my work is an invaluable part of my process. You can't learn anything new or grow if there's no external information coming in."
            />
          ]}
          columnStyle='icon-card'
          columnCount={2}
          columnGap='xxs'
          columnPadding='xxs'
        />
        ,
        <ColorCard 
          color='primary'
          style='fade'
        />
      ]} 
      column_gap='xxl'
      />
    </div>
  )
}

export default IdealsCardsTop


                  // <p>
                  //   I use tools like <a className="about-link" href="https://chrome.google.com/webstore/detail/access-assistant/ojiighldhdmahfdnhfdebnpmlbiemdfm" target="_blank" rel="noreferrer" alt="Chrome Accessabilty Assistant">
                  //     Chrome Access Assistant
                  //   </a> and <a className="about-link" href="https://color.a11y.com/?wc3" target="_blank" rel="noreferrer" alt="Color a11y">
                  //     color.a11y.com
                  //   </a> to ensure my projects are easy to use for everyone.
                  // </p>