import React from 'react';
import NavMain from './components-small/Nav-main';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__credits">
        Created by Matija Turčec
      </div>
      <div className="footer__credits">
        <NavMain classProp="navbar__links footer__links" />
      </div>
    </div>
  );
}

export default Footer;
