import React from "react";
import classes from "./NoteItem.module.css";
import MyButton from "../UI/button/MyButon";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteNote,
  openNote,
  editNote,
} from "../../store/features/notes/notesSlice";

const NoteItem = ({ title, content, id, note, date, color }) => {
  const router = useNavigate();
  const dispatch = useDispatch();

  const handleEditNote = () => {
    // dispatch(editNote({id, color: bodyColour}))
  };

  const handleDeleteNote = () => {
    // dispatch(deleteNote(id));
  };

  const handleOpenNote = () => {
    // dispatch(openNote(id));
    // router(`/notes/${id}`);
  };

  return (
    <section className={classes.note__item} style={{backgroundColor: `${color}`}}>
      <div className={classes.note__info}>
        <h3 className={classes.note__title}>{title}</h3>
        <p className={classes.note__body}>{content}</p>
      </div>
      <time className={classes.note__data}>{date}</time>
      <div className={classes.note__buttons}>
        <button
          className={classes.edit__button}
          type="button"
          onClick={handleEditNote}
        >
          Edit
        </button>
        <button type="button" onClick={handleDeleteNote}>
          Delete
        </button>
      </div>
    </section>
  );
};

export default NoteItem;
