import { useEffect, useState, MouseEvent } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  setAddNew,
  setCurrentNote,
  setCurrentColor,
  setShowColorButtons,
  allNotesSettings,
} from "../../store/features/notes/notesSlice";

import classes from "./AddNoteButton.module.css";
import "../../styles/animations/AddNoteButtonAnimations.css";

const AddNoteButton = () => {
  const [visibleButtons, setVisibleButtons] = useState<number>(0);
  const colors: string[] = [
    "#b8ccdd",
    "#91aabf",
    "#62809a",
    "#a1bfdd",
    "#799cbf",
    "#42678b",
  ];
  const dispatch = useAppDispatch();
  const { showColorButtons } = useAppSelector(allNotesSettings);

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

  const handleOpenForm = ({ target }: MouseEvent<HTMLDivElement>) => {
    if("value" in target) {
      const currentColor = (target as HTMLInputElement).value;
      dispatch(setAddNew(true));
      dispatch(setCurrentColor(currentColor));
      dispatch(setCurrentNote(null));
    }
  };

  const toggleShowButtons = (): void => {
    dispatch(setShowColorButtons(!showColorButtons));
    setVisibleButtons(0);
  };

  return (
    <>
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
    </>
  );
};

export default AddNoteButton;
