import React from "react";
import classes from "../styles/NoteForm.module.css";
import { nanoid } from "nanoid";
import MyButton from "./UI/button/MyButon";

const NoteForm = ({ notes, setNotes, notesSettings, setNotesSettings }) => {
  React.useEffect(() => {
    if (notesSettings.isEdit) {
      setNotesSettings(prevNotesSettings => {
        return {
          ...prevNotesSettings,
          title: notesSettings.currentNote[0].title,
          description: notesSettings.currentNote[0].description,
        };
      });
    }
  }, [notesSettings.isEdit]);

  const addNote = () => {
    setNotes([
      {
        id: nanoid(),
        title: notesSettings.title,
        description: notesSettings.description,
        date: notesSettings.currentData,
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
              date: notesSettings.currentData,
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
          style={{ height: "100%", width: "100%" }}
          name="description"
          placeholder="Description..."
          rows={2}
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