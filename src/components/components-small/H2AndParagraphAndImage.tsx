import React from 'react';
import { IH2PI } from '../../interfaces';

function H2AndParagraphAndImage( {header, paragraph, src, alt}: IH2PI ) {
  if(paragraph==="lorem")
    paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis aliquid distinctio inventore officia eius, necessitatibus, excepturi asperiores voluptatum, atque dolorum. Repudiandae accusantium natus fugit cupiditate sed blanditiis rerum nostrum.Eveniet ducimus dolor, nihil assumenda illo, corporis natus quisquam magnam facilis debitis sit doloribus laudantium quam aliquid cupiditate obcaecati ipsam error! Quaerat doloribus sapiente laborum corrupti recusandae quae iste id?"
  return (
    <div className="learn-more">
      <div className="learn-more__text">
        <h2>
          {header}
        </h2>
        <p>
          {paragraph}
        </p>
      </div>
      <div className="learn-more__image-container">
        <img src={src} alt={alt ? alt : ""} className="learn-more__image" />
      </div>
    </div>
  );
}

export default H2AndParagraphAndImage;