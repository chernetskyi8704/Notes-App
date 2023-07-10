import { useAppSelector } from "../../hooks/redux";
import { useState, memo } from "react";
import { useGetUsersNotesQuery } from "../../store/features/notes/notesApiSlice";
import { allAuthSettings } from "../../store/features/auth/authSlice";

import classes from "./NotesPage.module.css";
import NoteForm from "../../components/NoteForm/NoteForm";
import NotesControlPanel from "../../components/NotesControlPanel/NotesControlPanel";
import NotesItems from "../../components/NotesItems/NotesItems";
import Pagination from "../../components/UI/pagination/Pagination";

const NotesPage = memo(() => {
  const { userId } = useAppSelector(allAuthSettings);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [limit, _setLimit] = useState<number>(12);
  const [searchValue, setSearchValue] = useState<string>("");
  console.log("Notes Page")
  const { data, isLoading, isSuccess, isError } = useGetUsersNotesQuery({
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

  return (
    <div className={classes.notesPageContainer}>
      <NotesControlPanel
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
        <NoteForm />
      <NotesItems
        userNotes={userNotes}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
      />
      <Pagination
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={handleSetCurrentPage}
        totalPagesCount={totalPagesCount}
      />
    </div>
  );
});

export default NotesPage;
