import React from "react";
import NotesItem from "./NotesItem";

const NotesItems = ({ notes, setNotes, setIsEdit, setcurrentNote }) => {
  return notes.map(note => (
    <NotesItem
      key={note.id}
      title={note.title}
      body={note.description}
      bodyColour={note.color}
      currentData={note.date}
      setNotes={setNotes}
      notes={notes}
      id={note.id}
      setIsEdit={setIsEdit}
      setcurrentNote={setcurrentNote}
    />
  ));
};

export default NotesItems;
