import React from "react";
import Navigation from "../UI/navigation/Navigation";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Navigation />
    </header>
  );
};

export default Header;
