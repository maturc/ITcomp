import React from 'react';
import { IH4AndP } from '../../interfaces';

function H4AndParagraph( {header, paragraph}: IH4AndP ) {
  if(paragraph==="lorem")
    paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis aliquid distinctio inventore officia eius, necessitatibus, excepturi asperiores voluptatum, atque dolorum. Repudiandae accusantium natus fugit cupiditate sed blanditiis rerum nostrum.Eveniet ducimus dolor, nihil assumenda illo, corporis natus quisquam magnam facilis debitis sit doloribus laudantium quam aliquid cupiditate obcaecati ipsam error! Quaerat doloribus sapiente laborum corrupti recusandae quae iste id?"
    console.log("render")
  return (
    <>
      <h4>{header}</h4>
      <p>
        {paragraph}
      </p>
    </>
  );
}

export default H4AndParagraph;
