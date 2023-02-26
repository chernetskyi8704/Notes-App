import React from "react";
import classes from "../styles/NotesItem.module.css";
import MyButton from "../components/UI/button/MyButon";

const NotesItem = ({ notes,setNotes,setNotesSettings,id,bodyColour,title,body,currentData }) => {
  
  const editNote = ({ target }) => {
    const notesColor = target.parentElement.parentElement.style.backgroundColor;
    setNotesSettings(prevNotesSettings => {
      return {
        ...prevNotesSettings,
        isEdit: true,
        color: notesColor,
      };
    });

    const currentNote = notes.filter(note => {
      if (note.id === id) return note;
    });

    setNotesSettings(prevNotesSettings => {
      return {
        ...prevNotesSettings,
        currentNote: currentNote,
      };
    });
  };

  const deleteNote = () => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div
      className={classes.note__item}
      style={{
        backgroundColor: `${bodyColour}`,
      }}
    >
      <h3 className={classes.note__title}>{title}</h3>
      <p className={classes.note__body}>{body}</p>
      <small>{currentData}</small>
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
