import React from 'react';
import './footer.css';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {

  return (
    <div>
      <div className='footer'>
        <div className='footer-content'>
          <p>
            <a href="https://github.com/DillonKyleDev" className="footer-link" target="_blank" rel="noreferrer" alt="GitHub Profile">
              <BsGithub  
              size={30} 
              className="footer-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/dillon-kyle-387700213/" className="footer-link" target="_blank" rel="noreferrer" alt="LinkedIn Profile">
              <AiFillLinkedin 
              size={30}
              className="footer-icon"/>
            </a>
          </p>
          <p>Dillon H. Kyle</p>
          <p className='year'>2022</p>
          <p className='small-text'>This portfolio was made using React.</p>
          <div className='footer-bar'></div>
        </div>
      </div>
    </div>
  )
}

export default Footer