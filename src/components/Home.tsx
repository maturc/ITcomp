import React from 'react';
import Banner from './components-small/Banner';
import LearnMore from './components-small/LearnMore';
import WhatWeDo from './components-small/WhatWeDo';
import PortfolioHome from './PortfolioHome';
import Testimonials from './Testimonials';
import aboutUs from '../assets/about-us.jpg';
import ContactHome from './components-small/ContactHome';
import useScroll from './useScroll';

function Home() {
  useScroll();
  const aboutUsParagraph = `We are a full-service creative agency specializing in custom web design, web development, mobile development, UI/UX, and software development.`
  return (
    <div>
      <Banner />
      <div className="container">
        <LearnMore header="About Us" paragraph={aboutUsParagraph} button="Learn more" src={aboutUs} alt="placeholder"/>
        <WhatWeDo />
      </div>
      <PortfolioHome />
      <Testimonials />
      <ContactHome />
    </div>
  );
}

export default Home;
