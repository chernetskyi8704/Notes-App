import { useEffect, useState } from "react";
import MyInput from "../UI/input/MyInput";
import classes from "./AddNoteButton.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../styles/animations/AddNoteButtonAnimations.css";
import { useDispatch, useSelector } from "react-redux";
import { setAddNew, setCurrentNote, setCurrentColor, setShowColorButtons, allNotesSettings} from "../../store/features/notes/notesSlice";

const AddNoteButton = ({ searchValue, setSearchValue }) => {
  const [visibleButtons, setVisibleButtons] = useState(0);
  const colors = ["#b8ccdd", "#91aabf", "#62809a", "#a1bfdd", "#799cbf", "#42678b"];
  const dispatch = useDispatch();
  const { showColorButtons } = useSelector(allNotesSettings);

  useEffect(() => {
    if (showColorButtons) {
      const intervalId = setInterval(() => {
        if (visibleButtons < colors.length) {
          setVisibleButtons(visibleButtons + 1);
        } else {
          clearInterval(intervalId);
        }
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [visibleButtons, showColorButtons]);

  const handleOpenForm = ({ target }) => {
    if (target.tagName === "BUTTON") {
      const currentColor = target.value;
      dispatch(setAddNew(true));
      dispatch(setCurrentColor(currentColor));
      dispatch(setCurrentNote(null));
    }
  };

  const toggleShowButtons = () => {
    dispatch(setShowColorButtons(!showColorButtons));
    setVisibleButtons(0);
  };

  const handleSetSearchValue = (e) => setSearchValue(e.target.value);

  return (
    <div className={classes.addNoteButton__container}>
      <button
        className={classes.select__button}
        onClick={toggleShowButtons}
      ></button>
      {showColorButtons && (
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
        onChange={handleSetSearchValue}
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
};

export default AddNoteButton;
