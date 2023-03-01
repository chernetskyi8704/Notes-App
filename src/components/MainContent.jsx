import React from "react";
import AppRouter from "./routes/AppRouter";
import classes from "../styles/MainContent.module.css";

const MainContent = () => {
  return (
    <main className={classes.mainContent}>
      <AppRouter />
    </main>
  );
};

export default MainContent;
