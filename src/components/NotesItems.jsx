import React from "react";
import NotesItem from "./NotesItem";

const NotesItems = ({ notes }) => {
  return notes.map(note => (
    <NotesItem
      key={note.id}
      title={note.title}
      body={note.description}
      bodyColour={note.color}
      currentData={note.data}
    />
  ));
};

export default NotesItems;
