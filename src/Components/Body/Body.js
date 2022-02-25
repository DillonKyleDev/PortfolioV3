import React from 'react';
import Project from '../Project/Project';
import Wave from '../Wave/Wave';
import './body.css';
//Project Image Imports
//Netflix
import project1Image0 from '../../assets/NetflixClone/PlayButton.png';
import project1Image1 from '../../assets/NetflixClone/Hero.png';
import project1Image2 from '../../assets/NetflixClone/Content.png';
import project1Image3 from '../../assets/NetflixClone/MobileHero.png';
import project1Image4 from '../../assets/NetflixClone/MobileContent.png';
//TicketHound
import project2Image0 from '../../assets/TicketHound/PlayButton.png';
import project2Image1 from '../../assets/TicketHound/Login.png';
import project2Image2 from '../../assets/TicketHound/Projects.png';
import project2Image3 from '../../assets/TicketHound/Tickets.png';
import project2Image4 from '../../assets/TicketHound/Users.png';
//ArtPortfolio
import project3Image0 from '../../assets/ArtPortfolio/PlayButton.png';
import project3Image1 from '../../assets/ArtPortfolio/Home.png';
import project3Image2 from '../../assets/ArtPortfolio/Modal.png';
import project3Image3 from '../../assets/ArtPortfolio/ContactPage.png';
import project3Image4 from '../../assets/ArtPortfolio/OwnerDashboard.png';
import project3Image5 from '../../assets/ArtPortfolio/OwnerLogin.png';
import project3Image6 from '../../assets/ArtPortfolio/MobileDashboard.png';
import project3Image7 from '../../assets/ArtPortfolio/MobileHome.png';
//PortfolioV1
import project4Image0 from '../../assets/PortfolioV1/PlayButton.png';
import project4Image1 from '../../assets/PortfolioV1/Hero.png';
import project4Image2 from '../../assets/PortfolioV1/Projects.png';
import project4Image3 from '../../assets/PortfolioV1/MobileHero.png';
import project4Image4 from '../../assets/PortfolioV1/MobileProjects.png';
//ISS
import project5Image1 from '../../assets/ISS/Main.png';
import project5Image2 from '../../assets/ISS/Search.png';
import project5Image3 from '../../assets/ISS/MobileMain.png';

