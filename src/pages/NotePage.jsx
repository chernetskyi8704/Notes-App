import React from "react";
import classes from "../styles/NoteItem.module.css";

const NotePage = () => {
  const openedNote = JSON.parse(localStorage.getItem("openedNote"));
  return (
    <div className={classes.note__page}>
      <div
        className={classes.note__item}
        style={{
          backgroundColor: `${openedNote[0].color}`,
        }}
      >
        <h3 className={classes.note__title}>{openedNote[0].title}</h3>
        <p className={classes.note__body}>{openedNote[0].description}</p>
        <small>{openedNote[0].date}</small>
      </div>
    </div>
  );
};

export default NotePage;
