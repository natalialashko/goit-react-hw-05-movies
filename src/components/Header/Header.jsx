import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/movies">Movies</NavLink>
    </div>
  );
}

export default Header;

