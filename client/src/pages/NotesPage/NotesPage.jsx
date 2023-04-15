import React from "react";
import NotesItems from "../../components/NotesItems";
import classes from "./NotesPage.module.css";
import NoteForm from "../../components/NoteForm";
import NotesControlPanel from "../../components/NotesControlPanel";
import ModalWindow from "../../components/UI/modalWindow/ModalWindow";

const NotesPage = () => {
  return (
    <div className={classes.notes__container}>
      <NotesControlPanel />
      <ModalWindow>
        <NoteForm />
      </ModalWindow>
      <div className={classes.notes__items}>
        <NotesItems />
      </div>
    </div>
  );
};

export default NotesPage;
