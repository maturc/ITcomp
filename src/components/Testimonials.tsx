import React, { useState, useEffect, ReactElement } from 'react';
import TestimonialTemplate from './components-small/TestimonialTemplate';
import { Button } from '@material-ui/core';
import { ActionTranslate } from 'material-ui/svg-icons';

function Testimonials() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const slides = [
    <>
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Ivan", company: "Abc"} } />
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Ivan", company: "Abc"} } />
    </>
    ,
    <>
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Marko", company: "Abc"} } />
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Marko", company: "Abc"} } />
    </>
    ,
    <>
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Ela", company: "Abc"} } />
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Ela", company: "Abc"} } />
    </>
    ,
    <>
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Josip", company: "Abc"} } />
      <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Josip", company: "Abc"} } />
    </>
  ];

  useEffect(() => {
    const next = (sliderIndex + 1) % slides.length;
    const timeOutVar = setTimeout(() => {
      setSliderIndex(next);
    }, 5000);
    return () => { clearTimeout(timeOutVar) }
  }, [setSliderIndex, sliderIndex, slides]);

  return (
    <div className="testimonials">
      <div className="container">
        <h2>User reviews</h2>
      </div>
      <div className="testimonials__hide-overflow-container">

        <div className="testimonials__hide-overflow"></div>
        <div className="testimonials__slide-container container" style={{transform: `translateX(${-100*sliderIndex}%)`, transition: "transform 0.3s ease-out"}} >
          <div className="testimonials__group" >
            {slides[0]}
          </div>
          <div className="testimonials__group" >
            {slides[1]}
          </div>
          <div className="testimonials__group" >
            {slides[2]}
          </div>
          <div className="testimonials__group" >
            {slides[3]}
          </div>
        </div>
        <div className="testimonials__hide-overflow"></div>
      </div>
      <Button onClick={ () => setSliderIndex(0) }>1</Button>
      <Button onClick={ () => setSliderIndex(1) }>2</Button>
      <Button onClick={ () => setSliderIndex(2) }>3</Button>
      <Button onClick={ () => setSliderIndex(3) }>4</Button>
    </div>
  );
}

export default Testimonials;