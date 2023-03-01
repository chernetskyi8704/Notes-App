import React from "react";
import MyInput from "./UI/input/MyInput";
import classes from "../styles/SearchNoteButton.module.css";

const SearchNoteButton = ({ notesSettings, setNotesSettings, notes }) => {
  React.useEffect(() => {
    const searchNotes = () => {
      if (notesSettings.searchValue === "") return notes;
      return JSON.parse(localStorage.getItem("notes")).filter(note => {
        return note.title
          .toLowerCase()
          .includes(notesSettings.searchValue.toLowerCase());
      });
    };

    setNotesSettings(prev => ({ ...prev, searchNotes: searchNotes() }));
  }, [notesSettings.searchValue, notes]);

  const toggleSearchButton = e => {
    e.stopPropagation();
    setNotesSettings(prev => ({
      ...prev,
      isSearch: !prev.isSearch,
      isAddNew: false,
    }));
  };

  return (
    <>
      <button className={classes.search__button} onClick={toggleSearchButton}>
        <i className="fas fa-search"></i>
      </button>
      {notesSettings.isSearch && (
        <div className={classes.search__input}>
          <MyInput
            placeholder="Search..."
            value={notesSettings.searchValue}
            onChange={e => {
              setNotesSettings(prev => ({
                ...prev,
                searchValue: e.target.value,
              }));
            }}
            onClick={e => e.stopPropagation()}
          ></MyInput>
        </div>
      )}
    </>
  );
};

export default SearchNoteButton;
