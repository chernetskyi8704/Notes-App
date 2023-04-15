import React from "react";
import classes from "./NoteItem.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEdit, setCurrentNote, setCurrentColor, setShowColorButtons  } from "../../store/features/notes/notesSlice";
import { useDeleteNoteMutation } from "../../store/features/notes/notesApiSlice";
import MyButton from "../UI/button/MyButon";

const NoteItem = ({ note }) => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const [deleteNote, {}] = useDeleteNoteMutation();

  const handleEditNote = () => {
    dispatch(setCurrentNote(note));
    dispatch(setCurrentColor(note.color));
    dispatch(setShowColorButtons(false))
    dispatch(setEdit(true));
  };

  const handleDeleteNote = () => {
    deleteNote(note._id);
  };

  const handleOpenNote = () => {
    // dispatch(openNote(id));
    // router(`/notes/${id}`);
  };

  return (
    <section
      className={classes.note__item}
      style={{ backgroundColor: `${note.color}` }}
    >
      <div className={classes.note__info}>
        <h3 className={classes.note__title}>{note.title}</h3>
        <p className={classes.note__body}>{note.content}</p>
      </div>
      <time className={classes.note__data}>{note.date}</time>
      <div className={classes.note__buttons}>
        <MyButton type="button" onClick={handleEditNote}>
          Edit
        </MyButton>
        <MyButton type="button" onClick={handleDeleteNote}>
          Delete
        </MyButton>
      </div>
    </section>
  );
};

export default NoteItem;
