import AddNoteButton from "../AddNoteButton/AddNoteButton";
import SearchInput from "../SearchInput/SearchInput";
import classes from "./NotesControlPanel.module.css";

interface NotesControlPanesProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const NotesControlPanel = ({ searchValue, setSearchValue }: NotesControlPanesProps) => {
  return (
    <div className={classes.notesControlPanes}>
      <AddNoteButton />
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
};

export default NotesControlPanel;
