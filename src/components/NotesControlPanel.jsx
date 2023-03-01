import React from "react";
import classes from "../styles/NotesControlPanel.module.css";
import SearchNoteButton from "./SearchNoteButton";
import AddNoteButton from "./AddNoteButton";

const NotesControlPanel = ({ notesSettings, setNotesSettings }) => {
  return (
    <div className={classes.select__buttons}>
      <SearchNoteButton />
      <AddNoteButton
        notesSettings={notesSettings}
        setNotesSettings={setNotesSettings}
      />
    </div>
  );
};

export default NotesControlPanel;
