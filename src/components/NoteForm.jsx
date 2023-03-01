import React from "react";
import classes from "../styles/NoteForm.module.css";
import { nanoid } from "nanoid";
import MyButton from "./UI/button/MyButon";

const NoteForm = ({ notes, setNotes, notesSettings, setNotesSettings }) => {
  const currentData = new Date().toLocaleDateString();
  const addNote = () => {
    setNotes([
      {
        id: nanoid(),
        title: notesSettings.title,
        description: notesSettings.description,
        date: currentData,
        color: `${notesSettings.color}`,
      },
      ...notes,
    ]);

    setNotesSettings(prevNotesSettings => {
      return {
        ...prevNotesSettings,
        isModal: false,
        title: "",
        description: "",
      };
    });
  };

  const updateNote = () => {
    if (notesSettings.isEdit)
      setNotes(prevNotes => {
        const newNotesArr = [];
        for (let i = 0; i < prevNotes.length; i++) {
          if (prevNotes[i].id === notesSettings.currentNote[0].id) {
            newNotesArr.unshift({
              ...prevNotes[i],
              title: notesSettings.title,
              description: notesSettings.description,
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
        title: "",
        description: "",
      };
    });
  };

  return (
    <form onClick={e => e.stopPropagation()}>
      <div
        className={classes.notes__form}
        style={{ backgroundColor: `${notesSettings.color}` }}
      >
        <input
          type="text"
          id="title"
          placeholder="Title..."
          value={notesSettings.title}
          maxLength="20"
          onChange={e =>
            setNotesSettings(prevNotesSettings => {
              return {
                ...prevNotesSettings,
                title: e.target.value,
              };
            })
          }
        />
        <textarea
          name="description"
          placeholder="Description..."
          value={notesSettings.description}
          onChange={e =>
            setNotesSettings(prevNotesSettings => {
              return {
                ...prevNotesSettings,
                description: e.target.value,
              };
            })
          }
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
