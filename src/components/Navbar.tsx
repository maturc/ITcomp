import React, { useState, useEffect } from 'react';
import NavMain from './components-small/NavMain';
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden, IconButton } from '@material-ui/core';
import logo from '../assets/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [playDrawerAnimation, setPlayDrawerAnimation] = useState<boolean>(false);
  const handleClick = () => {
    setPlayDrawerAnimation( prev => !prev);
  };
  useEffect(() => {
    if(!playDrawerAnimation)
      setTimeout(function(){ setOpen( playDrawerAnimation ); }, 300);
    else
      setOpen( playDrawerAnimation );
  }, [playDrawerAnimation]);
  return (
    <nav className="navbar">
      <h3 className="navbar__logo">
        <img src={logo} alt="logo"/>
      </h3>

      <Hidden xsDown>
        <NavMain classProp="navbar__links" showCurrentRoute={true} />
        <ul className="navbar__links navbar__links-social">
          <li>
            <a href="https://www.facebook.com/" className="navbar__social">
              <FacebookIcon />
            </a>
            </li>
          <li>
            <a href="https://www.instagram.com/" className="navbar__social">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </Hidden>

      <Hidden smUp>
        <IconButton onClick={handleClick} >
          <MenuIcon />
        </IconButton>
      </Hidden>

      <Hidden xsDown={!open} smUp>
        <div className={"navbar__drawer " + (playDrawerAnimation ? "navbar__drawer-enter" : "navbar__drawer-exit" )} >
          <div className="navbar">
            <h3 className="navbar__logo">
              <img src={logo} alt="logo"/>
            </h3>
            <IconButton onClick={handleClick} >
              <MenuIcon />
            </IconButton>
          </div>
          <NavMain classProp="navbar__links navbar__links-aside" setPlayDrawerAnimation={setPlayDrawerAnimation} showCurrentRoute={true} />
        </div>
      </Hidden>
    </nav>
  );
}

export default Navbar;
