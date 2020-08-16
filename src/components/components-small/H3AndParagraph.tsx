import React from 'react';
import { IHAndP } from '../../interfaces';

function H3AndParagraph( {header, paragraph}: IHAndP ) {
  if(paragraph==="lorem")
    paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  return (
    <>
      <h3>{header}</h3>
      <p>
        {paragraph}
      </p>
    </>
  );
}

export default H3AndParagraph;
