import { INote } from "../../types/INote";
import NoteItem from "../NoteItem/NoteItem";
import Loader from "../UI/loader/Loader";
import classes from "./NotesItems.module.css";

interface NotesItemsProps {
  userNotes: INote[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean
}

const NotesItems = ({ userNotes, isLoading, isError, isSuccess }: NotesItemsProps) => {
  const NO_NOTES_FOUND_MESSAGE = <p className={classes.notes_empty}>No notes were found!</p>;
  const NOTES_ERROR_LOADING_MESSAGE = <p className={classes.notes_empty}>Error loading notes!</p>;

  const notesToRender =
    userNotes.length === 0
      ? NO_NOTES_FOUND_MESSAGE
      : userNotes?.map(note => <NoteItem note={note} key={note._id} />);

  return (
    <div className={classes.notes__items}>
      {isLoading && <Loader />}
      {isError && NOTES_ERROR_LOADING_MESSAGE}
      {isSuccess && notesToRender}
    </div>
  );
};

export default NotesItems;
