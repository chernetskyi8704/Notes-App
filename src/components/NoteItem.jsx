import React from "react";
import classes from "../styles/NoteItem.module.css";
import MyButton from "./UI/button/MyButon";
import { useNavigate } from "react-router-dom";

const NoteItem = ({ notes,setNotes,setNotesSettings,id,bodyColour,title,body,currentData }) => {
  const router = useNavigate();
  const editNote = ({ target }) => {
    const notesColor = target.parentElement.parentElement.style.backgroundColor;
    setNotesSettings(prevNotesSettings => {
      return {
        ...prevNotesSettings,
        isEdit: true,
        isModal: true,
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

  const openedNote = () => {
    const openedNote = notes.filter(note => {
      router(`/notes/${title}`);
      if (note.id === id) return note;
    });
    localStorage.setItem("openedNote", JSON.stringify(openedNote));
  };

  return (
    <div
      className={classes.note__item}
      style={{
        backgroundColor: `${bodyColour}`,
      }}
    >
      <div className={classes.note__info}>
        <h3 className={classes.note__title}>{title}</h3>
        <p className={classes.note__body}>{body}</p>
      </div>
      <strong className={classes.note__data}>{currentData}</strong>
      <div className={classes.note__buttons}>
        <MyButton type="button" onClick={openedNote}>
          Open
        </MyButton>
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

export default NoteItem;
