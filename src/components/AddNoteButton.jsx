import React from "react";
import MyInput from "./UI/input/MyInput";
import classes from "../styles/AddNoteButton.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/animations/AddNoteButtonAnimations.css";

const AddNoteButton = ({ notesSettings, setNotesSettings, notes }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [visibleButtons, setVisibleButtons] = React.useState(0);
  const colors = ["#6e9ecf", "#9acd32", "#f49ac2", "#baa8d8", "#d2b48c"];

  React.useEffect(() => {
    const searchNotes = () => {
      if (searchValue === "") return notes;
      return JSON.parse(localStorage.getItem("notes")).filter(note => {
        return note.title.toLowerCase().includes(searchValue.toLowerCase());
      });
    };
    setNotesSettings(prev => ({ ...prev, searchNotes: searchNotes() }));
  }, [searchValue, notes]);

  React.useEffect(() => {
    if (notesSettings.isAddNew) {
      const intervalId = setInterval(() => {
        if (visibleButtons < colors.length) {
          setVisibleButtons(visibleButtons + 1);
        } else {
          clearInterval(intervalId);
        }
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [visibleButtons, notesSettings.isAddNew]);

  const openForm = e => {
    const target = e.target;
    if (target.tagName === "BUTTON") {
      setNotesSettings(prevNotesSettings => {
        return {
          ...prevNotesSettings,
          isModal: true,
          color: target.value,
          currentNote: [],
        };
      });
    }
  };

  const toggleShowButtons = e => {
    setNotesSettings(prevNotesSettings => {
      return {
        ...prevNotesSettings,
        isAddNew: !prevNotesSettings.isAddNew,
        isEdit: false,
      };
    });
    setSearchValue("");
    setVisibleButtons(0);
  };

  return (
    <div className={classes.addNoteButton__container}>
      <button
        className={classes.select__button}
        onClick={toggleShowButtons}
      ></button>
      {notesSettings.isAddNew && (
        <div className={classes.select__colours} onClick={openForm}>
          <TransitionGroup component={null} classNames="colorButton">
            {colors.slice(0, visibleButtons).map(color => (
              <CSSTransition timeout={500} key={color} classNames="colorButton">
                <button
                  className="colorButton"
                  value={color}
                  style={{ backgroundColor: color }}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      )}
      <MyInput
        placeholder="Search..."
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onClick={e => e.stopPropagation()}
      ></MyInput>
    </div>
  );
};

export default AddNoteButton;
