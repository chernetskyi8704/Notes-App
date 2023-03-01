import React from "react";
import classes from "../styles/NotesControlPanel.module.css";
import SearchNoteButton from "./SearchNoteButton";
import AddNoteButton from "./AddNoteButton";

const NotesControlPanel = ({ notesSettings, setNotesSettings, notes }) => {
  return (
    <div className={classes.select__buttons}>
      <SearchNoteButton
        setNotesSettings={setNotesSettings}
        notes={notes}
        notesSettings={notesSettings}
      />
      <AddNoteButton
        notesSettings={notesSettings}
        setNotesSettings={setNotesSettings}
      />
    </div>
  );
};

export default NotesControlPanel;
