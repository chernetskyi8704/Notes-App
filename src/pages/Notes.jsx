import React from "react";
import NotesItems from "../components/NotesItems";
import classes from "../styles/Notes.module.css";
import NoteForm from "../components/NoteForm";
import NotesButtons from "../components/SelectButtons";
import { nanoid } from "nanoid";
import ModalWindow from "../components/UI/modalWindow/ModalWindow";

const Notes = () => {
  const [notes, setNotes] = React.useState(() => {
    return (
      JSON.parse(localStorage.getItem("notes")) || [
        {
          id: nanoid(),
          title: "Note 1",
          description: "Description 1",
          date: "2021-01-01",
          color: "#6E9ECF",
        },
        {
          id: nanoid(),
          title: "Note 2",
          description: "Description 2",
          date: "2021-01-01",
          color: "#9ACD32",
        },
        {
          id: nanoid(),
          title: "Note 3",
          description: "Description 3",
          date: "2021-01-01",
          color: "#F49AC2",
        },
        {
          id: nanoid(),
          title: "Note 4",
          description: "Description 4",
          date: "2021-01-01",
          color: "#BAA8D8",
        },
        {
          id: nanoid(),
          title: "Note 5",
          description: "Description 5",
          date: "2021-01-01",
          color: "#D2B48C",
        },
      ]
    );
  });

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [notesSettings, setNotesSettings] = React.useState(() => {
    return {
      isModal: false,
      isEdit: false,
      currentNote: {},
      isAddNew: false,
      color: "",
      currentData: new Date().toLocaleDateString(),
      title: "",
      description: "",
    };
  });

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

  return (
    <div className={classes.notes__container}>
      <NotesButtons
        notesSettings={notesSettings}
        setNotesSettings={setNotesSettings}
      />
      <ModalWindow
        setNotesSettings={setNotesSettings}
        notesSettings={notesSettings}
      >
        <NoteForm
          notes={notes}
          setNotes={setNotes}
          notesSettings={notesSettings}
          setNotesSettings={setNotesSettings}
        />
      </ModalWindow>
      <div className={classes.notes__items}>
        <NotesItems
          notes={notes}
          setNotes={setNotes}
          setNotesSettings={setNotesSettings}
        />
      </div>
    </div>
  );
};

export default Notes;
