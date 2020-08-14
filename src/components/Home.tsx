import React from 'react';
import Banner from './components-small/Banner';
import LearnMore from './components-small/LearnMore';
import WhatWeDo from './components-small/WhatWeDo';
import PortfolioHome from './PortfolioHome';
import Testimonials from './Testimonials';

function Home() {
  return (
    <div>
      <Banner />
      <div className="container">
        <LearnMore header="About Us" paragraph="lorem" button="Learn more" src="https://i.imgur.com/6beh1u3.jpg" alt="placeholder"/>
        <WhatWeDo />
      </div>
      <PortfolioHome />
      <Testimonials />
      <div className="container">
        <section>
          Blog?
        </section>
      </div>
    </div>
  );
}

export default Home;
