import React from 'react';
import './_two-column.scss';


export function ColorCard(props) {
  const {
    color,
    style,
  } = props;

  return (
    <div className={`color-card color-card--${ style }`}>
      <div className={`color-card__background-color--${ color }`}></div>
      <div className='color-card__fade'></div>      
    </div>
  )
}

function TwoColumn(props) {
  const {
    columns,
    column_gap
  } = props;

  return (
    <div className={`two-column two-column--spacing-${ column_gap }`}>
      <div className='two-column__column'>
        { columns[0] }
      </div>
      <div className='two-column__column'>
        { columns[1] }
      </div>
    </div>
  )
}

export default TwoColumn