import React from 'react';
import graphs from '../assets/graphs.jpg';
import mobileApp from '../assets/mobile-app.jpg';
import server from '../assets/server.jpg';
import galery from '../assets/galery.jpg';
import chat from '../assets/chat.jpg';
import portfolio from '../assets/portfolio-half.jpg';
import news from '../assets/news.jpg';
import banking from '../assets/banking.jpg';
import eComerce from '../assets/e-comerce.jpg';
import BannerHalf from './components-small/BannerHalf';
import useScroll from './useScroll';

function Portfolio() {
  useScroll();
  return (
    <>
      <BannerHalf bannerText="Portfolio" bannerUrl={portfolio} />
      <div className="portfolio portfolio__main">
        <a href="/portfolio/traffic"   style={{backgroundImage: `url(${graphs})`   } }>{""}</a>
        <a href="/portfolio/mobile"    style={{backgroundImage: `url(${mobileApp})`} }>{""}</a>
        <a href="/portfolio/server"    style={{backgroundImage: `url(${server})`   } }>{""}</a>
        <a href="/portfolio/galery"    style={{backgroundImage: `url(${galery})`   } }>{""}</a>
        <a href="/portfolio/chat"      style={{backgroundImage: `url(${chat})`     } }>{""}</a>
        <a href="/portfolio/news"      style={{backgroundImage: `url(${news})`     } }>{""}</a>
        <a href="/portfolio/banking"   style={{backgroundImage: `url(${banking})`  } }>{""}</a>
        <a href="/portfolio/e-comerce" style={{backgroundImage: `url(${eComerce})` } }>{""}</a>
      </div>
    </>
  );
}

export default Portfolio;
