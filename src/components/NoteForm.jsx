import React from "react";
import classes from "../styles/NoteForm.module.css";
import { nanoid } from "nanoid";
import MyButton from "./UI/button/MyButon";

const NoteForm = ({ notes, setNotes, notesSettings, setNotesSettings }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    if (notesSettings.isEdit) {
      setTitle(notesSettings.currentNote[0].title);
      setDescription(notesSettings.currentNote[0].description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [notesSettings.isEdit]);

  const currentData = new Date().toLocaleDateString();

  const addNote = () => {
    setNotes([
      {
        id: nanoid(),
        title: title,
        description: description,
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
              title: title,
              description: description,
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
    <form 
      onClick={e => e.stopPropagation()} 
      onSubmit={e => e.preventDefault()}
      >
      <div
        className={classes.notes__form}
        style={{ backgroundColor: `${notesSettings.color}` }}
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
        {notesSettings.isEdit ? (
          <MyButton type="button" onClick={updateNote}>
            Save
          </MyButton>
        ) : (
          <MyButton type="button" onClick={addNote}>
            Add
          </MyButton>
        )}
      </div>
    </form>
  );
};

export default NoteForm;
