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
      <h3 className={classes.note__title}>{props.title}</h3>
      <p className={classes.note__body}>{props.body}</p>
      <small>{props.currentData}</small>
      <div className={classes.note__buttons}>
        <button type="button" onClick={deleteNote}>
          Delete
        </button>
        <button type="button" onClick={editNote}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default NotesItem;
