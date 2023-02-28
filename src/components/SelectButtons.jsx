import React from "react";
import classes from "../styles/SelectButtons.module.css";
import MyInput from "./UI/input/MyInput";

const NotesButtons = ({ notesSettings, setNotesSettings }) => {
  const [isSearch, setIsSearch] = React.useState(false);
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

  return (
    <div className={classes.select__buttons}>
      <button
        className={classes.search__button}
        onClick={() => setIsSearch(prevIsSearch => !prevIsSearch)}
      >
        <i class="fas fa-search"></i>
      </button>
      {isSearch && (
        <div className={classes.search__input} onClick={openForm}>
          <MyInput></MyInput>
        </div>
      )}
      <button
        className={classes.select__button}
        onClick={() => {
          setNotesSettings(prevNotesSettings => {
            return {
              ...prevNotesSettings,
              isAddNew: !prevNotesSettings.isAddNew,
              isEdit: false,
              currentNote: {},
            };
          });
        }}
      ></button>
      {notesSettings.isAddNew && (
        <div className={classes.select__colours} onClick={openForm}>
          {allColorButtons}
        </div>
      )}
    </div>
  );
};

export default NotesButtons;
