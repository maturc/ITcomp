import React from 'react';
import graphs from '../assets/graphs.jpg'
import mobileApp from '../assets/mobile-app.jpg'
import server from '../assets/server.jpg'
import galery from '../assets/galery.jpg'
import chat from '../assets/chat.jpg'
import buttonBackground from '../assets/portfolio-button-background.jpg'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function PortfolioHome() {
  return (
    <div className="portfolio">
      <Link to="/portfolio/traffic" style={ {backgroundImage: `url(${graphs})`   } }>{""}</Link>
      <Link to="/portfolio/mobile"  style={ {backgroundImage: `url(${mobileApp})`} }>{""}</Link>
      <Link to="/portfolio/server"  style={ {backgroundImage: `url(${server})`   } }>{""}</Link>
      <Link to="/portfolio/galery"  style={ {backgroundImage: `url(${galery})`   } }>{""}</Link>
      <Link to="/portfolio/chat"    style={ {backgroundImage: `url(${chat})`     } }>{""}</Link>
      <div className="portfolio__button-container" style={{backgroundImage: `url(${buttonBackground})`}}>
        <Link to="/portfolio" className="buttons__container">
          <Button disableRipple={true} color="secondary" className="buttons buttons-white">More projects</Button>
        </Link>
      </div>
    </div>
  );
}

export default PortfolioHome;
