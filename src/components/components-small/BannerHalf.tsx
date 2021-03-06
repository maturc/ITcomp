import React from 'react';
import { IBannerHalf } from '../../interfaces';

function BannerHalf( {bannerText, bannerUrl}: IBannerHalf ) {
  return (
    <div className="banner__image banner__half" style={ {backgroundImage: `url(${bannerUrl})`} }>
      <h1>
        {bannerText}
      </h1>
    </div>
  );
}

export default BannerHalf;
