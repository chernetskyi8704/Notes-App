import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Navigation = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
  };

  const navigationItems = [
    {
      name: "Home",
      link: "/",
      iconClass: "fas fa-home",
    },
    {
      name: "Notes",
      link: "/notes",
      iconClass: "fas fa-sticky-note",
    },
    {
      name: isAuth ? "Logout" : "Login",
      link: isAuth ? "#" : "/login",
      iconClass: isAuth ? "fas fa-sign-out-alt" : "fas fa-sign-in-alt",
      onClick: isAuth ? logout : undefined,
    },
  ];

  return (
    <nav className={classes.navigation}>
      <ul className={classes.navigation__items}>
        {navigationItems.map(item => (
          <li className={classes.navigation__item} key={item.link}>
            <NavLink
              className={classes.navigation__link}
              to={item.link}
              onClick={item.onClick}
            >
              <span className={classes.link__name}>{item.name}</span>
              <span className={classes.navigation__icon}>
                <i className={item.iconClass}></i>
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
