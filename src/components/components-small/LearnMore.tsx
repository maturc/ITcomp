import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { ILearnMore } from '../../interfaces';

function LearnMore( {header, paragraph, button, src, alt}: ILearnMore ) {
  if(paragraph==="lorem")
    paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis aliquid distinctio inventore officia eius, necessitatibus, excepturi asperiores voluptatum, atque dolorum. Repudiandae accusantium natus fugit cupiditate sed blanditiis rerum nostrum.Eveniet ducimus dolor, nihil assumenda illo, corporis natus quisquam magnam facilis debitis sit doloribus laudantium quam aliquid cupiditate obcaecati ipsam error! Quaerat doloribus sapiente laborum corrupti recusandae quae iste id?"
    console.log("render")
  return (
    <div className="learn-more">
      <div className="learn-more__text">
        <h2>
          {header}
        </h2>
        <p>
          {paragraph}
        </p>
        <Button color="secondary">
          {button}
        </Button>
      </div>
      <div className="learn-more__image-container">
        <img src={src} alt={alt ? alt : ""} className="learn-more__image" />
      </div>
    </div>
  );
}

export default LearnMore;