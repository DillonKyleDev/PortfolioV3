import React from 'react';
import './_two-column.scss';


export function ColorCard(props) {
  const {
    color,
    style,
  } = props;

  return (
    <div className={`color-card color-card--${ style }`}>
      <div className='color-card-anchor'>
        <div className={`color-card__background-color color-card__background-color--${ color }`}></div>
        <div className='color-card__fade'></div>      
      </div>
    </div>
  )
}

function TwoColumn(props) {
  const {
    columns,
    column_gap,
    show_first_bg_card_=false,
    first_bg_card_color,
    show_second_bg_card_=false,
    second_bg_card_color,
  } = props;

  return (
    <div className={`two-column two-column--spacing-${ column_gap }`}>
      <div className='two-column__column'>
        { show_first_bg_card_ && <ColorCard color={ first_bg_card_color } style='fade' /> }
        { columns[0] }
      </div>
      <div className='two-column__column'>
        { show_second_bg_card_ && <ColorCard color={ second_bg_card_color } style='fade' /> }
        { columns[1] }
      </div>
    </div>
  )
}

export default TwoColumn