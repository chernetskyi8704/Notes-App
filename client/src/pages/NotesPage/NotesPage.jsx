import React from "react";
import NotesItems from "../../components/NotesItems";
import classes from "./NotesPage.module.css";
import NoteForm from "../../components/NoteForm";
import NotesControlPanel from "../../components/NotesControlPanel";
import ModalWindow from "../../components/UI/modalWindow/ModalWindow";
import { useSelector } from "react-redux";
import { allNotesSettings } from "../../store/features/notes/notesSlice";

const NotesPage = () => {
  return (
    <div className={classes.notes__container}>
      <NotesControlPanel />
      <ModalWindow>
        <NoteForm />
      </ModalWindow>
      <NotesItems />
    </div>
  );
};

export default NotesPage;
