import NoteForm from "../../components/NoteForm/NoteForm";
import NotesControlPanel from "../../components/NotesControlPanel/NotesControlPanel";
import NotesItems from "../../components/NotesItems/NotesItems";
import ModalWindow from "../../components/UI/modalWindow/ModalWindow";
import { allNotesSettings } from "../../store/features/notes/notesSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const NotesPage = () => {
  const notesSettings = useSelector(allNotesSettings);
  const [modal, isModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
      <NotesItems searchValue={searchValue} />
    </>
  );
};

export default NotesPage;
