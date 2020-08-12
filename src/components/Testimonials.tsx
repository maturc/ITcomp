import React, { useState, useEffect } from 'react';
import TestimonialTemplate from './components-small/TestimonialTemplate';
import { Button } from '@material-ui/core';

function Testimonials() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [group, setGroup] = useState<JSX.Element>();
  const [timeOutVar, setTimeOutVar] = useState<NodeJS.Timeout>();
  useEffect(() => {
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
    const group4 = (
      <div className="testimonials__group">
        <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Josip", company: "Abc"} } />
        <TestimonialTemplate paragraph="lorem" user={ {image: "", name: "Josip", company: "Abc"} } />
      </div>
    );
    switch (sliderIndex) {
      case 2:
        setGroup(group2);
        break;
      case 3:
        setGroup(group3);
        break
      case 4:
        setGroup(group4);
        break
      default:
        setGroup(group1);
        break;
    }
    
  }, [sliderIndex, setGroup]);

  useEffect(() => {
    console.log("innit")
    setTimeOutVar(setTimeout(() => {
      setSliderIndex((prev)=>{ 
        if(prev===4)
          return 1
        return prev+1
        });
      console.log("go")
    }, 5000));
    return () => {
      if(timeOutVar)
        clearTimeout(timeOutVar);
      };
  }, [setSliderIndex, setTimeOutVar, timeOutVar]);
  function handleClick(num: number) {
    setSliderIndex(num);
    if(timeOutVar)
        clearTimeout(timeOutVar);
  }
  return (
    <div className="testimonials">
      <h2>User reviews</h2>
      {group}
      <Button onClick={ () => handleClick(1) }>1</Button>
      <Button onClick={ () => handleClick(2) }>2</Button>
      <Button onClick={ () => handleClick(3) }>3</Button>
      <Button onClick={ () => handleClick(4) }>4</Button>
    </div>
  );
}

export default Testimonials;