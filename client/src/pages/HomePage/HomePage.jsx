import React from "react";
import ProjectList from "../../components/ProjectList/ProjectList";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.projects__container}>
      <h1 className={classes.projects__tittle}>My projects</h1>
      <ProjectList />
    </div>
  );
};

export default HomePage;
