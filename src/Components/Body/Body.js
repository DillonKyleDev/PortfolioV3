import React from 'react';
import { BookKeeperAppProject, NetflixProject, TicketHoundProject, PaidArtPortfolioProject, PortfolioV1Project } from '../ProjectImports/ProjectImports';
import { wave1, wave2, wave3, wave4 } from '../WaveImports/WaveImports';
import './body.css';

function Body() {
  return (
    <div>
      <div id="projects" className='body-container'>
        <div className='projects'>
          <h1 className='projects-text'>SELECTED WORKS</h1>
          <div className='projects-underline' />
        </div>
        <div className='projects-section'>

          <div className='project first-project'>
            {BookKeeperAppProject}
          </div>
              {wave1}
          <div className='project second-project'>
              {NetflixProject}
          </div>

          <div className='project third-project'>
              {wave2}
              {TicketHoundProject}
          </div>

          <div className='project fourth-project'>
              {wave3}
              {PaidArtPortfolioProject}
          </div>

          <div className='project fifth-project'>
              {wave4}
              {PortfolioV1Project}
          </div>

          <div className='arrow-container-container'>
            <div className='arrow-div-container'>
              <div className='arrow-div top-arrow-div'>
                <div className='top-arrow slant left-slant'></div>
                <div className='top-arrow slant right-slant'></div>
              </div>
            </div>
            <div className='arrow-div-container'>
              <div className='arrow-div bottom-arrow-div'>
                <div className='bottom-arrow slant left-slant'></div>
                <div className='bottom-arrow slant right-slant'></div>
              </div>
            </div>
          </div>

        </div>

      </div>  
    </div>
  );
}

export default Body