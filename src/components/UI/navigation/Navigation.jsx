import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Navigation = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <nav className={classes.navigation}>
      <ul className={classes.navigation__items}>
        <li className={classes.navigation__item}>
          <NavLink className={classes.navigation__link} to="/">
            <span className={classes.link__name}>Home</span>
            <span className={classes.navigation__icon}>
              <i className="fas fa-home"></i>
            </span>
          </NavLink>
        </li>
        <li className={classes.navigation__item}>
          <NavLink className={classes.navigation__link} to="/notes">
            <span className={classes.link__name}>Notes</span>
            <span className={classes.navigation__icon}>
              <i className="fas fa-sticky-note"></i>
            </span>
          </NavLink>
        </li>
        {isAuth ? (
          <li className={classes.navigation__item}>
            <NavLink className={classes.navigation__link} onClick={logout}>
              <span className={classes.link__name}>Logout</span>
              <span className={classes.navigation__icon}>
                <i className="fas fa-sign-out-alt"></i>
              </span>
            </NavLink>
          </li>
        ) : (
          <li className={classes.navigation__item}>
            <NavLink className={classes.navigation__link} to="/login">
              <span className={classes.link__name}>Login</span>
              <span className={classes.navigation__icon}>
                <i className="fas fa-sign-in-alt"></i>
              </span>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
