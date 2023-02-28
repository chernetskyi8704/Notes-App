import React from "react";
import NoteItem from "./NoteItem";
import classes from "../styles/Notes.module.css";

const NotesItems = ({ notes, setNotes, setNotesSettings }) => {
  if (!notes.length) {
    return (
      <div className={classes.notes__empty}>No notes were created yet...😢</div>
    );
  }
  return notes.map(note => (
    <NoteItem
      key={note.id}
      title={note.title}
      body={note.description}
      bodyColour={note.color}
      currentData={note.date}
      setNotes={setNotes}
      notes={notes}
      id={note.id}
      setNotesSettings={setNotesSettings}
    />
  ));
};

export default NotesItems;
