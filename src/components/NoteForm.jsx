import React from "react";
import classes from "../styles/NotesForm.module.css";
import { nanoid } from "nanoid";
import MyButton from "./UI/button/MyButon";

const NoteForm = ({ notes, setNotes, notesSettings, setNotesSettings }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentData = new Date().toLocaleDateString();

  React.useEffect(() => {
    if (notesSettings.isEdit) {
      setTitle(notesSettings.currentNote[0].title);
      setDescription(notesSettings.currentNote[0].description);
    }
  }, [notesSettings.isEdit]);

  const addNote = () => {
    setNotes([
      {
        id: nanoid(),
        title,
        description,
        date: currentData,
        color: `${notesSettings.color}`,
      },
      ...notes,
    ]);
    setNotesSettings(prevNotesSettings => {
      return {
        ...prevNotesSettings,
        isModal: false,
      };
    });
    setTitle("");
    setDescription("");
  };

  const updateNote = () => {
    if (notesSettings.isEdit)
      setNotes(prevNotes => {
        const newNotesArr = [];
        for (let i = 0; i < prevNotes.length; i++) {
          if (prevNotes[i].id === notesSettings.currentNote[0].id) {
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

    setNotesSettings(prevNotesSettings => {
      return {
        ...prevNotesSettings,
        isEdit: false,
        isModal: false,
      };
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form className={classes.notes__form} onClick={e => e.stopPropagation()}>
      <div
        className={classes.notes__form_group}
        style={{ backgroundColor: `${notesSettings.color}` }}
      >
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
        {notesSettings.isEdit ? (
          <MyButton type="button" onClick={updateNote}>
            Save changes
          </MyButton>
        ) : (
          <MyButton type="button" onClick={addNote}>
            Add note
          </MyButton>
        )}
      </div>
    </form>
  );
};

export default NoteForm;
