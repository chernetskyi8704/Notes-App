import { useState, useEffect, MouseEvent, memo } from "react";
import { setEdit, setCurrentNote, allNotesSettings, setAddNew, setShowColorButtons } from "../../store/features/notes/notesSlice.ts";
import { useAddNoteMutation, useUpdateNoteMutation } from "../../store/features/notes/notesApiSlice.ts";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.ts";
import { StyledButton } from "../UI/styledButton/StyledButton.tsx";
import { allAuthSettings } from "../../store/features/auth/authSlice.ts";

import classes from "../NoteItem/NoteItem.module.css";
import ModalWindow from "../UI/modalWindow/ModalWindow.tsx";

const NoteForm = memo(() => {
  const [modal, isModal] = useState<boolean>(false);
  const { isAddNew, isEdit } = useAppSelector(allNotesSettings);

  useEffect(() => {
    isAddNew || isEdit ? isModal(true) : isModal(false);
  }, [isAddNew, isEdit]);

  const dispatch = useAppDispatch();
  const notesSettings = useAppSelector(allNotesSettings);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { userId } = useAppSelector(allAuthSettings);

  const [createNote, {}] = useAddNoteMutation();
  const [updateNote, {}] = useUpdateNoteMutation();

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const date: string = `${day}.${month}.${year}`;

  useEffect(() => {
    if (notesSettings.isEdit && notesSettings.currentNote) {
      setTitle(notesSettings.currentNote.title);
      setContent(notesSettings.currentNote.content);
    } else {
      setTitle("");
      setContent("");
    }
    if (!notesSettings.isEdit) {
      setTitle("");
      setContent("");
    }
  }, [notesSettings.isEdit]);

  const handleAddNote = async () => {
    if (title && content && userId) {
      await createNote({
        userId,
        title,
        content,
        date,
        color: notesSettings.currentColor,
      });
      dispatch(setAddNew(false));
      dispatch(setCurrentNote(null));
      dispatch(setShowColorButtons(false));
      setTitle("");
      setContent("");
    }
  };

  const handleUpdateNote = async () => {
    if (notesSettings.currentNote && title && content) {
      await updateNote({ _id: notesSettings.currentNote._id, title, content });
      dispatch(setEdit(false));
      dispatch(setCurrentNote(null));
      setTitle("");
      setContent("");
    }
  };

  return (
    <ModalWindow visible={modal} setVisible={isModal}>
      <form
        onClick={(e: MouseEvent<HTMLFormElement>) => e.stopPropagation()}
        onSubmit={(e: MouseEvent<HTMLFormElement>) => e.preventDefault()}
        className={classes.container}
      >
        <div
          className={classes.notes__form}
          style={{ backgroundColor: `${notesSettings.currentColor}` }}
        >
          <input
            type="text"
            className={classes.whitePlaceholder}
            placeholder="Title..."
            value={title}
            maxLength={20}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            name="content"
            className={classes.whitePlaceholder}
            placeholder="Make a note of smth..."
            value={content}
            onChange={e => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.control_buttons}>
          {notesSettings.isEdit ? (
            <StyledButton
              className={classes.noteForm_button}
              type="button"
              onClick={handleUpdateNote}
              currentColor={notesSettings.currentColor}
            >
              Save
            </StyledButton>
          ) : (
            <StyledButton
              className={classes.noteForm_button}
              type="button"
              onClick={handleAddNote}
              currentColor={notesSettings.currentColor}
            >
              Add
            </StyledButton>
          )}
        </div>
      </form>
    </ModalWindow>
  );
});

export default NoteForm;
