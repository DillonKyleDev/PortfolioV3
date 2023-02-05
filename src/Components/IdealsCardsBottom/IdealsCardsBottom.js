import React from 'react';
import './_ideals-cards-bottom.scss';
import MultiColumn, { IconCard } from '../MultiColumn/MultiColumn';
import { ColorCard } from '../TwoColumn/TwoColumn';
import TwoColumn from '../TwoColumn/TwoColumn';

import { GiInterceptorShip } from 'react-icons/gi';
import { IoIosColorPalette } from 'react-icons/io';

export function IdealsCard(props) {
  const {
    icon,
    title,
    text
  } = props;

  return (
    <div className='ideal-cards__card'>
      <div className='ideal-cards__icon'>
        { icon }
      </div>

      <h1 className='ideal-cards__title'>{ title }</h1>
      <p className="ideal-cards__text">
        { text }
      </p>
    </div>
  )
}

function IdealsCardsBottom() {
  
  return (
    <div className='ideals-cards'>
      <TwoColumn columns={[         
        <ColorCard 
          color='secondary'
          style='fade'
        />
        ,
        <MultiColumn 
          columns={[
            <IconCard 
              icon={<GiInterceptorShip size={52} className='about-icon'/>}
              title='Dynamism'
              text="Who says performant can't also be beautiful? I can turn any concept, i.e. Figma, into a beautiful and fully realized UI."
            />,
            <IconCard 
              icon={<IoIosColorPalette  size={52} className='about-icon'/>}
              title='Design'
              text="Applying feedback to my work is an invaluable part of my process. You can't learn anything new or grow if there's no external information coming in."
            />
          ]}
          columnStyle='icon-card'
          columnCount={2}
          columnGap='xxs'
          columnPadding='xxs'
        />
      ]} 
      column_gap='xxl'
      />
    </div>
  )
}

export default IdealsCardsBottom