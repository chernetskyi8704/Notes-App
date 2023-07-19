import { useAppSelector } from "../../hooks/redux";
import { useState, memo } from "react";
import { useGetUsersNotesQuery } from "../../store/features/notes/notesApiSlice";
import { allAuthSettings } from "../../store/features/auth/authSlice";

import classes from "./NotesPage.module.css";
import NoteForm from "../../components/NoteForm/NoteForm";
import NotesControlPanel from "../../components/NotesControlPanel/NotesControlPanel";
import Pagination from "../../components/UI/pagination/Pagination";
import ListItems from "../../components/List/ListItems";
import NoteItem from "../../components/NoteItem/NoteItem";

const NotesPage = memo(() => {
  const NOTES_ERROR_LOADING_MESSAGE = <p className={classes.notesErrorMessage}>Error loading notes!</p>;
  const NO_NOTES_FOUND_MESSAGE = <p className={classes.notesErrorMessage}>No notes were found!</p>;

  const { userId } = useAppSelector(allAuthSettings);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [limit, _setLimit] = useState<number>(12);
  const [searchValue, setSearchValue] = useState<string>("");

  const { data, isSuccess, isError } = useGetUsersNotesQuery({
    userId,
    page: currentPageNumber,
    limit,
    search: searchValue,
  });

  const userNotes = data?.userNotes || [];
  const totalPagesCount = data?.totalPagesCount || 0;

  const handleSetCurrentPage = (value: number) => {
    setCurrentPageNumber(value);
  };

  const notesToRender =
    userNotes.length === 0 ?
      NO_NOTES_FOUND_MESSAGE
    :
      <ListItems
        items={userNotes}
        listItemsClassName={classes.notesItems}
        renderItems={note => <NoteItem note={note} key={note._id} />}
      />;

  return (
    <div className={classes.notesPageContainer}>
      {isError && NOTES_ERROR_LOADING_MESSAGE}
      {isSuccess && (
        <>
          <NotesControlPanel
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <NoteForm />
          {notesToRender}
          <Pagination
            currentPageNumber={currentPageNumber}
            setCurrentPageNumber={handleSetCurrentPage}
            totalPagesCount={totalPagesCount}
          />
        </>
      )}
    </div>
  );
});

export default NotesPage;
