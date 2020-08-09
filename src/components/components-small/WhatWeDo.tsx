import React from 'react';
import H4AndParagraph from './H4AndParagraph';

function WhatWeDo() {
  return (
    <div className="info__container-outer">
      <h2>What We Do</h2>
      <div className="info__container">
        <div className="info">
          Image
          <H4AndParagraph header="Test" paragraph="lorem" />
        </div>
        <div className="info">
          Image
          <H4AndParagraph header="Test" paragraph="lorem" />
        </div>
        <div className="info">
          Image
          <H4AndParagraph header="Test" paragraph="lorem" />
        </div>
        <div className="info">
          Image
          <H4AndParagraph header="Test" paragraph="lorem" />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
