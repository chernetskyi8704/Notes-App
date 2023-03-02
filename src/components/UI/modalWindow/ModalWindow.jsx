import React from "react";
import classes from "./modalWindow.module.css";

const ModalWindow = ({ children, setNotesSettings, notesSettings }) => {
  const rootClasses = [classes.modal];

  if (notesSettings.isModal) {
    rootClasses.push(classes.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        setNotesSettings(prevNotesSettings => {
          return {
            ...prevNotesSettings,
            isModal: false,
            isEdit: false,
            currentNote: [],
            isAddNew: false,
            title: "",
            description: "",
          };
        });
      }}
    >
      {children}
    </div>
  );
};

export default ModalWindow;
