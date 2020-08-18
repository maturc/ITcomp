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
import { Link } from 'react-router-dom';

function Portfolio() {
  useScroll();
  return (
    <>
      <BannerHalf bannerText="Portfolio" bannerUrl={portfolio} />
      <div className="portfolio portfolio__main">
        <Link to="/portfolio/traffic"   style={{backgroundImage: `url(${graphs})`   } }>{""}</Link>
        <Link to="/portfolio/mobile"    style={{backgroundImage: `url(${mobileApp})`} }>{""}</Link>
        <Link to="/portfolio/server"    style={{backgroundImage: `url(${server})`   } }>{""}</Link>
        <Link to="/portfolio/galery"    style={{backgroundImage: `url(${galery})`   } }>{""}</Link>
        <Link to="/portfolio/chat"      style={{backgroundImage: `url(${chat})`     } }>{""}</Link>
        <Link to="/portfolio/news"      style={{backgroundImage: `url(${news})`     } }>{""}</Link>
        <Link to="/portfolio/banking"   style={{backgroundImage: `url(${banking})`  } }>{""}</Link>
        <Link to="/portfolio/e-comerce" style={{backgroundImage: `url(${eComerce})` } }>{""}</Link>
      </div>
    </>
  );
}

export default Portfolio;
