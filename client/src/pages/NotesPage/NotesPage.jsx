import NoteForm from "../../components/NoteForm";
import NotesControlPanel from "../../components/NotesControlPanel";
import NotesItems from "../../components/NotesItems";
import ModalWindow from "../../components/UI/modalWindow/ModalWindow";
import classes from "./NotesPage.module.css";
import {
  allNotesSettings,
  setAddNew,
  setEdit,
} from "../../store/features/notes/notesSlice";
import { useSelector } from "react-redux";

const NotesPage = () => {
  const notesSettings = useSelector(allNotesSettings);
  const setShowNoteForm = () => {
    if (notesSettings.isAddNew) {
      return setAddNew;
    } else if (notesSettings.isEdit) {
      return setEdit;
    }
  };
  return (
    <div className={classes.notes__container}>
      <NotesControlPanel />
      <ModalWindow
        visible={notesSettings.isAddNew || notesSettings.isEdit}
        setVisible={setShowNoteForm}
      >
        <NoteForm />
      </ModalWindow>
      <div className={classes.notes__items}>
        <NotesItems />
      </div>
    </div>
  );
};

export default NotesPage;
