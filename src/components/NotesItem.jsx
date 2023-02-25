import React from "react";
import classes from "../styles/NotesItem.module.css";

const NotesItem = props => {
  const editNote = e => {
    props.setIsEdit(true);
    const currentNote = props.notes.filter(note => {
      if (note.id === props.id) return note;
    });

    props.setcurrentNote(...currentNote);
  };

  const deleteNote = e => {
    props.setNotes(props.notes.filter(note => note.id !== props.id));
  };

  return (
    <div
      className={classes.note__item}
      style={{
        backgroundColor: `${props.bodyColour}`,
      }}
    >
      <h3>{props.title}</h3>
      <p
        style={{
          color: "red",
          fontSize: "20px",
          fontWeight: "bold",
          whiteSpace: "pre-wrap",
        }}
      >
        {props.body}
      </p>
      <small>{props.currentData}</small>
      <button type="button" onClick={deleteNote}>
        Delete
      </button>
      <button type="button" onClick={editNote}>
        Edit
      </button>
    </div>
  );
};

export default NotesItem;
