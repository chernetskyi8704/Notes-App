import React from "react";
import classes from "../styles/AddNoteButton.module.css";

const AddNoteButton = ({ notesSettings, setNotesSettings, setSearchValue }) => {
  const [colors, setColors] = React.useState([
    "#6e9ecf",
    "#9acd32",
    "#f49ac2",
    "#baa8d8",
    "#d2b48c",
  ]);

  const allColorButtons = colors.map(color => (
    <button
      key={color}
      className={classes.select__colour}
      value={color}
      style={{ backgroundColor: color }}
    ></button>
  ));

  const openForm = e => {
    const target = e.target;
    if (target.tagName === "BUTTON") {
      setNotesSettings(prevNotesSettings => {
        return {
          ...prevNotesSettings,
          isModal: true,
          color: target.value,
          isAddNew: false,
        };
      });
    }
  };

  const showColoursButtons = e => {
    e.stopPropagation();
    setNotesSettings(prevNotesSettings => {
      return {
        ...prevNotesSettings,
        isAddNew: !prevNotesSettings.isAddNew,
        isEdit: false,
        isSearch: false,
        currentNote: {},
      };
    });
    setSearchValue("");
  };
  return (
    <>
      <button
        className={classes.select__button}
        onClick={showColoursButtons}
      ></button>
      {notesSettings.isAddNew && (
        <div className={classes.select__colours} onClick={openForm}>
          {allColorButtons}
        </div>
      )}
    </>
  );
};

export default AddNoteButton;
