import React from 'react';
import { BsFillHexagonFill } from 'react-icons/bs';
import { GiInterceptorShip } from 'react-icons/gi';
import { IoIosColorPalette } from 'react-icons/io';
import { VscColorMode } from 'react-icons/vsc';
import { GiLightningTrio } from 'react-icons/gi';
import './about.css';
import Wave from '../Wave/Wave';

function About() {
  const d1 = "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";

  const d2 = "M0 225L33.3 232.8C66.7 240.7 133.3 256.3 200 271.2C266.7 286 333.3 300 400 290.3C466.7 280.7 533.3 247.3 600 230.7C666.7 214 733.3 214 800 237.8C866.7 261.7 933.3 309.3 1000 309.2C1066.7 309 1133.3 261 1200 258.2C1266.7 255.3 1333.3 297.7 1400 321.5C1466.7 345.3 1533.3 350.7 1566.7 353.3L1600 356L1600 0L1566.7 0C1533.3 0 1466.7 0 1400 0C1333.3 0 1266.7 0 1200 0C1133.3 0 1066.7 0 1000 0C933.3 0 866.7 0 800 0C733.3 0 666.7 0 600 0C533.3 0 466.7 0 400 0C333.3 0 266.7 0 200 0C133.3 0 66.7 0 33.3 0L0 0Z";
  const d3 = "M0 260L33.3 255.3C66.7 250.7 133.3 241.3 200 238.2C266.7 235 333.3 238 400 246.5C466.7 255 533.3 269 600 278.2C666.7 287.3 733.3 291.7 800 288.5C866.7 285.3 933.3 274.7 1000 273.8C1066.7 273 1133.3 282 1200 279.8C1266.7 277.7 1333.3 264.3 1400 261C1466.7 257.7 1533.3 264.3 1566.7 267.7L1600 271L1600 0L1566.7 0C1533.3 0 1466.7 0 1400 0C1333.3 0 1266.7 0 1200 0C1133.3 0 1066.7 0 1000 0C933.3 0 866.7 0 800 0C733.3 0 666.7 0 600 0C533.3 0 466.7 0 400 0C333.3 0 266.7 0 200 0C133.3 0 66.7 0 33.3 0L0 0Z";
  const d4 = "M0 217L33.3 215.8C66.7 214.7 133.3 212.3 200 218.5C266.7 224.7 333.3 239.3 400 238.7C466.7 238 533.3 222 600 213.8C666.7 205.7 733.3 205.3 800 194.7C866.7 184 933.3 163 1000 153.5C1066.7 144 1133.3 146 1200 146.8C1266.7 147.7 1333.3 147.3 1400 156.2C1466.7 165 1533.3 183 1566.7 192L1600 201L1600 0L1566.7 0C1533.3 0 1466.7 0 1400 0C1333.3 0 1266.7 0 1200 0C1133.3 0 1066.7 0 1000 0C933.3 0 866.7 0 800 0C733.3 0 666.7 0 600 0C533.3 0 466.7 0 400 0C333.3 0 266.7 0 200 0C133.3 0 66.7 0 33.3 0L0 0Z";
  const d5 = "M0 192L33.3 187C66.7 182 133.3 172 200 161.3C266.7 150.7 333.3 139.3 400 144.5C466.7 149.7 533.3 171.3 600 169.3C666.7 167.3 733.3 141.7 800 127.5C866.7 113.3 933.3 110.7 1000 116.3C1066.7 122 1133.3 136 1200 133.3C1266.7 130.7 1333.3 111.3 1400 112.3C1466.7 113.3 1533.3 134.7 1566.7 145.3L1600 156L1600 0L1566.7 0C1533.3 0 1466.7 0 1400 0C1333.3 0 1266.7 0 1200 0C1133.3 0 1066.7 0 1000 0C933.3 0 866.7 0 800 0C733.3 0 666.7 0 600 0C533.3 0 466.7 0 400 0C333.3 0 266.7 0 200 0C133.3 0 66.7 0 33.3 0L0 0Z";
  const d6 = "M0 74L33.3 73.3C66.7 72.7 133.3 71.3 200 75C266.7 78.7 333.3 87.3 400 85.5C466.7 83.7 533.3 71.3 600 65.7C666.7 60 733.3 61 800 66.7C866.7 72.3 933.3 82.7 1000 84.8C1066.7 87 1133.3 81 1200 75.7C1266.7 70.3 1333.3 65.7 1400 77C1466.7 88.3 1533.3 115.7 1566.7 129.3L1600 143L1600 0L1566.7 0C1533.3 0 1466.7 0 1400 0C1333.3 0 1266.7 0 1200 0C1133.3 0 1066.7 0 1000 0C933.3 0 866.7 0 800 0C733.3 0 666.7 0 600 0C533.3 0 466.7 0 400 0C333.3 0 266.7 0 200 0C133.3 0 66.7 0 33.3 0L0 0Z";
  const d7 = "M0 33L33.3 40C66.7 47 133.3 61 200 66.3C266.7 71.7 333.3 68.3 400 69C466.7 69.7 533.3 74.3 600 71.3C666.7 68.3 733.3 57.7 800 50.7C866.7 43.7 933.3 40.3 1000 35.8C1066.7 31.3 1133.3 25.7 1200 28.8C1266.7 32 1333.3 44 1400 46.8C1466.7 49.7 1533.3 43.3 1566.7 40.2L1600 37L1600 0L1566.7 0C1533.3 0 1466.7 0 1400 0C1333.3 0 1266.7 0 1200 0C1133.3 0 1066.7 0 1000 0C933.3 0 866.7 0 800 0C733.3 0 666.7 0 600 0C533.3 0 466.7 0 400 0C333.3 0 266.7 0 200 0C133.3 0 66.7 0 33.3 0L0 0Z";

  return (
    <div id="about" className='about-section-background'>
      <Wave 
      d={d1} 
      width='calc(200% + 1.3px)' 
      newWidth='calc(100% + 300px)' 
      height={56} 
      newHeight={50} 
      rotateVertical='rotate(180deg)'
      rotateHorizontal='rotateY(180deg)' 
      fill='#17092c' 
      top='0' 
      duration={20} 
      position='relative' />
      <div className='about-section-container'>
        <div className='about'>
          <h1 className='about-text'>ABOUT</h1>
          <div className='about-underline'/>
        </div>

        <div className='bio-container'>
          <div className='bio-text'>
            <p>
              My <strong><u>primary goal</u></strong> as a Web Developer is to make tools that <strong><u>empower people to do what they love in new and exciting ways</u></strong>. 
              Software engineers have the ability to bring convenience and accessibility to everyone and I strongly believe it is our responsibilty to do so.
            </p>
            <p>
              But bringing tools to everyone is a big task, and I'm always looking for ways to improve experiences. <strong><em>Here are some of the things I keep in mind 
              when creating user interfaces:</em></strong>
            </p>
          </div>
        </div>

        <div className='priorities-container'>
          <div className='hex-break hex-left'>
            <section>
              <div className='hex-container'>
                <BsFillHexagonFill size={200} className='hexagon'/>
                <VscColorMode  size={100} className='about-icon'/>
              </div>
              <h1 className='section-title'>Accessibility</h1>
              <p>
                I use tools like <a className="about-link" href="https://chrome.google.com/webstore/detail/access-assistant/ojiighldhdmahfdnhfdebnpmlbiemdfm" target="_blank" rel="noreferrer" alt="Chrome Accessabilty Assistant">
                  Chrome Access Assistant
                </a> and <a className="about-link" href="https://color.a11y.com/?wc3" target="_blank" rel="noreferrer" alt="Color a11y">
                  color.a11y.com
                </a> to ensure my projects are easy to use for everyone.
              </p>
            </section>
            <section>
              <div className='hex-container'>
                <BsFillHexagonFill size={200} className='hexagon'/>
                <GiLightningTrio  size={100} className='about-icon'/>
              </div>
              <h1 className='section-title'>Performance</h1>
              <p>
                Unoptimized apps can be hard to use. I like using tools like React's <a className="about-link" href="https://reactjs.org/docs/perf.html" target="_blank" rel="noreferrer" alt="React Perf Tool">Perf Tool</a> to check for unnecessary renders in my apps.
              </p>
            </section>
          </div>
          <div className='hex-break hex-right'>
            <section>
              <div className='hex-container'>
                <BsFillHexagonFill size={200} className='hexagon'/>
                <IoIosColorPalette  size={100} className='about-icon'/>
              </div>
              <h1 className='section-title'>Design</h1>
              <p>Who says performant can't also be beautiful? I can turn any concept, i.e. <a className="about-link" href="www.figma.com" target="_blank" rel="noreferrer" alt="Figma">Figma</a>, into a beautiful and fully realized UI.</p>
            </section>
            <section>
              <div className='hex-container'>
                <BsFillHexagonFill size={200} className='hexagon'/>
                <GiInterceptorShip size={100} className='about-icon'/>
              </div>
              <h1 className='section-title'>Dynamism</h1>
              <p className='dynamism-p'>Websites don't have to be static, I love making pages come to life with <button className='interaction'>interaction</button> and <button className="animation">animation!</button></p>
            </section>
          </div>
        </div>
        <div className='divider-container'>
          <div className='divider-1' />
          <div className='divider-2' />
        </div>
      </div>

      <div className='about-wave-container'>
        <div className="first-triangle">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
          </svg>
        </div>
        <div className='about-wave'>
          <Wave d={d3} 
          svgWidth={'1600'} 
          svgHeight={'900'} 
          viewBox={'0 0 1600 900'} 
          width={'100%'} 
          newWidth={'170%'} 
          height={900} 
          newHeight={1000} 
          fill={'#393a64'} 
          top={'200'} 
          duration={18} 
          position={'absolute'}
          pathPosition={'relative'} />
        </div>
        <div className='about-wave'>
          <Wave d={d2} 
          svgWidth={'1600'} 
          svgHeight={'900'} 
          viewBox={'0 0 1600 900'} 
          width={'150%'} 
          newWidth={'100%'} 
          height={900} 
          newHeight={900} 
          fill={'#bb005b'} 
          top={'120'} 
          duration={10} 
          position={'absolute'}
          pathPosition={'relative'} />
        </div>
        <div className='about-wave'>
          <Wave d={d3} 
          svgWidth={'1600'} 
          svgHeight={'900'} 
          viewBox={'0 0 1600 900'} 
          width={'100%'} 
          newWidth={'150%'} 
          height={900} 
          newHeight={900} 
          fill={'#a70062'} 
          top={'50'} 
          duration={15} 
          position={'absolute'}
          pathPosition={'relative'} />
        </div>
        <div className='about-wave'>
          <Wave d={d4} 
          svgWidth={'1600'} 
          svgHeight={'900'} 
          viewBox={'0 0 1600 900'} 
          width={'150%'} 
          newWidth={'100%'} 
          height={900} 
          newHeight={900} 
          fill={'#900067'} 
          top={'0'} 
          duration={16} 
          position={'absolute'}
          pathPosition={'relative'} />
        </div>
        <div className='about-wave'>
          <Wave d={d5} 
          svgWidth={'1600'} 
          svgHeight={'900'} 
          viewBox={'0 0 1600 900'} 
          width={'100%'} 
          newWidth={'250%'} 
          height={900} 
          newHeight={900} 
          fill={'#780269'}
          top={'0'} 
          duration={15} 
          position={'absolute'}
          pathPosition={'relative'} />
        </div>
        <div className='about-wave'>
          <Wave d={d6} 
          svgWidth={'1600'} 
          svgHeight={'900'} 
          viewBox={'0 0 1600 900'} 
          width={'100%'} 
          newWidth={'125%'} 
          height={900} 
          newHeight={900} 
          fill={'#5d096a'} 
          top={'10'} 
          duration={10} 
          position={'absolute'}
          pathPosition={'relative'} />
        </div>
        <div className='about-wave'>
          <Wave d={d7} 
          svgWidth={'1600'} 
          svgHeight={'900'} 
          viewBox={'0 0 1600 900'} 
          width={'120%'} 
          newWidth={'100%'} 
          height={900} 
          newHeight={900} 
          fill={'#17092c'} 
          top={'-15'} 
          duration={7} 
          position={'absolute'}
          pathPosition={'relative'} />
        </div>
      </div>



    </div>
  )
}

export default About