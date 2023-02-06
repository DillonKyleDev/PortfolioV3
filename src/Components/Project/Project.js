import React from 'react';
import './_project.scss';

import MenuButton from '../MenuButton/MenuButton';

function Project(props) {
  const { image, title, description, liveSiteLink, padding, button_color, button_size } = props;
  
  return (
    <div className={`project__padding project__padding--${ padding }`}>
      <a className='project__container'  href={ liveSiteLink }>
        <div className='project__photo'>
          <img src={ image } />
          <div className='project__overlay'></div>
          
          <div className='project__info'>
            <div className='project__info--bottom'>
              <div className='project__text-container'>        
                <h2>
                  { title }
                </h2>
                <p>
                  { description }
                </p>
              </div>
              
              <MenuButton 
                buttonText='Visit site'
                href=''
                style={{
                  buttonColor: button_color,
                  buttonSize: button_size,
                }}                       
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Project