import React from 'react';
import BannerHalf from './components-small/BannerHalf';
import snowBanner from '../assets/banner-half-snow.jpg'
import H2AndParagraph from './components-small/H2AndParagraph';

function About() {
  return (
    <div>
      <BannerHalf bannerText="About Us" bannerUrl={snowBanner}/>

      <H2AndParagraph header="Our Work" paragraph="lorem"/>

      <section>
        <div>
          icon
          <h3>Some text</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <img src="" alt="" />
        </div>
        <div>
          icon
          <h3>Some text</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <img src="" alt="" />
        </div>
      </section>

      <section>
        <span>01</span>
        <h3>Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, modi.</p>
      </section>
      
    </div>
  );
}

export default About;
