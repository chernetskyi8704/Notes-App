import React from "react";
import AppRouter from "../routes/AppRouter";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.mainContent}>
      <AppRouter />
    </main>
  );
};

export default Main;
