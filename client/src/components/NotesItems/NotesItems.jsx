import NoteItem from "../NoteItem/NoteItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../styles/animations/NotesItemsAnimations.css";
import { useSelector } from "react-redux";
import { useGetUsersNotesQuery } from "../../store/features/notes/notesApiSlice";
import Loader from "../UI/loader/Loader";
import classes from "./NotesItems.module.css"

const NotesItems = ({ searchValue }) => {
  const NO_NOTES_FOUND_MESSAGE = <p className={classes.notes_empty}>No notes were found!</p>;
  const NOTES_ERROR_LOADING_MESSAGE = <p className={classes.notes_empty}>Error loading notes!</p>;
  const userId = useSelector(state => state.auth.userId);
  const { data: notes, isLoading, isSuccess, isError } = useGetUsersNotesQuery(userId);

  let notesToDisplay;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return NOTES_ERROR_LOADING_MESSAGE;
  }

  if (isSuccess) {
    const currentNoteArray = searchValue === "" ? notes : notes.filter(note => note.title.toLowerCase().includes(searchValue.toLowerCase()));

    const notesToRender = currentNoteArray?.map(note => (
     <CSSTransition timeout={500} key={note._id} classNames="note">
       <NoteItem note={note} />
     </CSSTransition>
   ));

   notesToDisplay = currentNoteArray.length === 0 
   ? 
   NO_NOTES_FOUND_MESSAGE 
   : 
   <TransitionGroup component={null}>{notesToRender}</TransitionGroup>;
 }

  return <div className={classes.notes__items}>{notesToDisplay}</div>;
};

export default NotesItems;
