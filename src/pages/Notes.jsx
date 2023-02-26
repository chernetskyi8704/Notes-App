import React from "react";
import NotesItems from "../components/NotesItems";
import classes from "../styles/NotesItem.module.css";
import NotesForm from "../components/NotesForm";
import { nanoid } from "nanoid";
import MyButton from "../components/UI/button/MyButon";

const Notes = () => {
  const [notes, setNotes] = React.useState([
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
  ]);

  const [notesSettings, setNotesSettings] = React.useState({
    isEdit: false,
    currentNote: {},
    isAddNew: false,
    color: "",
    isColor: false,
  });

  const openForm = e => {
    const target = e.target;
    if (target.tagName === "BUTTON") {
      setNotesSettings(prevNotesSettings => {
        return {
          ...prevNotesSettings,
          isColor: true,
          color: target.value,
        };
      });
    }
  };

  return (
    <div className={classes.notes__container}>
      <div className={classes.select__buttons}>
        <button
          className={classes.select__button}
          onClick={() => {
            setNotesSettings(prevNotesSettings => {
              return {
                ...prevNotesSettings,
                isAddNew: true,
                isColor: false,
                isEdit: false,
              };
            });
          }}
        ></button>
        {notesSettings.isAddNew && (
          <div className={classes.select__colours} onClick={openForm}>
            <button className={classes.select__colour} value="#6e9ecf"></button>
            <button className={classes.select__colour} value="#9acd32"></button>
            <button className={classes.select__colour} value="#f49ac2"></button>
            <button className={classes.select__colour} value="#baa8d8"></button>
            <button className={classes.select__colour} value="#d2b48c"></button>
          </div>
        )}
      </div>

      {notesSettings.isColor || notesSettings.isEdit ? (
        <div className={classes.form}>
          <NotesForm
            notes={notes}
            setNotes={setNotes}
            notesSettings={notesSettings}
            setNotesSettings={setNotesSettings}
          />
        </div>
      ) : null}
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
