import React from 'react';
import { IHAndP } from '../../interfaces';

function H2AndParagraph( {header, paragraph}: IHAndP ) {
  if(paragraph==="lorem")
    paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  return (
    <>
      <h2>{header}</h2>
      <p>
        {paragraph}
      </p>
    </>
  );
}

export default H2AndParagraph;
