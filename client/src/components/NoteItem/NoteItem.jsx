import React from "react";
import classes from "./NoteItem.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal, setEdit, setCurrentNote, setCurrentColor  } from "../../store/features/notes/notesSlice";
import { useDeleteNoteMutation } from "../../store/features/notes/notesApiSlice";

const NoteItem = ({ note }) => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const [deleteNote, {}] = useDeleteNoteMutation();

  const handleEditNote = () => {
    dispatch(setCurrentNote(note))
    dispatch(setCurrentColor(note.color))
    dispatch(setEdit(true))
    dispatch(setModal(true))
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
