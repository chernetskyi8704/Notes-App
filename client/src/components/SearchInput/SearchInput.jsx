import React from "react";
import MyInput from "../UI/input/MyInput";
import classes from "./SearchInput.module.css";

const SearchInput = ({ searchValue, setSearchValue }) => {
  const handleSetSearchValue = e => setSearchValue(e.target.value);

  return (
    <MyInput
      id={classes.searchInput}
      placeholder="Search..."
      value={searchValue}
      onChange={handleSetSearchValue}
      onClick={e => e.stopPropagation()}
    />
  );
};

export default SearchInput;
