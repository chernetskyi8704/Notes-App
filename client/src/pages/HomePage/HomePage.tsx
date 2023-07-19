import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectProjectsState, fetchProjects } from "../../store/features/projects/projectsSlice";

import ProjectItem from "../../components/ProjectItem/ProjectItem";
import ListItems from "../../components/List/ListItems";
import Loader from "../../components/UI/loader/Loader";
import classes from "./HomePage.module.css";

const HomePage = memo(() => {
  const dispatch = useAppDispatch();
  const { projects, isDataFetched, isLoading } = useAppSelector(selectProjectsState);

  useEffect(() => {
    if (!isDataFetched) {
      dispatch(fetchProjects());
    }
  }, []);

  return (
    <div className={classes.projects__container}>
      <h1 className={classes.projects__tittle}>My projects</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <ListItems
          listItemsClassName={classes.projects__items}
          items={projects}
          renderItems={project => <ProjectItem projectItem={project} key={project.name}/>}
        />
      )}
    </div>
  );
});

export default HomePage;
