import React from "react";
import classes from "../styles/NotesForm.module.css";

const NoteForm = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

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
        <button type="submit">Add note</button>
      </div>
    </form>
  );
};

export default NoteForm;
