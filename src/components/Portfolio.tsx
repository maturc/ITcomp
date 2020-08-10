import React from 'react';
import beach from '../assets/beach.jpg'
import forest from '../assets/forest.jpg'
import mountain from '../assets/mountain.jpg'
import nightSky from '../assets/night-sky.jpg'
import photographer from '../assets/photographer.jpg'
import road from '../assets/road-from-above.jpg'
import snorkeling from '../assets/woman-snorkeling.jpg'

function Portfolio() {
  return (
    <div className="portfolio">
      <img src={beach}        alt="project" />
      <img src={forest}       alt="project" />
      <img src={mountain}     alt="project" />
      <img src={nightSky}     alt="project" />
      <img src={photographer} alt="project" />
    </div>
  );
}

export default Portfolio;
