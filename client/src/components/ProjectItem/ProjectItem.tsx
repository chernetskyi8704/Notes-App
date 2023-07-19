import { NavLink } from "react-router-dom";
import { IProject } from "src/types/IProject";

import classes from "./ProjectItem.module.css";

interface ProjectItemProps {
  projectItem: IProject;
}

const ProjectItem = ({ projectItem }: ProjectItemProps) => {
  return (
    <li className={classes.project_item} key={projectItem.name}>
      <NavLink to={projectItem.link} target="_blank">
        <img src={projectItem.image} className={classes.project_image} />
      </NavLink>
    </li>
  );
};

export default ProjectItem;
