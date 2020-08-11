import React from 'react';
import Banner from './components-small/Banner';
import LearnMore from './components-small/LearnMore';
import WhatWeDo from './components-small/WhatWeDo';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';

function Home() {
  return (
    <div>
      <Banner />
      <div className="container">
        <LearnMore header="About Us" paragraph="lorem" button="Learn more" src="https://i.imgur.com/6beh1u3.jpg" alt="placeholder"/>
        <WhatWeDo />
      </div>
      <Portfolio /  >
      <div className="container">
        <Testimonials />
        <section>
          Blog?
        </section>
        <section>
          Portfolio
        </section>
      </div>
    </div>
  );
}

export default Home;
