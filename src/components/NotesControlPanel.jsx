import React from "react";
import classes from "../styles/NotesControlPanel.module.css";
import AddNoteButton from "./AddNoteButton";

const NotesControlPanel = ({ notesSettings, setNotesSettings, notes }) => {
  return (
    <div className={classes.select__buttons}>
      <AddNoteButton
        setNotesSettings={setNotesSettings}
        notes={notes}
        notesSettings={notesSettings}
      />
    </div>
  );
};

export default NotesControlPanel;
