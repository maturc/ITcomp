import React from 'react';
import half from '../../assets/portfolio-template-half.jpg'
import BannerHalf from '../components-small/BannerHalf';
import { IPortfolioDetailes } from '../../interfaces';
import H2AndParagraphAndImage from '../components-small/H2AndParagraphAndImage';
import useScroll from '../useScroll';

function PortfolioDetailesTemplate( {projectName, projectDescription, projectImage, projectImageAlt}: IPortfolioDetailes ) {
  useScroll();
  return (
    <div>
      <BannerHalf bannerText={projectName} bannerUrl={half} />
      <div className="container">
        <H2AndParagraphAndImage header="About" paragraph={projectDescription} src={projectImage} alt={projectImageAlt} />
      </div>
    </div>
  );
}

export default PortfolioDetailesTemplate;