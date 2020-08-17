import React from 'react';
import PortfolioDetailesTemplate from './PortfolioDetailesTemplate';
import server from '../../assets/server.jpg'

function Server() {
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi fugit alias dolore nulla praesentium dicta possimus! Neque, repudiandae. Quam esse unde exercitationem voluptas non dolore praesentium nulla cupiditate tempore ad.
  Vitae reprehenderit ipsum deleniti, earum distinctio sunt fuga dignissimos ab quia commodi exercitationem quam tenetur eaque cumque, dolore incidunt cupiditate? Laborum eligendi possimus dolorem neque amet necessitatibus dolor debitis soluta!
  Optio, nulla vero. Sequi aspernatur officiis tempora numquam illo. Labore quas exercitationem nostrum eaque doloribus dolore aperiam consequatur natus, aspernatur repellendus ullam voluptates sequi pariatur explicabo deleniti necessitatibus ut quia?`
  return (
    <div>
      <PortfolioDetailesTemplate
        projectName="Content management system"
        projectDescription={description}
        projectImage={server}
        projectImageAlt="cms"
      />
    </div>
  );
}

export default Server;