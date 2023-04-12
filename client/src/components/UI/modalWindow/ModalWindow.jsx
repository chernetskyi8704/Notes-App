import React from "react";
import classes from "./modalWindow.module.css";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, allNotesSettings } from "../../../store/features/notes/notesSlice";

const ModalWindow = ({ children }) => {
  const rootClasses = [classes.modal];
  const dispatch = useDispatch();
  const {isModal} = useSelector(allNotesSettings);

  if (isModal) {
    rootClasses.push(classes.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        dispatch(closeModal());
      }}
    >
      {children}
    </div>
  );
};

export default ModalWindow;
