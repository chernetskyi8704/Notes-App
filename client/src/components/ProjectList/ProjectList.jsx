import {useEffect} from "react";
import { NavLink } from "react-router-dom";
import classes from "./ProjectList.module.css";
import Loader from "../UI/loader/Loader";
import { getProjectsStore } from "../../store/features/projects/projectsSlice";
import { useDispatch, useSelector } from "react-redux";
import { setIsDataFetched, selectProjectsState } from "../../store/features/projects/projectsSlice";

const ProjectList = () => {
  const dispatch = useDispatch();
  const { projects, isDataFetched, isLoading } = useSelector(selectProjectsState);

  let projectsList;

  useEffect(() => {
    if (!isDataFetched) {
      dispatch(getProjectsStore());
      dispatch(setIsDataFetched(true));
    }
  }, []);

  if (!isLoading) {
    projectsList = projects?.map(project => {
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
  }

  return (
    <div className={classes.projects__container}>
      {isLoading ? <Loader /> : projectsList}
    </div>
  );
};

export default ProjectList;
