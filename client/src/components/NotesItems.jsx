import React from "react";
import NoteItem from "./NoteItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/animations/NotesItemsAnimations.css";
import { useSelector } from "react-redux";
import { allNotesSettings } from "../store/features/notes/notesSlice";

const NotesItems = () => {
  const { foundNotes } = useSelector(allNotesSettings);

  return (
    <TransitionGroup component={null}>
      {foundNotes.map(note => (
        <CSSTransition timeout={500} key={note.id} classNames="note">
          <NoteItem
            title={note.title}
            body={note.description}
            bodyColour={note.color}
            currentData={note.date}
            id={note.id}
          />
        </CSSTransition>
      ))}
      ;
    </TransitionGroup>
  );
};

export default NotesItems;
