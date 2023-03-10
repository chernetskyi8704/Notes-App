import React from "react";
import NotesItems from "../../components/NotesItems";
import classes from "./Notes.module.css";
import NoteForm from "../../components/NoteForm";
import NotesControlPanel from "../../components/NotesControlPanel";
import { nanoid } from "nanoid";
import ModalWindow from "../../components/UI/modalWindow/ModalWindow";

const Notes = () => {
  const [notes, setNotes] = React.useState(() => {
    return [
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
    ];
  });

  const [notesSettings, setNotesSettings] = React.useState(() => {
    return {
      isModal: false,
      isEdit: false,
      isAddNew: false,
      searchNotes: [],
      currentNote: [],
      color: "",
    };
  });

  return (
    <div className={classes.notes__container}>
      <NotesControlPanel
        notesSettings={notesSettings}
        setNotesSettings={setNotesSettings}
        notes={notes}
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
        {!notesSettings.searchNotes.length && (
          <div className={classes.notes__empty}>
            No notes were created yet...????
          </div>
        )}
        <NotesItems
          notes={notes}
          setNotes={setNotes}
          setNotesSettings={setNotesSettings}
          notesSettings={notesSettings}
        />
      </div>
    </div>
  );
};

export default Notes;
