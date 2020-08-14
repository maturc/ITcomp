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
      <a href="test" style={{backgroundImage: `url(${beach})`}}>{""}</a>
      <a href="test" style={{backgroundImage: `url(${forest})`}}>{""}</a>
      <a href="test" style={{backgroundImage: `url(${mountain})`}}>{""}</a>
      <a href="test" style={{backgroundImage: `url(${nightSky})`}}>{""}</a>
      <a href="test" style={{backgroundImage: `url(${photographer})`}}>{""}</a>
      <a href="test" style={{backgroundImage: `url(${road})`}}>{""}</a>
      <a href="test" style={{backgroundImage: `url(${snorkeling})`}}>{""}</a>
    </div>
  );
}

export default Portfolio;
