import React, { useState } from 'react';
import TestimonialTemplate from './components-small/TestimonialTemplate';
import { Button } from '@material-ui/core';

function Testimonials() {
  const [sliderIndex, setSliderIndex] = useState(1);

  const group1 = (
    <div className="testimonials__group">
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Ivan", company: "Abc"} } />
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Ivan", company: "Abc"} } />
    </div>
  );
  const group2 = (
    <div className="testimonials__group">
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Marko", company: "Abc"} } />
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Marko", company: "Abc"} } />
    </div>
  );
  const group3 = (
    <div className="testimonials__group">
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Ela", company: "Abc"} } />
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Ela", company: "Abc"} } />
    </div>
  );
  let group
  switch (sliderIndex) {
    case 2:
      group = group2;
      break;
    case 3:
      group = group3;
      break
    default:
      group = group1;
      break;
  }

  return (
    <div className="testimonials">
      <h2>User reviews</h2>
      {group}
      <Button onClick={ () => setSliderIndex(sliderIndex-1) }>Back</Button>
      <Button onClick={ () => setSliderIndex(sliderIndex+1) }>Next</Button>
    </div>
  );
}

export default Testimonials;