function Body() {

  const project1Images = [
    project1Image0,
    project1Image1,
    project1Image2,
    project1Image3,
    project1Image4
  ];
  const project2Images = [
    project2Image0,
    project2Image1,
    project2Image2,
    project2Image3,
    project2Image4
  ];
  const project3Images = [
    project3Image0,
    project3Image1,
    project3Image2,
    project3Image3,
    project3Image4,
    project3Image5,
    project3Image6,
    project3Image7
  ];
  const project4Images = [
    project4Image0,
    project4Image1,
    project4Image2,
    project4Image3,
    project4Image4
  ];
  const project5Images = [
    project5Image1,
    project5Image2,
    project5Image3
  ];

  const VIDEO_1 = "https://www.youtube.com/embed/9_nI0HaaXbc?rel=0&mute=1&showinfo=0&controls=1";
  const VIDEO_2 = "https://www.youtube.com/embed/9dwTE9JH82s?rel=0&mute=1&showinfo=0&controls=1";
  const VIDEO_3 = "https://www.youtube.com/embed/CzAUsHdfKLw?rel=0&mute=1&showinfo=0&controls=1";
  const VIDEO_4 = "https://www.youtube.com/embed/U6sjn_2wt5s?rel=0&mute=1&showinfo=0&controls=1";
  const VIDEO_5 = '';

  //wave declaration
  const d1 = "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";
  //triangle declaration
  const t1 = "M1200 0L0 0 598.97 114.72 1200 0z";
  return (
    <div>
      <div id="projects" className='body-container'>
        <div className='projects'>
          <h1 className='projects-text'>SELECTED WORKS</h1>
          <div className='projects-underline' />
        </div>
        <div className='projects-section'>
          <div className='project first-project'>
            <Project 
            video={VIDEO_1} 
            images={project1Images}
            title={"Netflix Clone"} 
            description={"A clone of the Netflix 2022 home page.  A quick project that demonstrates ability to replicate front-end specifications."} 
            tags={["React", "JavaScript", "HTML/CSS", "Responsive", "Clone"]}
            githubLink={'https://github.com/DillonKyleDev/Netflix-Clone'}
            liveSiteLink={'https://netflix-home-2021.herokuapp.com/'}/>
          </div>

          <Wave 
          d={d1} 
          width={'120%'} 
          newWidth={'calc(250% + 100px)'} 
          height={75} 
          newHeight={80} 
          fill={'#393a64'} 
          rotateVertical={"rotate(180deg)"} 
          top={'0'} 
          right={'0'} 
          duration={5} 
          position={'relative'} 
          marginTop={0}/>

          <div className='project second-project'>
            <Project 
            video={VIDEO_2}
            images={project2Images}
            title={"Ticket Hound"} 
            description={"A React based ticket/issue tracking app that offers different authorization levels for accounts. Adding and editing projects and tickets, and more!"} 
            tags={["React", "JavaScript", "HTML/CSS", "MaterialUI", "MongoDB", "Node.js", "Express", "Authentication" ]}
            githubLink={'https://github.com/DillonKyleDev/tickethound'}
            liveSiteLink={'https://polar-river-74527.herokuapp.com/'}/>
          </div>

          <div className='project third-project'>
            <Wave 
            d={d1} 
            width={'calc(250% + 1.3px)'} 
            newWidth={'120%'} 
            height={75} 
            newHeight={80} 
            fill={'#393a64'} 
            transformHorizontal={"rotateY(180deg)"} 
            bottom={'0'} 
            left={'0'} 
            duration={5} 
            position={'relative'} 
            marginTop={0}/>

            <Project 
            video={VIDEO_3}
            images={project3Images}
            title={"Paid Art Portfolio"} 
            description={"A professional art portfolio made to client specification using React Bootstrap. Features a behind the scenes login for the owner to upload and edit portfolio images. Live site unavailable per request of client and due to the nature of the content."} 
            tags={["React", "JavaScript", "HTML/CSS", "Bootstrap", "Responsive", "MongoDB", "Node.js", "Express", "Authentication"]}
            githubLink={'https://github.com/DillonKyleDev/DarianPortfolio'}
            liveSiteLink={''}/>
          </div>

          <div className='project fourth-project'>
            <Wave 
            d={d1} 
            width={'calc(300% + 1.3px)'} 
            newWidth={'100%'} 
            height={75} 
            newHeight={80} 
            fill={'#534b91'} 
            transformHorizontal={"rotateY(180deg)"} 
            bottom={'0'} 
            right={'0'} 
            duration={7} 
            position={'relative'} 
            marginTop={0}/>

            <Project 
            video={VIDEO_4}
            images={project4Images}
            title={"Portfolio Version 1.0"} 
            description={"This is my first Front-end Web Development portfolio. It was made using vanilla JavaScript, HTML and CSS, and showcases some of my early learning."} 
            tags={["JavaScript", "HTML/CSS", "Responsive", "Node.js", "Express"]}
            githubLink={'https://github.com/DillonKyleDev/PortfolioV1'}
            liveSiteLink={'https://portfolioversion1.herokuapp.com/'}/>
          </div>

          <div className='project fifth-project'>
            <Wave 
            d={d1} 
            width={'calc(250% + 1.3px)'} 
            newWidth={'calc(100% + 100px)'} 
            height={75} 
            newHeight={80} 
            fill={'#2A1E56'} 
            transformHorizontal={"rotateY(180deg)"} 
            bottom={'0'} 
            left={'0'} 
            duration={5} 
            position={'relative'} 
            marginTop={0}/>

            <Project 
            video={VIDEO_5}
            images={project5Images}
            title={"ISS Travel Guide"} 
            description={`A simple app that consumes an API that tracks the International Space Station and displays locations close to it using a reverse geocoding API. Check out the repo for more info about the APIs used.`} 
            tags={["React", "JavaScript", "HTML/CSS", "TomTom API", "Leaflet API", "Geocoding", "Responsive",]}
            githubLink={'https://github.com/DillonKyleDev/ISS-Travel-Guide/tree/main'}
            liveSiteLink={'https://dillonkyledev.github.io/ISS-Travel-Guide/'}/>
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