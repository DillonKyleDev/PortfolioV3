import React from 'react';
import './myWorkButton.css';
import { FiArrowRight } from 'react-icons/fi'

function MyWorkButton() {
  return (
    <div>
      <a href="#about">
        <button id='my-work-button'>
          See More <FiArrowRight className='arrow-icon' size={27}/> 
        </button>
      </a>
    </div>
  )
}

export default MyWorkButton