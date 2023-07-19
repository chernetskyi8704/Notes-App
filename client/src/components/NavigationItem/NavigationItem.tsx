import { NavLink } from "react-router-dom";
import { INavigatoionItem } from "../../types/INavigationItem";

import classes from "./NavigationItem.module.css";

interface NavigationItemProps {
  item: INavigatoionItem;
}

const NavigationItem = ({ item }: NavigationItemProps) => {
  return (
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
  );
};

export default NavigationItem;
