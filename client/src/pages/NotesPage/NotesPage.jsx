import NoteForm from "../../components/NoteForm/NoteForm";
import NotesControlPanel from "../../components/NotesControlPanel/NotesControlPanel";
import NotesItems from "../../components/NotesItems/NotesItems";
import ModalWindow from "../../components/UI/modalWindow/ModalWindow";
import { allNotesSettings } from "../../store/features/notes/notesSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useGetUsersNotesQuery } from "../../store/features/notes/notesApiSlice";
import Pagination from "../../components/UI/pagination/Pagination";

const NotesPage = () => {
  const notesSettings = useSelector(allNotesSettings);
  const userId = useSelector(state => state.auth.userId);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [limit, setLimit] = useState(12);
  const [modal, isModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
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

  useEffect(() => {
    notesSettings.isAddNew || notesSettings.isEdit
      ? isModal(true)
      : isModal(false);
  }, [notesSettings.isAddNew, notesSettings.isEdit]);

  return (
    <>
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
    </>
  );
};

export default NotesPage;
