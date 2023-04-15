import React from "react";
import classes from "./modalWindow.module.css";
import { useSelector, useDispatch } from "react-redux";
import { allNotesSettings, setEdit, setAddNew, setShowColorButtons } from "../../../store/features/notes/notesSlice";

const ModalWindow = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.modal];
  const dispatch = useDispatch();
  const notesSettings = useSelector(allNotesSettings);

  if (visible) {
    rootClasses.push(classes.active);
  }

  const handleCloseModal = () => {
    dispatch(setVisible(false));
    if (notesSettings.isEdit) {
      dispatch(setEdit(false));
    }
    if (notesSettings.isAddNew) {
      dispatch(setAddNew(false));
    }
    if(notesSettings.showColorButtons){
      dispatch(setShowColorButtons(false))
    }
  };

  return (
    <div className={rootClasses.join(" ")} onClick={handleCloseModal}>
      {children}
    </div>
  );
};

export default ModalWindow;
