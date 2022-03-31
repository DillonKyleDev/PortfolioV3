import React from 'react';
import Wave from '../Wave/Wave';

//wave declaration
const d1 = "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";


export const wave1 = 
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
  marginTop={0}/>;

export const wave2 = 
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
  marginTop={0}/>;


export const wave3 = 
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
  marginTop={0}/>;

export const wave4 = 
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
  marginTop={0}/>;
