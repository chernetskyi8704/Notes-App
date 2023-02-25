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

  const addNote = () => {
    setNotes([
      {
        id: nanoid(),
        title,
        description,
        date: currentData,
        color: "red",
      },
      ...notes,
    ]);
    setTitle("");
    setDescription("");
  };

  const updateNote = () => {
    if (isEdit)
      setNotes(prevNotes => {
        const newNotesArr = [];
        for (let i = 0; i < prevNotes.length; i++) {
          if (prevNotes[i].id === currentNote.id) {
            newNotesArr.unshift({
              ...prevNotes[i],
              title,
              description,
              date: currentData,
            });
          } else {
            newNotesArr.push(prevNotes[i]);
          }
        }
        return newNotesArr;
      });
    setIsEdit(false);
    setTitle("");
    setDescription("");
  };

  return (
    <form className={classes.notes__form}>
      <div className={classes.notes__form_group}>
        <input
          type="text"
          id="title"
          placeholder="Заголовок"
          value={title}
          maxLength="20"
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          style={{ height: "100%", width: "100%" }}
          name="description"
          placeholder="Описание"
          rows={2}
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        {isEdit ? (
          <button type="button" onClick={updateNote}>
            Save changes
          </button>
        ) : (
          <button type="button" onClick={addNote}>
            Add note
          </button>
        )}
      </div>
    </form>
  );
};

export default NoteForm;
