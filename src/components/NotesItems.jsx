import React from "react";
import NotesItem from "./NotesItem";

const NotesItems = ({ notes, setNotes }) => {
  return notes.map(note => (
    <NotesItem
      key={note.id}
      title={note.title}
      body={note.description}
      bodyColour={note.color}
      currentData={note.data}
      setNotes={setNotes}
      notes={notes}
      id={note.id}
    />
  ));
};

export default NotesItems;
