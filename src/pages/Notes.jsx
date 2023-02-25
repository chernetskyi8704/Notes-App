import React from "react";
import NotesItems from "../components/NotesItems";
import classes from "../styles/NotesItem.module.css";
import NotesForm from "../components/NotesForm";
import { nanoid } from "nanoid";

const Notes = () => {
  const [notes, setNotes] = React.useState([
    {
      id: nanoid(),
      title: "Note 1",
      description: "Description 1",
      date: "2021-01-01",
      color: "red",
    },
    {
      id: nanoid(),
      title: "Note 2",
      description: "Description 2",
      date: "2021-01-01",
      color: "green",
    },
    {
      id: nanoid(),
      title: "Note 3",
      description: "Description 3",
      date: "2021-01-01",
      color: "blue",
    },
    {
      id: nanoid(),
      title: "Note 4",
      description: "Description 4",
      date: "2021-01-01",
      color: "yellow",
    },
    {
      id: nanoid(),
      title: "Note 5",
      description: "Description 5",
      date: "2021-01-01",
      color: "purple",
    },
  ]);

  const [isEdit, setIsEdit] = React.useState(false);
  const [currentNote, setcurrentNote] = React.useState({});

  return (
    <div className={classes.notes__container}>
      <div className={classes.notes__buttons}>
        <button className={classes.notes__button}></button>
        <div className={classes.notes__colours}>
          <button className={classes.colours__button}></button>
          <button className={classes.colours__button}></button>
          <button className={classes.colours__button}></button>
          <button className={classes.colours__button}></button>
          <button className={classes.colours__button}></button>
        </div>
      </div>
      <div className={classes.form}>
        <NotesForm
          setNotes={setNotes}
          notes={notes}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          currentNote={currentNote}
        />
      </div>
      <div className={classes.notes__items}>
        <NotesItems
          notes={notes}
          setNotes={setNotes}
          setIsEdit={setIsEdit}
          setcurrentNote={setcurrentNote}
        />
      </div>
    </div>
  );
};

export default Notes;
