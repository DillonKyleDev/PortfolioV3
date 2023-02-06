import React from 'react';
import './_multi-column.scss';


export function IconCard(props) {
  const {
    icon,
    title,
    text
  } = props;

  return (
    <div className='icon-card-spacing'>
      <div className='icon-card'>
        { icon && 
          <div className='icon-card__icon'>
            { icon }
          </div>
        }

        <h2 className='icon-card__title'>{ title }</h2>
        <p className="icon-card__text">
          { text }
        </p>
      </div>
    </div>
  )
}

function MultiColumn(props) {
  const {
    columns,
    columnStyle,
    columnCount,
    columnGap,
    columnPadding,
  } = props;

  return (
    <div className={`multi-column multi-column--${ columnStyle } multi-column--${columnCount} multi-column--spacing-${columnGap} multi-column--padding-${columnPadding}`}>      
      {columns}
    </div>
  )
}

export default MultiColumn