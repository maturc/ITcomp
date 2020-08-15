import React, { useState, useEffect } from 'react';
import TestimonialTemplate from './components-small/TestimonialTemplate';
import { Button, IconButton } from '@material-ui/core';
import iva from '../assets/testimonials/iva.jpg';
import ivan from '../assets/testimonials/ivan.jpg';
import josip from '../assets/testimonials/josip.jpg';
import julia from '../assets/testimonials/julia.jpg';
import lori from '../assets/testimonials/lori.jpg';
import marko from '../assets/testimonials/marko.jpg';
import nikolina from '../assets/testimonials/nikolina.jpg';
import tomislav from '../assets/testimonials/tomislav.jpg';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';



function Testimonials() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const slides = [
    <>
      <TestimonialTemplate paragraph="I have used ITcomp's services multiple times and I can't recommend them enough." user={ {image: `${ivan}`, name: "Ivan", company: "Aqua design"} } />
      <TestimonialTemplate paragraph="I am very impressed with how your team has worked with us." user={ {image: `${tomislav}`, name: "Tomislav", company: "Digital frontier"} } />
    </>
    ,
    <>
      <TestimonialTemplate paragraph="Our latest project was a huge success thanks to the amazing team at ITcomp." user={ {image: `${marko}`, name: "Marko", company: "NCS"} } />
      <TestimonialTemplate paragraph="I just wanted to recognize the two employees who talked with us, they did an amazing job." user={ {image: `${nikolina}`, name: "Nikolina", company: "ABC News"} } />
    </>
    ,
    <>
      <TestimonialTemplate paragraph="Excellent  service. I am looking forward to using your services again." user={ {image: `${julia}`, name: "Julia", company: "The Car Company"} } />
      <TestimonialTemplate paragraph="Solid work. I am particularly impressed with the UX, great work." user={ {image: `${iva}`, name: "Iva", company: "Qwert"} } />
    </>
    ,
    <>
      <TestimonialTemplate paragraph="This looks amazing. Great work on this project!! You guys always do wonderful work.”" user={ {image: `${josip}`, name: "Josip", company: "Media Z"} } />
      <TestimonialTemplate paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." user={ {image: `${lori}`, name: "Lori", company: "Lorem Ip"} } />
    </>
  ];
  useEffect(() => {
    const next = (sliderIndex + 1) % slides.length;
    const timeOutVar = setTimeout(() => {
      setSliderIndex(next);
    }, 3000);
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
      <div className="testimonials__button-container">
        <Button disableRipple={true} onClick={ () => setSliderIndex(0) }>
          { sliderIndex === 0 ? <RadioButtonCheckedIcon/> : <RadioButtonUncheckedIcon/> }
        </Button>
        <Button disableRipple={true} onClick={ () => setSliderIndex(1) }>
          { sliderIndex === 1 ? <RadioButtonCheckedIcon/> : <RadioButtonUncheckedIcon/> }
        </Button>
        <Button disableRipple={true} onClick={ () => setSliderIndex(2) }>
          { sliderIndex === 2 ? <RadioButtonCheckedIcon/> : <RadioButtonUncheckedIcon/> }
        </Button>
        <Button disableRipple={true} onClick={ () => setSliderIndex(3) }>
          { sliderIndex === 3 ? <RadioButtonCheckedIcon/> : <RadioButtonUncheckedIcon/> }
        </Button>
      </div>



    </div>
  );
}

export default Testimonials;