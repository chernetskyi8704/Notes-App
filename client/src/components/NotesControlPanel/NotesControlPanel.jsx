import React from "react";
import classes from "./NotesControlPanel.module.css";
import AddNoteButton from "../AddNoteButton/AddNoteButton";

const NotesControlPanel = () => {
  return (
    <div className={classes.select__buttons}>
      <AddNoteButton />
    </div>
  );
};

export default NotesControlPanel;
