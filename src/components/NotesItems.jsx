import React from "react";
import NotesItem from "./NotesItem";

const NotesItems = props => {
  return props.notes.map(note => (
    <NotesItem
      key={note.id}
      title={note.title}
      body={note.description}
      bodyColour={note.color}
      currentData={note.date}
      setNotes={props.setNotes}
      notes={props.notes}
      id={note.id}
      setIsEdit={props.setIsEdit}
      setcurrentNote={props.setcurrentNote}
      setColor={props.setColor}
    />
  ));
};

export default NotesItems;
