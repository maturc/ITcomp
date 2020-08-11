import React from 'react';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { ITestimonialTemplate } from '../../interfaces';

function TestimonialTemplate( {paragraph, user}: ITestimonialTemplate ) {
  if(paragraph==="lorem")
    paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  return (
    <div className="testimonials__container">
      <FormatQuoteIcon />
      <p>{paragraph}</p>
      <div className="testimonials__container">
        <div className="testimonials__user">
          <img className="testimonials__img" src={user.image} alt="" />
          <div className="testimonials__user-details">
            <span className="testimonials__name">{user.name}</span>
            <span className="testimonials__company">{user.company} and is span the semanticly correct one</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialTemplate;