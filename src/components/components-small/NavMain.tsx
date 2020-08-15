import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { INav } from "../../interfaces";


function NavMain( { classProp, setPlayDrawerAnimation, showCurrentRoute }: INav ) {
  function handleClick() {
    if(setPlayDrawerAnimation)
      setPlayDrawerAnimation(false)
  }
  const location = useLocation();

  return (
    <ul className={classProp}>
        <Link to="/" onClick={handleClick}>
          <li className={`${(showCurrentRoute && location.pathname==="/") && "navbar__current"}`} >
            Home
          </li>
        </Link>
        <Link to="/portfolio" onClick={handleClick}>
          <li className={`${(showCurrentRoute && location.pathname==="/portfolio") && "navbar__current"}`} >
            Portfolio
          </li>
        </Link>
        <Link to="/about" onClick={handleClick}>
          <li className={`${(showCurrentRoute && location.pathname==="/about") && "navbar__current"}`} >
            About
          </li>
        </Link>
        <Link to="/contact" onClick={handleClick}>
          <li className={`${(showCurrentRoute && location.pathname==="/contact") && "navbar__current"}`} >
            Contact
          </li>
        </Link>
      </ul>
  );
}

export default NavMain;
