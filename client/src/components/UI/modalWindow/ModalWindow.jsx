import React from "react";
import classes from "./modalWindow.module.css";
import { useSelector, useDispatch } from "react-redux";
import { allNotesSettings, setModal, setEdit, setAddNew } from "../../../store/features/notes/notesSlice";

const ModalWindow = ({ children }) => {
  const rootClasses = [classes.modal];
  const dispatch = useDispatch();
  const notesSettings = useSelector(allNotesSettings);

  if (notesSettings.isModal) {
    rootClasses.push(classes.active);
  }

  const handleCloseModal = () => {
    dispatch(setModal(false));
    dispatch(setEdit(false));
    dispatch(setAddNew(false));
  };

  return (
    <div className={rootClasses.join(" ")} onClick={handleCloseModal}>
      {children}
    </div>
  );
};

export default ModalWindow;
