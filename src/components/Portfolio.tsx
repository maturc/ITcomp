import React from 'react';
import graphs from '../assets/graphs.jpg'
import mobileApp from '../assets/mobile-app.jpg'
import server from '../assets/server.jpg'
import galery from '../assets/galery.jpg'
import chat from '../assets/chat.jpg'

function Portfolio() {
  return (
    <div className="portfolio">
      <a href="/portfolio/trafic" style={{backgroundImage: `url(${graphs})`}}>{""}</a>
      <a href="/portfolio/mobile" style={{backgroundImage: `url(${mobileApp})`}}>{""}</a>
      <a href="/portfolio/server" style={{backgroundImage: `url(${server})`}}>{""}</a>
      <a href="/portfolio/galery" style={{backgroundImage: `url(${galery})`}}>{""}</a>
      <a href="/portfolio/chat"   style={{backgroundImage: `url(${chat})`}}>{""}</a>
    </div>
  );
}

export default Portfolio;
