import React from 'react';
import { IOrderedRows } from '../../interfaces';

function OrderedRows( {headers, paragraphs}: IOrderedRows ) {
  const iconColor = "#ff2b58";
  return (
    <div className="about__ordered-outer">
      <div>
        <h3 className="about__ordered">
          <span style={ {color: `${iconColor}`, display: "block"} }>01</span>
          {headers[0]}
        </h3>
        <p>
          {paragraphs[0]}
        </p>
      </div>
      <div>
        <h3 className="about__ordered">
          <span style={ {color: `${iconColor}`, display: "block"} }>02</span>
          {headers[1]}
        </h3>
        <p>
          {paragraphs[1]}
        </p>
      </div>
      <div>
        <h3 className="about__ordered">
          <span style={ {color: `${iconColor}`, display: "block"} }>03</span>
          {headers[2]}
        </h3>
        <p>
          {paragraphs[2]}
        </p>
      </div>
    </div>
  );
}

export default OrderedRows;
