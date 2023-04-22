import NoteItem from "../NoteItem/NoteItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../styles/animations/NotesItemsAnimations.css";
import { useSelector } from "react-redux";
import { useGetUsersNotesQuery } from "../../store/features/notes/notesApiSlice";
import Loader from "../UI/loader/Loader";
import classes from "./NotesItems.module.css";
import { useState } from "react";
import Pagination from "../UI/pagination/Pagination";

const NotesItems = ({ searchValue }) => {
  const NO_NOTES_FOUND_MESSAGE = <p className={classes.notes_empty}>No notes were found!</p>;
  const NOTES_ERROR_LOADING_MESSAGE = <p className={classes.notes_empty}>Error loading notes!</p>;

  const userId = useSelector(state => state.auth.userId);
  const [limit, setLimit] = useState(10);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  
  const { data, isLoading, isSuccess, isError } = useGetUsersNotesQuery({
    userId,
    page: currentPageNumber,
    limit,
    search: searchValue,
  });
  const userNotes = data?.userNotes || [];
  const totalPagesCount = data?.totalPagesCount || 0;
  
  const handleSetCurrentPage = value => {
    setCurrentPageNumber(value);
  };

  const notesToRender =   userNotes.length === 0 
  ? NO_NOTES_FOUND_MESSAGE
  : <TransitionGroup component={null}>{userNotes?.map(note => (
    <CSSTransition timeout={500} key={note._id} classNames="note">
      <NoteItem note={note} />
    </CSSTransition>
  ))}</TransitionGroup>;

  return (
    <div className={classes.notes__items__container}>
      {isLoading && <Loader />}
      {isError && NOTES_ERROR_LOADING_MESSAGE}
      {isSuccess && userNotes && (
        <>
          <div className={classes.notes__items}>{notesToRender}</div>
          <Pagination
            currentPageNumber={currentPageNumber}
            setCurrentPageNumber={handleSetCurrentPage}
            totalPagesCount={totalPagesCount}
          />
        </>
      )}
    </div>
  );
};

export default NotesItems;
