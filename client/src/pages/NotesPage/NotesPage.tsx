import { allNotesSettings } from "../../store/features/notes/notesSlice";
import { useAppSelector } from "../../hooks/redux";
import { useState, useEffect } from "react";
import { useGetUsersNotesQuery } from "../../store/features/notes/notesApiSlice";
import { allAuthSettings } from "../../store/features/auth/authSlice";

import classes from "./NotesPage.module.css";
import NoteForm from "../../components/NoteForm/NoteForm";
import NotesControlPanel from "../../components/NotesControlPanel/NotesControlPanel";
import NotesItems from "../../components/NotesItems/NotesItems";
import ModalWindow from "../../components/UI/modalWindow/ModalWindow";
import Pagination from "../../components/UI/pagination/Pagination";

const NotesPage = () => {
  const { isAddNew, isEdit } = useAppSelector(allNotesSettings);
  const { userId } = useAppSelector(allAuthSettings);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [limit, _setLimit] = useState<number>(12);
  const [modal, isModal] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

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

  useEffect(() => {
    isAddNew || isEdit ? isModal(true) : isModal(false);
  }, [isAddNew, isEdit]);

  return (
    <div className={classes.notesPageContainer}>
      <NotesControlPanel
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ModalWindow visible={modal} setVisible={isModal}>
        <NoteForm />
      </ModalWindow>
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
};

export default NotesPage;
