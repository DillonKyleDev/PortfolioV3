import React from 'react';
import Project from '../Project/Project';

//Project Image Imports
//Book Keeper
import videoScreenShot from '../../assets/BookKeeper/VideoPlayButton.png';
import AddBook from '../../assets/BookKeeper/AddBook.png';
import AddGoal from '../../assets/BookKeeper/AddGoal.png';
import last2 from '../../assets/BookKeeper/last2.png';
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
  videoScreenShot,
  AddBook,
  AddGoal,
  last2
];

const VIDEO_1 = "https://www.youtube.com/embed/9_nI0HaaXbc?rel=0&mute=1&showinfo=0&controls=1";
const VIDEO_2 = "https://www.youtube.com/embed/9dwTE9JH82s?rel=0&mute=1&showinfo=0&controls=1";
const VIDEO_3 = "https://www.youtube.com/embed/CzAUsHdfKLw?rel=0&mute=1&showinfo=0&controls=1";
const VIDEO_4 = "https://www.youtube.com/embed/U6sjn_2wt5s?rel=0&mute=1&showinfo=0&controls=1";
const VIDEO_5 = "https://www.youtube.com/embed/6BJM3rYA1Ho?rel=0&mute=1&showinfo=0&controls=1";

//Projects
export const BookKeeperAppProject = 
<Project 
  video={VIDEO_5} 
  images={project5Images}
  title={<p><i>Book Keeper</i> - Android App</p>}
  description={<p>A React Native Android application available for free on the <span style={{fontWeight: 900}}>Google Play Store</span>.  I developed this app as a tool to help myself read more books and to help others do the same.  Through <i>Book Keeper</i>, users choose a book and the date they wish to finish on, as well as the weekdays they'll devote to reading, and <i>Book Keeper</i> does the rest. This app is receiving updates.</p>}
  tags={["React Native", "TypeScript", "Redux", "Android Application", "Responsive", "Google Play Store"]}
  githubLink='https://github.com/DillonKyleDev/Book-Keeper'
  playStoreLink='https://netflix-home-2021.herokuapp.com/'
  liveSiteLink=''/>
export const NetflixProject = 
<Project 
  video={VIDEO_1} 
  images={project1Images}
  title="Netflix Clone"
  description="A clone of the Netflix 2022 home page.  A quick project that demonstrates ability to replicate front-end specifications."
  tags={["React", "JavaScript", "HTML/CSS", "Responsive", "Clone"]}
  githubLink='https://github.com/DillonKyleDev/Netflix-Clone'
  liveSiteLink='https://netflix-home-2021.herokuapp.com/'
  playStoreLink=''/>
export const TicketHoundProject =
<Project 
  video={VIDEO_2}
  images={project2Images}
  title="Ticket Hound"
  description="A React based ticket/issue tracking app that offers different authorization levels for accounts. Adding and editing projects and tickets, and more!"
  tags={["React", "JavaScript", "HTML/CSS", "MaterialUI", "MongoDB", "Node.js", "Express", "Authentication" ]}
  githubLink='https://github.com/DillonKyleDev/tickethound'
  liveSiteLink='https://polar-river-74527.herokuapp.com/'
  playStoreLink=''/>
export const PaidArtPortfolioProject =
<Project 
  video={VIDEO_3}
  images={project3Images}
  title="Paid Art Portfolio"
  description="A professional art portfolio made to client specification using React Bootstrap. Features a behind the scenes login for the owner to upload and edit portfolio images. The live site is unlisted due to the nature of the content."
  tags={["React", "JavaScript", "HTML/CSS", "Bootstrap", "Responsive", "MongoDB", "Node.js", "Express", "Authentication"]}
  githubLink='https://github.com/DillonKyleDev/DarianPortfolio'
  liveSiteLink=''
  playStoreLink=''/>
export const PortfolioV1Project =
<Project 
  video={VIDEO_4}
  images={project4Images}
  title="Portfolio Version 1.0" 
  description="My first Front-end Web Development portfolio. It was made using vanilla JavaScript, HTML and CSS, and showcases some of my early learning."
  tags={["JavaScript", "HTML/CSS", "Responsive", "Node.js", "Express"]}
  githubLink='https://github.com/DillonKyleDev/PortfolioV1'
  liveSiteLink='https://portfolioversion1.herokuapp.com/'
  playStoreLink=''/>
