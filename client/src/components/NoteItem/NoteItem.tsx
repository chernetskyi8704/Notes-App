import { useState, memo } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { setEdit, setCurrentNote, setCurrentColor, setShowColorButtons } from "../../store/features/notes/notesSlice";
import { useDeleteNoteMutation } from "../../store/features/notes/notesApiSlice";
import { StyledButton } from "../UI/styledButton/StyledButton";
import { INote } from "../../types/INote";

import classes from "./NoteItem.module.css";
import ModalWindow from "../UI/modalWindow/ModalWindow";
import DeleteNoteConfirmation from "../DeleteNoteConfirmation/DeleteNoteConfirmation";


interface NoteItemProps {
  note: INote;
}

const NoteItem = memo(({ note }: NoteItemProps) => {
  const dispatch = useAppDispatch();
  const [deleteNote, {}] = useDeleteNoteMutation();
  const [modal, isModal] = useState<boolean>(false);

  const handleEditNote = () => {
    dispatch(setCurrentNote(note));
    dispatch(setCurrentColor(note.color));
    dispatch(setShowColorButtons(false));
    dispatch(setEdit(true));
  };

  const handleDeleteNote = () => {
    deleteNote(note);
  };

  const handleShowDeleteAlert = () => {
    isModal(true);
  };

  return (
    <li className={classes.container}>
      <div
        className={classes.notes__form}
        style={{ backgroundColor: `${note.color}` }}
      >
        <h3 className={classes.note__title}>{note.title}</h3>
        <p className={classes.note__body}>{note.content}</p>
        <time className={classes.note_data}>{note.date}</time>
      </div>
      <div className={classes.control_buttons}>
        <StyledButton
          className={classes.noteForm_button}
          type="button"
          onClick={handleEditNote}
          currentColor={note.color}
        >
          Edit
        </StyledButton>
        <span style={{ border: `1px solid ${note.color}` }}></span>
        <StyledButton
          className={classes.noteForm_button}
          type="button"
          onClick={handleShowDeleteAlert}
          currentColor={note.color}
        >
          Delete
        </StyledButton>
      </div>
      <ModalWindow visible={modal} setVisible={isModal}>
        <DeleteNoteConfirmation
          deleteNote={handleDeleteNote}
          isModal={isModal}
        />
      </ModalWindow>
    </li>
  );
});

export default NoteItem;
