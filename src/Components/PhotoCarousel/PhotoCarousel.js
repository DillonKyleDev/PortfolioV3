import React, { useState } from 'react';
import './_photo-carousel.scss';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { BsArrowsFullscreen, BsFullscreenExit } from 'react-icons/bs';

function PhotoCarousel(props) {
  const [ expanded, setExpanded ] = useState(false);

  const { video, images, projectName } = props;
  return (
    <div className='carousel-container'
    style={expanded ? {width: '90%'} : {width: '600px'}}>
      { video ?
        <Carousel 
        infiniteLoop={true} 
        showThumbs={true}
        showIndicators={false}>
            <div className='first-slide'>
              <img src={images[0]} className="fake-image" alt={projectName}/>
              <div className='slide-video'>
                <iframe 
                width="560" 
                height="315" 
                src={video} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture" 
                allowFullScreen>
                </iframe>
              </div>
            </div>
          { images.filter((image, index) => {return index !== 0}).map((image, index) => {
              return (
                <div key={projectName + index}>
                  <img src={image} className="slide-image" alt={projectName}/>
                </div>
              )
          })}
        </Carousel>
      :
        <Carousel 
        infiniteLoop={true} 
        showThumbs={true}
        showIndicators={false}>
          { images.map((image, index) => {
            return (
              <div key={projectName + index}>
                <img src={image} className="slide-image" alt={projectName}/>
              </div>
            )
          })}
        </Carousel>
      }
      <button onClick={() => setExpanded(prevState => !prevState)} className='wide-screen'>
        {expanded ? <BsFullscreenExit size={20} className="wide-screen-icon red"/> : <BsArrowsFullscreen size={20} className="wide-screen-icon"/> }
      </button>
    </div>
  )
}

export default PhotoCarousel