import React from 'react';
import './_two-column.scss';

function TwoColumn(props) {
  const {
    columns
  } = props;

  return (
    <div className='two-column'>
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