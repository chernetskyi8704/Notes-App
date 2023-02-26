import React from "react";
import classes from "../styles/NotesItem.module.css";
import MyButton from "../components/UI/button/MyButon";

const NotesItem = props => {
  const editNote = e => {
    const notesColor =
      e.target.parentElement.parentElement.style.backgroundColor;
    props.setColor(notesColor);
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
        <MyButton type="button">Open</MyButton>
        <MyButton
          className={classes.edit__button}
          type="button"
          onClick={editNote}
        >
          Edit
        </MyButton>
        <MyButton type="button" onClick={deleteNote}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default NotesItem;
