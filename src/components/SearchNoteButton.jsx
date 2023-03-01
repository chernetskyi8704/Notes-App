import React from "react";
import MyInput from "./UI/input/MyInput";
import classes from "../styles/SearchNoteButton.module.css";

const SearchNoteButton = ({ setNotesSettings, notes }) => {
  const [isSearch, setIsSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    const searchNotes = () => {
      if (searchValue === "") return notes;
      return JSON.parse(localStorage.getItem("notes")).filter(note => {
        return note.title.toLowerCase().includes(searchValue.toLowerCase());
      });
    };

    setNotesSettings(prev => ({ ...prev, searchNotes: searchNotes() }));
  }, [searchValue, notes]);

  return (
    <>
      <button
        className={classes.search__button}
        onClick={() => setIsSearch(!isSearch)}
      >
        <i className="fas fa-search"></i>
      </button>
      {isSearch && (
        <div className={classes.search__input}>
          <MyInput
            placeholder="Search..."
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          ></MyInput>
        </div>
      )}
    </>
  );
};

export default SearchNoteButton;
