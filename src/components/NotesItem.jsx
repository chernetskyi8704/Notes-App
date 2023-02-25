import React from "react";
import classes from "../styles/NotesItem.module.css";

const NotesItem = ({
  setNotes,
  notes,
  id,
  bodyColour,
  title,
  body,
  currentData,
}) => {
  const deleteNote = e => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div
      className={classes.note__item}
      style={{
        backgroundColor: `${bodyColour}`,
      }}
    >
      <h3>{title}</h3>
      <p
        style={{
          color: "red",
          fontSize: "20px",
          fontWeight: "bold",
          whiteSpace: "pre-wrap",
        }}
      >
        {body}
      </p>
      <small>{currentData}</small>
      <button type="button" onClick={deleteNote}>
        Delete
      </button>
      <button type="button">Edit</button>
    </div>
  );
};

export default NotesItem;
