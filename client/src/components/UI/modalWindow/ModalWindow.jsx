import React from "react";
import classes from "./ModalWindow.module.css";
import { useSelector, useDispatch } from "react-redux";
import { allNotesSettings, setEdit, setAddNew, setShowColorButtons } from "../../../store/features/notes/notesSlice";
import { allAccountSettings, setIsModalWindowWithSettingsOpen, setIsModalWindowWithDeleteAccountFormOpen } from "../../../store/features/accountSettings/accountSettingsSlice";

const ModalWindow = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.modal];
  const dispatch = useDispatch();
  const notesSettings = useSelector(allNotesSettings);
  const accountSettings = useSelector(allAccountSettings);

  if (visible) {
    rootClasses.push(classes.active);
  }

  const handleCloseModal = () => {
    setVisible(false);
    if (notesSettings.isEdit) {
      dispatch(setEdit(false));
    }
    if (notesSettings.isAddNew) {
      dispatch(setAddNew(false));
    }
    if (notesSettings.showColorButtons) {
      dispatch(setShowColorButtons(false));
    }
    if(accountSettings.isModalWindowWithDeleteAccountFormOpen){
      dispatch(setIsModalWindowWithSettingsOpen(true));
      dispatch(setIsModalWindowWithDeleteAccountFormOpen(false));
    }
  };

  return (
    <div className={rootClasses.join(" ")} onClick={handleCloseModal}>
      {children}
    </div>
  );
};

export default ModalWindow;
