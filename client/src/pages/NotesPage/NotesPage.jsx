import NoteForm from "../../components/NoteForm/NoteForm";
import NotesControlPanel from "../../components/NotesControlPanel/NotesControlPanel";
import NotesItems from "../../components/NotesItems/NotesItems";
import ModalWindow from "../../components/UI/modalWindow/ModalWindow";
import classes from "./NotesPage.module.css";
import { allNotesSettings } from "../../store/features/notes/notesSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const NotesPage = () => {
  const notesSettings = useSelector(allNotesSettings);
  const [modal, isModal] = useState(false);

  useEffect(() => {
    notesSettings.isAddNew || notesSettings.isEdit
      ? isModal(true)
      : isModal(false);
  }, [notesSettings.isAddNew, notesSettings.isEdit]);

  return (
    <div className={classes.notes__container}>
      <NotesControlPanel />
      <ModalWindow visible={modal} setVisible={isModal}>
        <NoteForm />
      </ModalWindow>
      <div className={classes.notes__items}>
        <NotesItems />
      </div>
    </div>
  );
};

export default NotesPage;
