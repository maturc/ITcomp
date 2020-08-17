import React from 'react';
import BannerHalf from './components-small/BannerHalf';
import aboutUs from '../assets/about-us-half.jpg'
import H2AndParagraphAndImage from './components-small/H2AndParagraphAndImage';
import H3AndParagraph from './components-small/H3AndParagraph';
import group from '../assets/about/group.jpg';
import ideas from '../assets/about/ideas.jpg';
import awesome from '../assets/about/awesome.jpg';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import OrderedRows from './components-small/OrderedRows';
import useScroll from './useScroll';

function About() {
  useScroll();
  const who = `We are a full-service creative agency specializing in custom web design, web development, mobile development, UI/UX, and software development.
  Having worked with a wide array of technologies (.NET, PHP, Laravel, Angular 1.0/2.0, React, Django, etc...), we are confident that we can deliver. At ITcomp, we believe that nothing is impossible. We are a team of creative thinkers and problem solvers dedicated to expanding the limits of what is possible and help you achive your goals. We utilize our years of experience working with a variety of global brands to create innovative solutions.
  Scroll down to find out how we work.`
  const iconSize = "4rem";
  const iconColor = "#ff2b58";
  const orderedHeaders = ["Plan", "Design", "Build"];
  const orderedParagraphs = ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, maxime!", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, maxime!", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, maxime!"];
  return (
    <div>
      <BannerHalf bannerText="About Us" bannerUrl={aboutUs} />
      
      <div className="container">
        <H2AndParagraphAndImage header="Who are we?" paragraph={who} src={group} alt=""/>
        <div className="about__h3p">
          <div className="about__text-block">
            <TabletMacIcon style={ {fontSize: `${iconSize}`, color: `${iconColor}`} } />
            <div className="about__h3p-inner">
              <H3AndParagraph header="Awesome apps" paragraph="lorem"/>
            </div>
          </div>
          <img src={awesome} alt="app" className="about__image" />
        </div>
        <div className="about__h3p">
          <div className="about__text-block">
            <ImportantDevicesIcon style={ {fontSize: `${iconSize}`, color: `${iconColor}`} } />
            <div className="about__h3p-inner">
              <H3AndParagraph header="Inovative solutions" paragraph="lorem"/>
            </div>
          </div>
          <img src={ideas} alt="app" className="about__image" />
        </div>
      </div>
      <OrderedRows
        headers={orderedHeaders}
        paragraphs={orderedParagraphs}
      />
    </div>
  );
}

export default About;
