import React from "react";
import NoteItem from "./NoteItem";

const NotesItems = ({ notes, setNotes, setNotesSettings }) => {
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
