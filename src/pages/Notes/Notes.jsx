import React from "react";
import NotesItems from "../../components/NotesItems";
import classes from "./Notes.module.css";
import NoteForm from "../../components/NoteForm";
import NotesControlPanel from "../../components/NotesControlPanel";
import ModalWindow from "../../components/UI/modalWindow/ModalWindow";
import { useSelector } from "react-redux";
import { allNotesSettings } from "../../store/features/notes/notesSlice";

const Notes = () => {
  const { foundNotes } = useSelector(allNotesSettings);

  return (
    <div className={classes.notes__container}>
      <NotesControlPanel />
      <ModalWindow>
        <NoteForm />
      </ModalWindow>
      <div className={classes.notes__items}>
        {!foundNotes.length ? (
          <div className={classes.notes__empty}>
            No notes were created yet...😢
          </div>
        ) : (
          <NotesItems />
        )}
      </div>
    </div>
  );
};

export default Notes;
