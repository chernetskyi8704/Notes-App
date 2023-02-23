import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navigation = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
  };

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
        {isAuth ? (
          <li className={classes.navigation__item}>
            <NavLink
              className={classes.navigation__link}
              onClick={logout}
              to="/login"
            >
              Logout
            </NavLink>
          </li>
        ) : (
          <li className={classes.navigation__item}>
            <NavLink className={classes.navigation__link} to="/login">
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
