import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Photo Gallery</h1>
    <div className="links">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/search" className="link">
        Search
      </NavLink>
    </div>
  </header>
);

export default Header;