import React from "react";
import classes from "../styles/SelectButtons.module.css";
import SearchNoteButton from "./SearchNoteButton";
import AddNoteButton from "./AddNoteButton";

const NotesButtons = ({ notesSettings, setNotesSettings }) => {
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

export default NotesButtons;
