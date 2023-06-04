import React from 'react';
import { NavLink } from 'react-router-dom';
import css from "./Header.module.css"

function Header() {
  return (
    <div className={css.header}>
          <NavLink className={css.nav_link } aria-current="page" to="/">Home</NavLink>
          <NavLink className={css.nav_link } to="/movies">  Movies</NavLink>
    </div>
  );
}

export default Header;

