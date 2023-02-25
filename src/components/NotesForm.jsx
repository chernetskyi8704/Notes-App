import React from "react";
import classes from "../styles/NotesForm.module.css";

const NoteForm = ({ setNotes, notes }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentData = new Date().toLocaleDateString();

  const addNote = e => {
    e.preventDefault();
    const newNote = {
      id: `${notes.length + 1}`,
      title: `${title}`,
      description: `${description}`,
      date: "2021-01-01",
      color: "red",
      data: `${currentData}`,
    };

    setNotes([...notes, newNote]);
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
        <button type="submit" onClick={addNote}>
          Add note
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
