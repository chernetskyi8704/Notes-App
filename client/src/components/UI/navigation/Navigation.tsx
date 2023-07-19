import { useAppDispatch } from "../../../hooks/redux";
import { logOut } from "../../../store/features/auth/authSlice";
import { setIsModalWindowWithSettingsOpen } from "../../../store/features/accountSettings/accountSettingsSlice";
import { INavigatoionItem } from "../../../types/INavigationItem";

import classes from "./Navigation.module.css";
import ListItems from "../../List/ListItems";
import NavigationItem from "../../NavigationItem/NavigationItem";

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
      <ListItems
        items={navigationItems}
        listItemsClassName={classes.navigation__items}
        renderItems={item => <NavigationItem item={item} key={item.link} />}
      />
    </nav>
  );
};

export default Navigation;
