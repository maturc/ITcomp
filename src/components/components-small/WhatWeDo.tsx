import React from 'react';
import H4AndParagraph from './H4AndParagraph';
import WebIcon from '@material-ui/icons/Web';
import ComputerIcon from '@material-ui/icons/Computer';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import SmartphoneIcon from '@material-ui/icons/Smartphone';

function WhatWeDo() {
  const iconSize = "4rem";
  const iconColor = "#ff2b58"
  return (
    <div className="info__container-outer">
      <h2>What We Do</h2>
      <div className="info__container">
        <div className="info">
          <WebIcon style={ {fontSize: `${iconSize}`, color: `${iconColor}`} } />
          <H4AndParagraph header="Web design" paragraph="Our experienced design team can give shape to your vision. Whether you need a new design or if you want us to improve your existing design, we are confident that we will deliver." />
        </div>
        <div className="info">
          <ComputerIcon style={ {fontSize: `${iconSize}`, color: `${iconColor}`} } />
          <H4AndParagraph header="Web" paragraph="Do you need a web application? A single page application, a content managment system, an application with server side rendering, or something else? No matter your requirements, we will bring your ideas to life." />
        </div>
        <div className="info">
          <ViewQuiltIcon style={ {fontSize: `${iconSize}`, color: `${iconColor}`} } />
          <H4AndParagraph header="UI/UX" paragraph="The user experience is one of the most important part of every application. It's all about convenience and pleasure of interacting with the application. We make sure that we bring the user experience to the next level." />
        </div>
        <div className="info">
          <SmartphoneIcon style={ {fontSize: `${iconSize}`, color: `${iconColor}`} } />
          <H4AndParagraph header="Mobile" paragraph="Whether  you need a mobile application for your existing web application or a new one, our experienced team will make it happen." />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
