import React from "react";
import classes from "./modalWindow.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setNotesSettings, allNotesSettings } from "../../../store/features/notes/notesSlice";

const ModalWindow = ({ children }) => {
  const rootClasses = [classes.modal];
  const dispatch = useDispatch();
  const notesSettings = useSelector(allNotesSettings);

  if (notesSettings.isModal) {
    rootClasses.push(classes.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        dispatch(setNotesSettings({
          ...notesSettings,
          isModal: false,
          isEdit: false,
          isAddNew: false
        }));
      }}
    >
      {children}
    </div>
  );
};

export default ModalWindow;
