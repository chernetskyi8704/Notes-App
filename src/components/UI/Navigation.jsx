import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.navigation__items}>
        <li className={classes.navigation__item}>
          <NavLink className={classes.navigation__link} to="/">
            Home
          </NavLink>
        </li>
        <li className={classes.navigation__item}>
          <NavLink className={classes.navigation__link} to="/notes">
            Notes
          </NavLink>
        </li>
        <li className={classes.navigation__item}>
          <NavLink className={classes.navigation__link} to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
