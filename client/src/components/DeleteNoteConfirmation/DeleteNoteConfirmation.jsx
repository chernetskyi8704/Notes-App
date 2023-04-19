import React from "react";
import classes from "./DeleteNoteConfirmation.module.css";

const DeleteNoteConfirmation = ({ isModal, deleteNote }) => {
  const handleDeleteNote = () => {
    deleteNote();
  };

  const handleCloseModal = () => {
    isModal(false);
  };

  return (
    <section className={classes.deleteAlert}>
      <p className={classes.message}>Are you sure?</p>
      <div className={classes.buttonsContainer}>
        <button className={classes.confirmButton} onClick={handleDeleteNote}>
          Confirm
        </button>
        <button className={classes.cancelButton} onClick={handleCloseModal}>
          Cancel
        </button>
      </div>
    </section>
  );
};

export default DeleteNoteConfirmation;
