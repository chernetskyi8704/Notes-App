import React from "react";
import classes from "./Note.module.css";

const Note = () => {
  const openedNote = JSON.parse(localStorage.getItem("openedNote"));
  return (
    <div className={classes.note__page}>
      <div
        className={classes.note__item}
        style={{
          backgroundColor: `${openedNote[0].color}`,
        }}
      >
        <div className={classes.note__info}>
          <h3 className={classes.note__title}>{openedNote[0].title}</h3>
          <p className={classes.note__body}>{openedNote[0].description}</p>
        </div>
        <strong className={classes.note__data}>{openedNote[0].date}</strong>
      </div>
    </div>
  );
};

export default Note;
