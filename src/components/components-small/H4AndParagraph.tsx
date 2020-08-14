import React from 'react';
import { IHAndP } from '../../interfaces';

function H4AndParagraph( {header, paragraph}: IHAndP ) {
  if(paragraph==="lorem")
    paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
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
