import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/ProjectList.module.css";
import FrindsAppImage from "../assets/images/chernetskyi8704.github.io_Friends-App_.png";
import TenziesGameImage from "../assets/images/chernetskyi8704.github.io_Tenzies-App_.png";
import MemoryPairGameImage from "../assets/images/chernetskyi8704.github.io_Memory-pair-game_.png";
import FroggerGameImage from "../assets/images/chernetskyi8704.github.io_Frogger-OOP_.png";
import InteractiveSideMenuImage from "../assets/images/chernetskyi8704.github.io_Interactive-Side-menu_.png";

const ProjectList = () => {
  const [projects, setProjects] = React.useState([
    {
      name: "Friends App",
      link: "https://chernetskyi8704.github.io/Friends-App/",
      image: `${FrindsAppImage}`,
      alt: "Friends App",
    },
    {
      name: "Tenzies Game",
      link: "https://chernetskyi8704.github.io/Tenzies-App/",
      image: `${TenziesGameImage}`,
      alt: "Tenzies Game",
    },
    {
      name: "Memory Pair Game",
      link: "https://chernetskyi8704.github.io/Memory-pair-game/",
      image: `${MemoryPairGameImage}`,
      alt: "Memory Pair Game",
    },
    {
      name: "Frogger Game",
      link: "https://chernetskyi8704.github.io/Frogger-OOP/",
      image: `${FroggerGameImage}`,
      alt: "Frogger Game",
    },
    {
      name: "Interactive Side Menu",
      link: "https://chernetskyi8704.github.io/Interactive-Side-menu/",
      image: `${InteractiveSideMenuImage}`,
      alt: "Interactive Side Menu",
    },
  ]);

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

  return <div className={classes.projects__container}>{projectsList}</div>;
};

export default ProjectList;
