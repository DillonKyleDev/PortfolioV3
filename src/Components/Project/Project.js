import React from 'react';
import './_project.scss';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';
import { GiWireframeGlobe } from 'react-icons/gi';
import { BsGithub } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';

function Project(props) {
  const { video, images, title, description, tags, githubLink, liveSiteLink, playStoreLink } = props;
  
  return (
    <div>
      <div className='project-container'>

        <div className='project-info'>
          <PhotoCarousel video={video} images={images} projectName={title}/>
          <div className='project-text'>
            <h1 className='project-title'>
              {title}
            </h1>
            <p className="project-info-text">
              {description}
            </p>
            <ul className='tag-list'> Tags:
              { tags && tags.map((tag, index) => {
                return (
                  <li key={title+index} className='tag-list-item'>
                    {tag}
                  </li>
                )
              }) }
            </ul>

            { githubLink && 
              <a href={githubLink} className="project-link" target="_blank" rel="noreferrer" alt="GitHub Repo">
                <button className='link-button'>
                  <BsGithub size={20} className='link-icon'/>
                  See Code
                  <MdOpenInNew size={15} className='new-tab'/>
                </button>
              </a>
            }
            { playStoreLink !== '' && 
              <a href="https://play.google.com/store/apps/details?id=com.BookKeeper" target="_blank" className="project-link" rel="noreferrer" alt="Play store listing">
                <button className='link-button'>
                  <FaGooglePlay size={20} className='link-icon'/>
                    Google Play
                  <MdOpenInNew size={15} className='new-tab'/>
                </button>
              </a>
            }
            { liveSiteLink !== '' &&
              <a href={liveSiteLink} className="project-link" target="_blank" rel="noreferrer" alt="Live Site">
                <button className='link-button'>
                  <GiWireframeGlobe size={20} className='link-icon'/>
                  Live Site
                  <MdOpenInNew size={15} className='new-tab'/>
                </button>
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project