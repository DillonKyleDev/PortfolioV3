import React, { useState, useRef, useEffect } from 'react';

function Wave(props) {
  const { 
    d, 
    width, 
    height, 
    newWidth,
    newHeight,
    rotateVertical, 
    rotateHorizontal, 
    fill, 
    position,
    pathPosition,
    top, 
    bottom,
    left,
    right,
    marginTop,
    svgHeight,
    svgWidth,
    viewBox,
    duration, 
  } = props;

  const [ properties, setProperties ] = useState({
    width: width,
    height: height
  });
  const animateSwitch = useRef(true);
  
  const mainStyles = {
    marginTop: `-${marginTop}px`,
    position: position,
    bottom: `${bottom}px`,
    top: `${top}px`,
    left: `${left}px`,
    right: `${right}px`,
    width: '100%',
    height: `${height < newHeight ? newHeight : height}px`,
    overflow: 'hidden',
    lineHeight: '0',
    transform: rotateVertical,
    zIndex: 5,
  }
  const svgStyles = {
    position: pathPosition,
    display: 'block',
    width: properties.width,
    height: properties.height,
    transform: rotateHorizontal,
    transition: `width ${duration}s, height ${duration}s`,
    transitionTimingFunction: 'ease',
  }
  const shapeFill = {
    fill: fill,
  }

  useEffect(() => {
    const moveWave = () => {
      if(animateSwitch.current) {
        setProperties({
          ...properties,
          width: newWidth,
          height: newHeight
        });
      } else {
        setProperties({
          ...properties,
          width: width,
          height: height
        });
      }
      animateSwitch.current = !animateSwitch.current;
    };
    moveWave();
    const interval = setInterval(() => {
      moveWave();
    }, (duration * 1000))
  }, []);

  return (
    <div>

      <div style={mainStyles}>
        <svg height={svgHeight} 
        width={svgWidth} 
        style={svgStyles} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox={viewBox ? viewBox :"0 0 1200 120"} 
        preserveAspectRatio="none">
          <path style={shapeFill} d={d}/>
        </svg>
      </div>

    </div>
  )
}

export default Wave