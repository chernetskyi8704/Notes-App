import React from "react";
import NoteItem from "./NoteItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/animations/NotesItemsAnimations.css";

const NotesItems = ({ notes, setNotes, setNotesSettings, notesSettings }) => {
  return (
    <TransitionGroup component={null}>
      {notesSettings.searchNotes.map(note => (
        <CSSTransition timeout={500} key={note.id} classNames="note">
          <NoteItem
            title={note.title}
            body={note.description}
            bodyColour={note.color}
            currentData={note.date}
            setNotes={setNotes}
            notes={notes}
            id={note.id}
            setNotesSettings={setNotesSettings}
          />
        </CSSTransition>
      ))};
    </TransitionGroup>
  );
};

export default NotesItems;
