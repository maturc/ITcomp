import React from 'react';
import { Link } from 'react-router-dom';
import { INav } from "../../interfaces";

function NavMain( { classProp, setPlayDrawerAnimation }: INav ) {
  function handleClick() {
    if(setPlayDrawerAnimation)
      setPlayDrawerAnimation(false)
  }
  return (
    <ul className={classProp}>
        <Link to="/" onClick={handleClick}>
          <li>Home</li>
        </Link>
        <Link to="/about" onClick={handleClick}>
          <li>About</li>
        </Link>
        <Link to="/portfolio" onClick={handleClick}>
          <li>Portfolio</li>
        </Link>
      </ul>
  );
}

export default NavMain;
