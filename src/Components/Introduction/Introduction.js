import React from 'react';
import './introduction.css';

function Introduction() {
  return (
    <div className='intro-flex'>
      <div className='intro-container'>
        <h1>Hello, I'm <span id="full-name">Dillon Kyle</span>.</h1>
        <h1>I'm a front-end web developer.</h1>
      </div>
    </div>
  )
}

export default Introduction