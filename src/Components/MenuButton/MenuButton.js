import React from 'react';
import './_menu-button.scss';
import { FiArrowRight } from 'react-icons/fi'

function MenuButton(props) {
    const { 
      buttonText,
      // href,
      style={
        buttonColor: 'light',
        buttonSize: 'medium',
      },
      icon
    } = props;

  return (
    <button className={`menu-button menu-button--${ style.buttonColor } menu-button--${ style.buttonSize || 'medium' }`}>
      { buttonText }
      { icon === 'arrow' && <FiArrowRight /> }
    </button>
  )
}

export default MenuButton