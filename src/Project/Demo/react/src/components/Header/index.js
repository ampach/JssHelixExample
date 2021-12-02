import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Header = () => (
  <nav className="navbar is-black is-tab" role="navigation" aria-label="main navigation">
		<div className="container">
		  <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="images/helix-logo-white.png" />
        </a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
		  </div>

		  <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink to="/" className="navbar-item is-tab is-active">
            Home
          </NavLink>
          <NavLink to="/Products" className="navbar-item is-tab">
            Products
          </NavLink>
          <NavLink to="/Services" className="navbar-item is-tab">
            Services
          </NavLink> 
        </div>
		  </div>
		</div>
  </nav>  
);

export default Header;
