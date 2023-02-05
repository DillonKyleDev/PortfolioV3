import React from 'react';
import './_menu-button.scss';
import { FiArrowRight } from 'react-icons/fi'

function MenuButton(props) {
    const { 
      buttonText,
      href,
      style={
        buttonColor: 'light',
        buttonSize: 'medium',
      },
      icon,
      onClick,
    } = props;

  return (
    <a href={`${ href }`} className={`menu-button menu-button--${ style.buttonColor } menu-button--${ style.buttonSize } menu-button--${ icon }`} onClick={ onClick }>
      { buttonText }
      { icon == 'arrow' && <FiArrowRight /> }
    </a>
  )
}

export default MenuButton