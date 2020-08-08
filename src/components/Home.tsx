import React from 'react';
import Banner from './components-small/Banner';
import LearnMore from './components-small/LearnMore';

function Home() {
  return (
    <div>
      <Banner />
      <LearnMore header="About Us" paragraph="lorem" button="Learn more" src="https://i.imgur.com/6beh1u3.jpg" alt="placeholder"/>
      <section>
        WHAT WE DO
      </section>
      <section>
        Portfolio
      </section>
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
  );
}

export default Home;
