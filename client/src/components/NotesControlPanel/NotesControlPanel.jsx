import React from "react";
import AddNoteButton from "../AddNoteButton/AddNoteButton";

const NotesControlPanel = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <AddNoteButton
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </>
  );
};

export default NotesControlPanel;
