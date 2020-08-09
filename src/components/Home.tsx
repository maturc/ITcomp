import React from 'react';
import Banner from './components-small/Banner';
import LearnMore from './components-small/LearnMore';
import WhatWeDo from './components-small/WhatWeDo';

function Home() {
  return (
    <div>
      <Banner />
      <div className="container">
        <LearnMore header="About Us" paragraph="lorem" button="Learn more" src="https://i.imgur.com/6beh1u3.jpg" alt="placeholder"/>
        <WhatWeDo />
      </div>
      <section>
        Portfolio
      </section>
      <div className="container">
        <section>
          Impressions
        </section>
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
