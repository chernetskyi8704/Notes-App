import React from "react";
import classes from "../styles/NotesControlPanel.module.css";
import SearchNoteButton from "./SearchNoteButton";
import AddNoteButton from "./AddNoteButton";

const NotesControlPanel = ({ notesSettings, setNotesSettings, notes }) => {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className={classes.select__buttons}>
      <SearchNoteButton
        setNotesSettings={setNotesSettings}
        notes={notes}
        notesSettings={notesSettings}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <AddNoteButton
        notesSettings={notesSettings}
        setNotesSettings={setNotesSettings}
        setSearchValue={setSearchValue}
      />
    </div>
  );
};

export default NotesControlPanel;
