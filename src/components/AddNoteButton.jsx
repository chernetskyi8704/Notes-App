import { useEffect, useState } from "react";
import MyInput from "./UI/input/MyInput";
import classes from "../styles/AddNoteButton.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/animations/AddNoteButtonAnimations.css";
import { useSelector, useDispatch } from "react-redux";
import { showColorButtons, openForm, updateFoundNotes, allNotesSettings, selectAllNotes } from "../store/features/notes/notesSlice";

const AddNoteButton = () => {
  const [searchValue, setSearchValue] = useState("");
  const [visibleButtons, setVisibleButtons] = useState(0);
  const colors = ["#6e9ecf", "#9acd32", "#f49ac2", "#baa8d8", "#d2b48c"];
  const { isAddNew } = useSelector(allNotesSettings);
  const allNotes = useSelector(selectAllNotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateFoundNotes(searchValue));
  }, [searchValue, allNotes]);

  useEffect(() => {
    if (isAddNew) {
      const intervalId = setInterval(() => {
        if (visibleButtons < colors.length) {
          setVisibleButtons(visibleButtons + 1);
        } else {
          clearInterval(intervalId);
        }
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [visibleButtons, isAddNew]);

  const handleOpenForm = ({target}) => {
    if (target.tagName === "BUTTON") {
      const currentColor = target.value;
      dispatch(openForm(currentColor));
    }
  };

  const toggleShowButtons = () => {
    dispatch(showColorButtons());
    setSearchValue("");
    setVisibleButtons(0);
  };

  return (
    <div className={classes.addNoteButton__container}>
      <button
        className={classes.select__button}
        onClick={toggleShowButtons}
      ></button>
      {isAddNew && (
        <div className={classes.select__colours} onClick={handleOpenForm}>
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
