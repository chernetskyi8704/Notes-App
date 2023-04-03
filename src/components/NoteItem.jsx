import React from "react";
import classes from "../styles/NoteItem.module.css";
import MyButton from "./UI/button/MyButon";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteNote, openNote, editNote} from "../store/features/notes/notesSlice";

const NoteItem = ({ id,bodyColour,title,body,currentData }) => {
  const router = useNavigate();
  const dispatch = useDispatch();

  const handleEditNote = () => {
      dispatch(editNote({id, color: bodyColour}))
  };

  const handleDeleteNote = () => {
    dispatch(deleteNote(id));
  };

  const handleOpenNote = () => {
    dispatch(openNote(id));
    router(`/notes/${id}`);
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
        <MyButton type="button" onClick={handleOpenNote}>
          Open
        </MyButton>
        <MyButton
          className={classes.edit__button}
          type="button"
          onClick={handleEditNote}
        >
          Edit
        </MyButton>
        <MyButton type="button" onClick={handleDeleteNote}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default NoteItem;
