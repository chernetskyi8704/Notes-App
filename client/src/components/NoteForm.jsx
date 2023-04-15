import React from "react";
import classes from "../styles/NoteForm.module.css";
import MyButton from "./UI/button/MyButon";
import { setEdit, setCurrentNote, allNotesSettings, setAddNew, setShowColorButtons } from "../store/features/notes/notesSlice";
import { useAddNoteMutation, useUpdateNoteMutation } from "../store/features/notes/notesApiSlice";
import { useDispatch, useSelector } from "react-redux";

const NoteForm = () => {
  const dispatch = useDispatch();
  const notesSettings = useSelector(allNotesSettings);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const userId = useSelector(state => state.auth.userId);
  const [createNote, {}] = useAddNoteMutation();
  const [updateNote, {}] = useUpdateNoteMutation();

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const date = `${day}.${month}.${year}`;

  React.useEffect(() => {
    if (notesSettings.isEdit) {
      setTitle(notesSettings.currentNote.title);
      setContent(notesSettings.currentNote.content);
    } else {
      setTitle("");
      setContent("");
    }
    if (!notesSettings.isEdit) {
      setTitle("");
      setContent("");
    }
  }, [notesSettings.isEdit]);

  const handleAddNote = async () => {
    if (title && content) {
      await createNote({ userId, title, content, date, color: notesSettings.currentColor });
      dispatch(setAddNew(false));
      dispatch(setCurrentNote(null));
      dispatch(setShowColorButtons(false));
      setTitle("");
      setContent("");
    }
  };

  const handleUpdateNote = async () => {
    if (notesSettings.currentNote._id && title && content) {
      await updateNote({id: notesSettings.currentNote._id, title, content})
      dispatch(setEdit(false));
      dispatch(setCurrentNote(null));
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onClick={e => e.stopPropagation()} onSubmit={e => e.preventDefault()}>
      <div
        className={classes.notes__form}
        style={{ backgroundColor: `${notesSettings.currentColor}` }}
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
          name="content"
          placeholder="Wtite smth..."
          value={content}
          onChange={e => setContent(e.target.value)}
        ></textarea>
        {notesSettings.isEdit ? (
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
