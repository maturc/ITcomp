import React, { useState, useEffect } from 'react';
import TestimonialTemplate from './components-small/TestimonialTemplate';
import { Button } from '@material-ui/core';

function Testimonials() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const slides = [
    <div className="testimonials__group">
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Ivan", company: "Abc"} } />
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Ivan", company: "Abc"} } />
    </div>
    ,
    <div className="testimonials__group">
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Marko", company: "Abc"} } />
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Marko", company: "Abc"} } />
    </div>
    ,
    <div className="testimonials__group">
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Ela", company: "Abc"} } />
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Ela", company: "Abc"} } />
    </div>
    ,
    <div className="testimonials__group">
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Josip", company: "Abc"} } />
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Josip", company: "Abc"} } />
    </div>
  ];

  useEffect(() => {
    console.log("innit")
    const next = (sliderIndex + 1) % slides.length;
    const timeOutVar = setTimeout(() => {
      setSliderIndex(next);
      console.log("go");
    }, 5000);
    return () => {
      console.log("claer")
      clearTimeout(timeOutVar);
    }
  }, [setSliderIndex, sliderIndex, slides]);

  return (
    <div className="testimonials">
      <h2>User reviews</h2>
      {slides[sliderIndex]}
      <Button onClick={ () => setSliderIndex(0) }>1</Button>
      <Button onClick={ () => setSliderIndex(1) }>2</Button>
      <Button onClick={ () => setSliderIndex(2) }>3</Button>
      <Button onClick={ () => setSliderIndex(3) }>4</Button>
    </div>
  );
}

export default Testimonials;