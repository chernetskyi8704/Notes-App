import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/ProjectList.module.css";
import PostService from "../API/PostService";
import Loader from "./UI/loader/Loader";

const ProjectList = () => {
  const [projects, setProjects] = React.useState([]);
  const [isPostLoading, setIsPostLoading] = React.useState(false);

  const getProjects = async () => {
    try {
      setIsPostLoading(true);
      const projects = await PostService.getProjects();
      setProjects(projects);
      setIsPostLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getProjects();
  }, []);

  const projectsList = projects.map(project => {
    return (
      <NavLink
        className={classes.project_item}
        key={project.name}
        to={project.link}
        target="_blank"
      >
        <img
          src={project.image}
          className={classes.project_image}
          alt={project.alt}
        />
      </NavLink>
    );
  });

  return (
    <div className={classes.projects__container}>
      {isPostLoading ? <Loader /> : projectsList}
    </div>
  );
};

export default ProjectList;
