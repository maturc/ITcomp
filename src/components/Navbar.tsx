import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="navbar__logo">
        Logo
      </h3>
      <ul className="navbar__links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
      </ul>
      <ul className="navbar__links">
        <li>Facebook</li>
        <li>Instagram</li>
      </ul>
    </nav>
  );
}

export default Navbar;
