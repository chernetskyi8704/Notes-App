import React from "react";
import AddNoteButton from "../AddNoteButton/AddNoteButton";
import SearchInput from "../SearchInput/SearchInput";
import classes from "./NotesControlPanel.module.css";

const NotesControlPanel = ({ searchValue, setSearchValue }) => {
  return (
    <div className={classes.notesControlPanes}>
      <AddNoteButton />
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
};

export default NotesControlPanel;
