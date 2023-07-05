import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { logOut } from "../../../store/features/auth/authSlice";
import { setIsModalWindowWithSettingsOpen } from "../../../store/features/accountSettings/accountSettingsSlice";

interface INavigatoionItem {
  name: string;
  link: string;
  iconClass: string;
  onClick?: () => void;
}

const Navigation = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleOpenModalWindow = () => {
    dispatch(setIsModalWindowWithSettingsOpen(true));
  };

  const navigationItems: INavigatoionItem[] = [
    {
      name: "Home",
      link: "/home",
      iconClass: "fas fa-home",
    },
    {
      name: "Notes",
      link: "/notes",
      iconClass: "fas fa-sticky-note",
    },
    {
      name: "Settings",
      link: "#",
      iconClass: "fas fa-cog",
      onClick: handleOpenModalWindow,
    },
    {
      name: "Logout",
      link: "/login",
      iconClass: "fas fa-sign-out-alt",
      onClick: handleLogout,
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
