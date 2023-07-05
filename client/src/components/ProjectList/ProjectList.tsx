import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchProjects } from "../../store/features/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setIsDataFetched, selectProjectsState } from "../../store/features/projects/projectsSlice";

import classes from "./ProjectList.module.css";
import Loader from "../UI/loader/Loader";

const ProjectList = () => {
  const dispatch = useAppDispatch();
  const { projects, isDataFetched, isLoading } = useAppSelector(selectProjectsState);

  let projectsList;

  useEffect(() => {
    if (!isDataFetched) {
      dispatch(fetchProjects());
      dispatch(setIsDataFetched(true));
    }
  }, []);

  if (!isLoading) {
    projectsList = projects?.map(project => {
      return (
        <li className={classes.project_item} key={project.name}>
          <NavLink to={project.link} target="_blank">
            <img src={project.image} className={classes.project_image} />
          </NavLink>
        </li>
      );
    });
  }

  return (
    <ul className={classes.projects__container}>
      {isLoading ? <Loader /> : projectsList}
    </ul>
  );
};

export default ProjectList;
