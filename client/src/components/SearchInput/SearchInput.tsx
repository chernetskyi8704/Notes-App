import { ChangeEvent } from "react";
import MyInput from "../UI/input/MyInput";
import classes from "./SearchInput.module.css";

interface SearchInputProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchInput = ({ searchValue, setSearchValue }: SearchInputProps) => {
  const handleSetSearchValue = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
  };

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
