import React from "react";
import NotesItems from "../components/NotesItems";
import classes from "../styles/NotesItem.module.css";
import NotesForm from "../components/NotesForm";

const Notes = () => {
  const [notes, setNotes] = React.useState([
    {
      id: 1,
      title: "Note 1",
      description: "Description 1",
      date: "2021-01-01",
      color: "red",
      data: "2021-01-01",
    },
    {
      id: 2,
      title: "Note 2",
      description: "Description 2",
      date: "2021-01-01",
      color: "green",
      data: "2021-01-01",
    },
    {
      id: 3,
      title: "Note 3",
      description: "Description 3",
      date: "2021-01-01",
      color: "blue",
      data: "2021-01-01",
    },
    {
      id: 4,
      title: "Note 4",
      description: "Description 4",
      date: "2021-01-01",
      color: "yellow",
      data: "2021-01-01",
    },
    {
      id: 5,
      title: "Note 5",
      description: "Description 5",
      date: "2021-01-01",
      color: "purple",
      data: "2021-01-01",
    },
  ]);

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
        <NotesForm setNotes={setNotes} notes={notes} />
      </div>
      <div className={classes.notes__items}>
        <NotesItems notes={notes} />
      </div>
    </div>
  );
};

export default Notes;
