import React from "react";
import ProjectList from "../components/ProjectList";
import classes from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={classes.projects__container}>
      <h1 className={classes.projects__tittle}>My projects</h1>
      <ProjectList />
    </div>
  );
};

export default Home;
