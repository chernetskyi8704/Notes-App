import React from "react";
import NotesItems from "../components/NotesItems";
import classes from "../styles/NotesItem.module.css";
import NotesForm from "../components/NotesForm";

const Notes = () => {
  return (
    <div className={classes.notes__container}>
      <div className={classes.notes__buttons}>
        <button className={classes.notes__button}></button>
        <div className={classes.notes__colours}>
          <button className={classes.colours__button}></button>
          <button className={classes.colours__button}></button>
          <button className={classes.colours__button}></button>
          <button className={classes.colours__button}></button>
          <button className={classes.colours__button}></button>
        </div>
      </div>
      <div className={classes.form}>
        <NotesForm />
      </div>
      <div className={classes.notes__items}>
        <NotesItems />
      </div>
    </div>
  );
};

export default Notes;
