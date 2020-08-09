import React from 'react';
import { IH4AndP } from '../../interfaces';

function H4AndParagraph( {header, paragraph}: IH4AndP ) {
  if(paragraph==="lorem")
    paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
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
