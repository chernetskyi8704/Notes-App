import React from "react";
import classes from "../styles/NoteForm.module.css";
import MyButton from "./UI/button/MyButon";
import {
  addNote,
  updateNote,
  allNotesSettings,
} from "../store/features/notes/notesSlice";
import { useDispatch, useSelector } from "react-redux";

const NoteForm = () => {
  const dispatch = useDispatch();
  const { currentColor, isEdit, currentNote } = useSelector(allNotesSettings);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    if (isEdit) {
      setTitle(currentNote[0].title);
      setDescription(currentNote[0].description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [isEdit]);

  const handleAddNote = () => {
    if (title && description) {
      dispatch(addNote(title, description, currentColor));
      setTitle("");
      setDescription("");
    }
  };

  const handleUpdateNote = e => {
    if (currentNote[0].id && title && description) {
      const updatedFields = {
        id: currentNote[0].id,
        title,
        description,
      };
      dispatch(updateNote(updatedFields));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onClick={e => e.stopPropagation()} onSubmit={e => e.preventDefault()}>
      <div
        className={classes.notes__form}
        style={{ backgroundColor: `${currentColor}` }}
      >
        <input
          type="text"
          id="title"
          placeholder="Title..."
          value={title}
          maxLength="20"
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          name="description"
          placeholder="Description..."
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        {isEdit ? (
          <MyButton type="button" onClick={handleUpdateNote}>
            Save
          </MyButton>
        ) : (
          <MyButton type="button" onClick={handleAddNote}>
            Add
          </MyButton>
        )}
      </div>
    </form>
  );
};

export default NoteForm;
