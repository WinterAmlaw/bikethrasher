import React, { useState, useEffect } from 'react';
import './about.css';
import { aboutQuery } from './AboutQuery';
import Api from '../../Api';
import {ABOUT} from '../../utils/constants'


function About() {
  const page = Api(aboutQuery, ABOUT)
  const { aboutSection, img1 } = page

  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  }

  return (
    <>
    <h1>About Us</h1>
    <div className="about">
      
      <div className="text-blob">
      
        <p>{aboutSection}</p>
      </div>
      <div className="photos">
      <img onLoad={handleImageLoad} style={{ visibility: isLoaded ? 'visible' : 'hidden' }} src={img1 && img1.url} alt="description" />
        {/* <img src={img1 && img1.url} alt="description" /> */}
      </div>
    </div>
    </>
  );
};

export default About;