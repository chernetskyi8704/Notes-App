import React from "react";
import classes from "../styles/NotesForm.module.css";
import { nanoid } from "nanoid";

const NoteForm = ({ setNotes, notes, isEdit, currentNote, setIsEdit }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentData = new Date().toLocaleDateString();

  React.useEffect(() => {
    if (isEdit) {
      setTitle(currentNote.title);
      setDescription(currentNote.description);
    }
  }, [isEdit]);

  const addNote = e => {
    e.preventDefault();
    if (isEdit) {
      setNotes(
        notes.map(note =>
          note.id === currentNote.id
            ? {
                ...note,
                title,
                description,
                date: currentData,
              }
            : note
        )
      );
      setIsEdit(false);
      setTitle("");
      setDescription("");
    } else {
      setNotes([
        ...notes,
        {
          id: nanoid(),
          title,
          description,
          date: currentData,
          color: "red",
        },
      ]);
    }
  };

  return (
    <form className={classes.notes__form}>
      <div className={classes.notes__form_group}>
        <input
          type="text"
          id="title"
          placeholder="Заголовок"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Описание"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        <button type="button" onClick={addNote}>
          {isEdit ? "Save note" : "Add note"}
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
