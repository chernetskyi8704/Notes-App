import React from "react";
import MyInput from "./UI/input/MyInput";
import classes from "../styles/SearchNoteButton.module.css";

const SearchNoteButton = () => {
  const [isSearch, setIsSearch] = React.useState(false);
  return (
    <>
      <button
        className={classes.search__button}
        onClick={() => setIsSearch(prevIsSearch => !prevIsSearch)}
      >
        <i className="fas fa-search"></i>
      </button>
      {isSearch && (
        <div
          className={classes.search__input}
          onClick={() => setIsSearch(!isSearch)}
        >
          <MyInput></MyInput>
        </div>
      )}
    </>
  );
};

export default SearchNoteButton;
